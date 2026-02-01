/**
 * session.js
 * Manages the complete lifecycle of a single SSH client session.
 * Each connection gets its own Session — fully isolated state,
 * its own input parser, its own animation timers, its own render loop.
 */

"use strict";

const { createInputParser } = require("./input");
const { renderFrame, enterAltScreen, exitAltScreen } = require("./renderer");
const screenRegistry = require("./screens/registry");

class Session {
  /**
   * @param {Stream} stream  - The SSH channel (read + write)
   * @param {number} cols    - Terminal width in columns
   * @param {number} rows    - Terminal height in rows
   */
  constructor(stream, cols, rows) {
    this.stream = stream;
    this.cols = cols;
    this.rows = rows;
    this.destroyed = false;

    // Current screen key and its mutable state object
    this.currentScreenKey = "menu";
    this.screenState = {};

    // Animation timer (only one active at a time per session)
    this._animTimer = null;

    // Enter the alternate screen buffer for a clean slate
    enterAltScreen(this.stream);

    // Set up input parser
    this.inputParser = createInputParser(this.stream);

    // Wire up key events → screen handler → re-render
    this._onKey = (event) => this._handleKey(event);
    this.inputParser.on("key", this._onKey);

    // Initialize the starting screen
    this._mountScreen("menu");
  }

  // ─── SCREEN NAVIGATION ──────────────────────────────────────────────────

  /**
   * Switch to a different screen. Unmounts the current one first.
   * @param {string} screenKey - Key in the screen registry
   */
  navigate(screenKey) {
    if (this.destroyed) return;
    this._unmountScreen();
    this._mountScreen(screenKey);
  }

  /**
   * Mount a screen: initialize its state, run its onMount if any, render it.
   */
  _mountScreen(screenKey) {
    const screenDef = screenRegistry[screenKey];
    if (!screenDef) {
      console.error(
        `[Session] Unknown screen: "${screenKey}". Falling back to menu.`,
      );
      screenKey = "menu";
    }

    this.currentScreenKey = screenKey;
    const def = screenRegistry[screenKey];

    // Initialize screen state
    this.screenState = def.initState ? def.initState(this) : {};

    // Run onMount hook if defined (e.g. to start animation timers)
    if (def.onMount) {
      def.onMount(this);
    }

    // Initial render
    this.render();
  }

  /**
   * Unmount current screen: stop timers, run onUnmount hook.
   */
  _unmountScreen() {
    // Stop any running animation timer
    this.stopAnimation();

    const def = screenRegistry[this.currentScreenKey];
    if (def && def.onUnmount) {
      def.onUnmount(this);
    }
  }

  // ─── INPUT HANDLING ─────────────────────────────────────────────────────

  _handleKey(event) {
    if (this.destroyed) return;

    const def = screenRegistry[this.currentScreenKey];
    if (!def || !def.handleInput) return;

    // Let the current screen handle the input
    // It returns true if it consumed the event
    def.handleInput(this, event);
  }

  // ─── RENDERING ──────────────────────────────────────────────────────────

  /**
   * Render the current screen to the stream.
   */
  render() {
    if (this.destroyed) return;

    const def = screenRegistry[this.currentScreenKey];
    if (!def || !def.render) return;

    try {
      const frame = def.render(this);
      renderFrame(this.stream, frame);
    } catch (err) {
      console.error(
        `[Session] Render error in "${this.currentScreenKey}":`,
        err.message,
      );
    }
  }

  // ─── ANIMATION HELPERS ──────────────────────────────────────────────────

  /**
   * Start a recurring animation loop. Only one can be active at a time.
   * @param {function} tickFn - Called every interval. Should update state + call render().
   * @param {number}   interval - Milliseconds between ticks (default 100 = 10fps)
   */
  startAnimation(tickFn, interval = 100) {
    this.stopAnimation(); // Safety: clear any existing timer
    this._animTimer = setInterval(() => {
      if (this.destroyed) {
        this.stopAnimation();
        return;
      }
      tickFn();
    }, interval);
  }

  /**
   * Stop the current animation loop.
   */
  stopAnimation() {
    if (this._animTimer) {
      clearInterval(this._animTimer);
      this._animTimer = null;
    }
  }

  // ─── RESIZE ─────────────────────────────────────────────────────────────

  /**
   * Called when the user resizes their terminal window.
   * Updates dimensions and re-renders.
   */
  resize(cols, rows) {
    if (this.destroyed) return;
    this.cols = cols;
    this.rows = rows;
    this.render();
  }

  // ─── CLEANUP ────────────────────────────────────────────────────────────

  /**
   * Fully destroy this session. Called when the SSH connection closes.
   */
  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;

    this.stopAnimation();
    this._unmountScreen();

    // Exit alternate screen so the user's terminal is restored
    try {
      exitAltScreen(this.stream);
    } catch (e) {
      // Stream might already be closed — that's fine
    }

    if (this.inputParser) {
      this.inputParser.destroy();
    }
  }
}

module.exports = { Session };
