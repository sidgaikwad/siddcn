import Link from "next/link";

// Component data
const componentData: Record<
  string,
  {
    name: string;
    icon: string;
    description: string;
    variants: {
      id: string;
      name: string;
      description: string;
      preview: string;
    }[];
  }
> = {
  // --- NEW MISSING CATEGORIES ---
  spinners: {
    name: "Spinners",
    icon: "◐",
    description: "Loading indicators and activity animations",
    variants: [
      {
        id: "dots",
        name: "Dots Spinner",
        description: "Classic dots animation",
        preview: "Loading...",
      },
      {
        id: "line",
        name: "Line Spinner",
        description: "Rotating line character",
        preview: "/ - \\ |",
      },
      {
        id: "progress-bar",
        name: "Progress Bar",
        description: "Indeterminate sliding bar",
        preview: "[====    ]",
      },
      {
        id: "bouncing",
        name: "Bouncing Ball",
        description: "Bouncing character animation",
        preview: "(o)     ",
      },
      {
        id: "clock",
        name: "Clock Spinner",
        description: "Rotating clock hands",
        preview: "🕛 🕐 🕑",
      },
    ],
  },
  textinput: {
    name: "Text Input",
    icon: "﹥",
    description: "Input fields for capturing user text",
    variants: [
      {
        id: "basic",
        name: "Basic Input",
        description: "Simple text field",
        preview: "> Type here...",
      },
      {
        id: "password",
        name: "Password Input",
        description: "Masked input for secrets",
        preview: "Password: ****",
      },
      {
        id: "search",
        name: "Search Bar",
        description: "Input with search prefix",
        preview: "🔍 Search...",
      },
    ],
  },
  cards: {
    name: "Cards",
    icon: "□",
    description: "Container components for grouping content",
    variants: [
      {
        id: "simple",
        name: "Simple Card",
        description: "Basic bordered container",
        preview: "┌────────┐\n│ Content│\n└────────┘",
      },
      {
        id: "titled",
        name: "Titled Card",
        description: "Card with header title",
        preview: "┌─ Title ─┐\n│ Body    │\n└─────────┘",
      },
      {
        id: "alert",
        name: "Alert Card",
        description: "Card for important messages",
        preview: "(!) Alert \n Check logs",
      },
      {
        id: "stats",
        name: "Stats Card",
        description: "Display numerical data",
        preview: "CPU: 45%\n[||||  ]",
      },
      {
        id: "info",
        name: "Info Box",
        description: "Information display container",
        preview: "ℹ️ Info   \n Read-only",
      },
      {
        id: "error",
        name: "Error Box",
        description: "Error message container",
        preview: "❌ Error  \n Failed!",
      },
    ],
  },
  select: {
    name: "Select",
    icon: "▼",
    description: "Selection inputs and dropdowns",
    variants: [
      {
        id: "list",
        name: "List Select",
        description: "Vertical list selection",
        preview: "> Option A\n  Option B",
      },
      {
        id: "radio",
        name: "Radio Group",
        description: "Radio button selection",
        preview: "(*) Yes\n( ) No",
      },
      {
        id: "dropdown",
        name: "Dropdown",
        description: "Collapsible selection list",
        preview: "Select ▼",
      },
    ],
  },
  backgrounds: {
    name: "Backgrounds",
    icon: "░",
    description: "Full-screen animated backgrounds",
    variants: [
      {
        id: "matrix",
        name: "Matrix Rain",
        description: "Falling code characters",
        preview: "1 0 1 0\n0 1 1 0",
      },
      {
        id: "stars",
        name: "Starfield",
        description: "Moving star animation",
        preview: ".  * . \n * .  *",
      },
    ],
  },
  animatedtext: {
    name: "Animated Text",
    icon: "A",
    description: "Text effects and animations",
    variants: [
      {
        id: "typewriter",
        name: "Typewriter",
        description: "Typing effect character by character",
        preview: "Typing..._",
      },
      {
        id: "gradient",
        name: "Gradient Text",
        description: "RGB color cycle effect",
        preview: "RAINBOW",
      },
      {
        id: "glitch",
        name: "Glitch Text",
        description: "Random character corruption",
        preview: "Sys$#em",
      },
      {
        id: "pulse",
        name: "Pulse Text",
        description: "Opacity pulsing effect",
        preview: "Loading...",
      },
    ],
  },
  notifications: {
    name: "Notifications",
    icon: "!",
    description: "Toast messages and alerts",
    variants: [
      {
        id: "toast",
        name: "Toast",
        description: "Temporary popup message",
        preview: "[✔ Saved]",
      },
      {
        id: "banner",
        name: "Banner",
        description: "Full width alert bar",
        preview: "⚠ WARNING ⚠",
      },
      {
        id: "spinner-toast",
        name: "Loading Toast",
        description: "Toast with spinner",
        preview: "⟳ Working",
      },
      {
        id: "error-toast",
        name: "Error Toast",
        description: "Error notification",
        preview: "✖ Failed",
      },
    ],
  },
  dashboards: {
    name: "Dashboards",
    icon: "▦",
    description: "Complex layouts for system monitoring",
    variants: [
      {
        id: "server",
        name: "Server Monitor",
        description: "CPU/RAM resource layout",
        preview: "CPU [||] 20%\nRAM [||] 40%",
      },
      {
        id: "network",
        name: "Network Stats",
        description: "Upload/Download speed layout",
        preview: "▲ 1.2 MB/s\n▼ 4.5 MB/s",
      },
      {
        id: "process",
        name: "Process List",
        description: "Table of active processes",
        preview: "PID  NAME\n123  node",
      },
      {
        id: "docker",
        name: "Docker Containers",
        description: "Container status grid",
        preview: "ID   STATUS\na1b  Up 2h",
      },
      {
        id: "logs",
        name: "Log Viewer",
        description: "Scrolling log output",
        preview: "[INFO] Start\n[WARN] Slow",
      },
      {
        id: "minimal",
        name: "Minimal Dash",
        description: "Clean simple metrics",
        preview: "OK | 20ms",
      },
    ],
  },
  // --- EXISTING CATEGORIES ---
  buttons: {
    name: "Buttons",
    icon: "O",
    description: "Interactive button components with various styles",
    variants: [
      {
        id: "simple",
        name: "Simple Button",
        description: "A basic button component",
        preview: "[ Button ]",
      },
      {
        id: "primary",
        name: "Primary Button",
        description: "A styled primary action button",
        preview: "[ Primary ]",
      },
      {
        id: "danger",
        name: "Danger Button",
        description: "A button for destructive actions",
        preview: "[ Delete ]",
      },
    ],
  },
  progress: {
    name: "Progress Bars",
    icon: "|",
    description: "Progress indicators and loading states",
    variants: [
      {
        id: "linear",
        name: "Linear Progress",
        description: "A horizontal progress bar",
        preview: "[========  ] 75%",
      },
      {
        id: "circular",
        name: "Circular Progress",
        description: "A circular/spinner progress indicator",
        preview: "( 60% )",
      },
      {
        id: "step",
        name: "Step Progress",
        description: "Multi-step progress indicator",
        preview: "[1] -> [2] -> [ ]",
      },
    ],
  },
  badges: {
    name: "Badges",
    icon: "*",
    description: "Status indicators and labels",
    variants: [
      {
        id: "status",
        name: "Status Badge",
        description: "Display status with color coding",
        preview: "< Active >",
      },
      {
        id: "count",
        name: "Count Badge",
        description: "Display numerical count",
        preview: "( 42 )",
      },
      {
        id: "dot",
        name: "Dot Badge",
        description: "Simple dot indicator",
        preview: "* Online",
      },
    ],
  },
  charts: {
    name: "Charts",
    icon: "^",
    description: "Data visualization components",
    variants: [
      {
        id: "bar",
        name: "Bar Chart",
        description: "Display data as vertical bars",
        preview: "| | |  |",
      },
      {
        id: "line",
        name: "Line Chart",
        description: "Display data as a line graph",
        preview: "_/\\_/",
      },
    ],
  },
  trees: {
    name: "Trees",
    icon: "+",
    description: "Hierarchical data structures",
    variants: [
      {
        id: "file",
        name: "File Tree",
        description: "File system hierarchy with vim navigation",
        preview: "+- src/\n   +- index.ts",
      },
      {
        id: "data",
        name: "Data Tree",
        description: "Hierarchical data with expandable nodes",
        preview: "+- Root\n   +- Child",
      },
    ],
  },
  tabs: {
    name: "Tabs",
    icon: "=",
    description: "Tabbed navigation with multiple styles",
    variants: [
      {
        id: "modern",
        name: "Modern Tabs",
        description: "Clean modern tab interface",
        preview: "[ Tab 1 ] Tab 2  Tab 3",
      },
      {
        id: "rounded",
        name: "Rounded Tabs",
        description: "Tabs with rounded borders",
        preview: "( Tab 1 ) Tab 2",
      },
      {
        id: "pills",
        name: "Pill Tabs",
        description: "Pill-shaped tab buttons",
        preview: "[Tab 1] [Tab 2]",
      },
    ],
  },
  table: {
    name: "Table",
    icon: "#",
    description: "Scrollable data grid",
    variants: [
      {
        id: "default",
        name: "Data Table",
        description: "Scrollable table with row selection",
        preview: "| Name  | Status |",
      },
    ],
  },
  multiselect: {
    name: "Multi-Select",
    icon: "x",
    description: "Multiple item selection with limits",
    variants: [
      {
        id: "default",
        name: "Multi-Select List",
        description: "Select multiple items with optional limits",
        preview: "[x] React\n[ ] Vue",
      },
    ],
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = componentData[category];

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-red-400 font-mono">
        <div className="border border-red-400 p-8 text-center max-w-md">
          <h1 className="text-4xl mb-4">404 ERROR</h1>
          <p>CATEGORY_NOT_FOUND: {category}</p>
          <Link
            href="/components"
            className="mt-8 block hover:underline text-neutral-300"
          >
            [ Return to Root ]
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-12 sm:px-6 lg:px-8 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb / CLI Path */}
        <nav className="mb-12 flex items-center gap-2 text-sm text-neutral-300/60 bg-neutral-300/5 p-3 rounded border border-neutral-500/10 w-fit">
          <span className="text-green-400">$</span>
          <Link
            href="/components"
            className="hover:text-cyan-400 transition-colors"
          >
            ~/components
          </Link>
          <span className="text-neutral-300/30">/</span>
          <span className="text-cyan-400 font-bold">{category}</span>
          <span className="animate-pulse inline-block w-2 h-4 bg-cyan-400/50 ml-1 align-middle"></span>
        </nav>

        {/* Category Header */}
        <div className="mb-16 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-transparent opacity-50"></div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl text-cyan-400 opacity-80">
              {data.icon}
            </span>
            <h1 className="text-5xl font-black text-neutral-300 tracking-tight uppercase">
              {data.name}
            </h1>
          </div>
          <p className="text-xl text-neutral-300/70 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Variants Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {data.variants?.map((variant: any) => (
            <Link
              key={variant.id}
              href={`/components/${category}/${variant.id}`}
              className="group block rounded-none border border-cyan-400/30 bg-black hover:bg-cyan-400/5 transition-all duration-300 overflow-hidden relative"
            >
              {/* Decorators */}
              <div className="absolute top-0 right-0 p-2 text-[10px] text-cyan-400/40 group-hover:text-cyan-400">
                ID: {variant.id.toUpperCase()}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-white transition-colors">
                    {variant.name}
                  </h3>
                </div>

                <p className="mb-6 text-sm text-neutral-300/70">
                  {variant.description}
                </p>

                {/* Mini Preview Window */}
                <div className="bg-black/40 border border-neutral-500/20 rounded mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-500/10 bg-neutral-300/5">
                    <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                    <div className="w-2 h-2 rounded-full bg-terminal-yellow/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                    <span className="ml-2 text-[10px] text-neutral-300/40">
                      preview.tsx
                    </span>
                  </div>
                  <div className="p-6 flex items-center justify-center font-mono text-sm text-green-400 min-h-[100px]">
                    <pre className="whitespace-pre">{variant.preview}</pre>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-cyan-400/60 font-bold group-hover:text-cyan-400">
                  <span>VIEW_DETAILS</span>
                  <span>--&gt;</span>
                </div>
              </div>

              {/* Animated Border Bottom */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>
            </Link>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 border-t border-dashed border-neutral-500/20 pt-8 flex justify-between items-center text-sm">
          <Link
            href="/components"
            className="text-neutral-300/60 hover:text-cyan-400 font-mono"
          >
            &lt; cd ..
          </Link>
          <span className="text-neutral-300/30">END_OF_BUFFER</span>
        </div>
      </div>
    </main>
  );
}
