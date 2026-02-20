import Link from "next/link";

// Component data - Completely uncut and intact
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
  spinners: {
    name: "Spinners",
    icon: "◐",
    description: "Loading indicators and activity animations",
    variants: [
      { id: "dots", name: "Dots Spinner", description: "Classic dots animation", preview: "Loading..." },
      { id: "line", name: "Line Spinner", description: "Rotating line character", preview: "/ - \\ |" },
      { id: "progress-bar", name: "Progress Bar", description: "Indeterminate sliding bar", preview: "[====    ]" },
      { id: "bouncing", name: "Bouncing Ball", description: "Bouncing character animation", preview: "(o)     " },
      { id: "clock", name: "Clock Spinner", description: "Rotating clock hands", preview: "🕛 🕐 🕑" },
    ],
  },
  textinput: {
    name: "Text Input",
    icon: "﹥",
    description: "Input fields for capturing user text",
    variants: [
      { id: "basic", name: "Basic Input", description: "Simple text field", preview: "> Type here..." },
      { id: "password", name: "Password Input", description: "Masked input for secrets", preview: "Password: ****" },
      { id: "search", name: "Search Bar", description: "Input with search prefix", preview: "🔍 Search..." },
    ],
  },
  cards: {
    name: "Cards",
    icon: "□",
    description: "Container components for grouping content",
    variants: [
      { id: "simple", name: "Simple Card", description: "Basic bordered container", preview: "┌────────┐\n│ Content│\n└────────┘" },
      { id: "titled", name: "Titled Card", description: "Card with header title", preview: "┌─ Title ─┐\n│ Body    │\n└─────────┘" },
      { id: "alert", name: "Alert Card", description: "Card for important messages", preview: "(!) Alert \n Check logs" },
      { id: "stats", name: "Stats Card", description: "Display numerical data", preview: "CPU: 45%\n[||||  ]" },
      { id: "info", name: "Info Box", description: "Information display container", preview: "ℹ️ Info   \n Read-only" },
      { id: "error", name: "Error Box", description: "Error message container", preview: "❌ Error  \n Failed!" },
    ],
  },
  select: {
    name: "Select",
    icon: "▼",
    description: "Selection inputs and dropdowns",
    variants: [
      { id: "list", name: "List Select", description: "Vertical list selection", preview: "> Option A\n  Option B" },
      { id: "radio", name: "Radio Group", description: "Radio button selection", preview: "(*) Yes\n( ) No" },
      { id: "dropdown", name: "Dropdown", description: "Collapsible selection list", preview: "Select ▼" },
    ],
  },
  backgrounds: {
    name: "Backgrounds",
    icon: "░",
    description: "Full-screen animated backgrounds",
    variants: [
      { id: "matrix", name: "Matrix Rain", description: "Falling code characters", preview: "1 0 1 0\n0 1 1 0" },
      { id: "stars", name: "Starfield", description: "Moving star animation", preview: ".  * . \n * .  *" },
    ],
  },
  animatedtext: {
    name: "Animated Text",
    icon: "A",
    description: "Text effects and animations",
    variants: [
      { id: "typewriter", name: "Typewriter", description: "Typing effect character by character", preview: "Typing..._" },
      { id: "gradient", name: "Gradient Text", description: "RGB color cycle effect", preview: "RAINBOW" },
      { id: "glitch", name: "Glitch Text", description: "Random character corruption", preview: "Sys$#em" },
      { id: "pulse", name: "Pulse Text", description: "Opacity pulsing effect", preview: "Loading..." },
    ],
  },
  notifications: {
    name: "Notifications",
    icon: "!",
    description: "Toast messages and alerts",
    variants: [
      { id: "toast", name: "Toast", description: "Temporary popup message", preview: "[✔ Saved]" },
      { id: "banner", name: "Banner", description: "Full width alert bar", preview: "⚠ WARNING ⚠" },
      { id: "spinner-toast", name: "Loading Toast", description: "Toast with spinner", preview: "⟳ Working" },
      { id: "error-toast", name: "Error Toast", description: "Error notification", preview: "✖ Failed" },
    ],
  },
  dashboards: {
    name: "Dashboards",
    icon: "▦",
    description: "Complex layouts for system monitoring",
    variants: [
      { id: "server", name: "Server Monitor", description: "CPU/RAM resource layout", preview: "CPU [||] 20%\nRAM [||] 40%" },
      { id: "network", name: "Network Stats", description: "Upload/Download speed layout", preview: "▲ 1.2 MB/s\n▼ 4.5 MB/s" },
      { id: "process", name: "Process List", description: "Table of active processes", preview: "PID  NAME\n123  node" },
      { id: "docker", name: "Docker Containers", description: "Container status grid", preview: "ID   STATUS\na1b  Up 2h" },
      { id: "logs", name: "Log Viewer", description: "Scrolling log output", preview: "[INFO] Start\n[WARN] Slow" },
      { id: "minimal", name: "Minimal Dash", description: "Clean simple metrics", preview: "OK | 20ms" },
    ],
  },
  buttons: {
    name: "Buttons",
    icon: "O",
    description: "Interactive button components with various styles",
    variants: [
      { id: "simple", name: "Simple Button", description: "A basic button component", preview: "[ Button ]" },
      { id: "primary", name: "Primary Button", description: "A styled primary action button", preview: "[ Primary ]" },
      { id: "danger", name: "Danger Button", description: "A button for destructive actions", preview: "[ Delete ]" },
    ],
  },
  progress: {
    name: "Progress Bars",
    icon: "|",
    description: "Progress indicators and loading states",
    variants: [
      { id: "linear", name: "Linear Progress", description: "A horizontal progress bar", preview: "[========  ] 75%" },
      { id: "circular", name: "Circular Progress", description: "A circular/spinner progress indicator", preview: "( 60% )" },
      { id: "step", name: "Step Progress", description: "Multi-step progress indicator", preview: "[1] -> [2] -> [ ]" },
    ],
  },
  badges: {
    name: "Badges",
    icon: "*",
    description: "Status indicators and labels",
    variants: [
      { id: "status", name: "Status Badge", description: "Display status with color coding", preview: "< Active >" },
      { id: "count", name: "Count Badge", description: "Display numerical count", preview: "( 42 )" },
      { id: "dot", name: "Dot Badge", description: "Simple dot indicator", preview: "* Online" },
    ],
  },
  charts: {
    name: "Charts",
    icon: "^",
    description: "Data visualization components",
    variants: [
      { id: "bar", name: "Bar Chart", description: "Display data as vertical bars", preview: "| | |  |" },
      { id: "line", name: "Line Chart", description: "Display data as a line graph", preview: "_/\\_/" },
    ],
  },
  trees: {
    name: "Trees",
    icon: "+",
    description: "Hierarchical data structures",
    variants: [
      { id: "file", name: "File Tree", description: "File system hierarchy with vim navigation", preview: "+- src/\n   +- index.ts" },
      { id: "data", name: "Data Tree", description: "Hierarchical data with expandable nodes", preview: "+- Root\n   +- Child" },
    ],
  },
  tabs: {
    name: "Tabs",
    icon: "=",
    description: "Tabbed navigation with multiple styles",
    variants: [
      { id: "modern", name: "Modern Tabs", description: "Clean modern tab interface", preview: "[ Tab 1 ] Tab 2  Tab 3" },
      { id: "rounded", name: "Rounded Tabs", description: "Tabs with rounded borders", preview: "( Tab 1 ) Tab 2" },
      { id: "pills", name: "Pill Tabs", description: "Pill-shaped tab buttons", preview: "[Tab 1] [Tab 2]" },
    ],
  },
  table: {
    name: "Table",
    icon: "#",
    description: "Scrollable data grid",
    variants: [
      { id: "default", name: "Data Table", description: "Scrollable table with row selection", preview: "| Name  | Status |" },
    ],
  },
  multiselect: {
    name: "Multi-Select",
    icon: "x",
    description: "Multiple item selection with limits",
    variants: [
      { id: "default", name: "Multi-Select List", description: "Select multiple items with optional limits", preview: "[x] React\n[ ] Vue" },
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
      <main className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 font-mono dark:bg-[#09090b] dark:text-slate-50">
        <div className="border-2 border-red-500 rounded-2xl p-10 text-center max-w-md bg-white shadow-xl dark:bg-black/50 dark:border-red-400">
          <h1 className="text-4xl font-black mb-4 flex items-center justify-center gap-3">
            <span className="text-red-500">⚠</span> 404 ERROR
          </h1>
          <p className="text-slate-500 font-bold dark:text-slate-400">CATEGORY_NOT_FOUND: {category}</p>
          <Link
            href="/components"
            className="mt-8 block font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 py-3 rounded-lg transition-colors dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
          >
            [ Return to Root ]
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="font-mono min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 px-4 py-12 sm:px-6 lg:px-8 dark:bg-[#09090b] dark:text-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb / CLI Path */}
        <nav className="mb-12 flex items-center gap-2 text-sm font-bold text-slate-500 bg-white shadow-sm px-4 py-3 rounded-xl border border-slate-200 w-fit dark:bg-black/40 dark:border-white/10 dark:text-slate-400 backdrop-blur-md">
          <span className="text-emerald-500 dark:text-emerald-400">~/</span>
          <Link href="/components" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
            components
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 px-2 py-0.5 rounded-md dark:bg-emerald-400/10">
            {category}
          </span>
          <span className="animate-pulse inline-block w-2 h-4 bg-emerald-500/50 ml-1 align-middle rounded-sm"></span>
        </nav>

        {/* Category Header */}
        <div className="mb-16 relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1.5 rounded-full bg-gradient-to-b from-emerald-500 to-transparent opacity-80 dark:from-emerald-400"></div>
          <div className="flex items-center gap-5 mb-4">
            <span className="text-5xl text-emerald-500 bg-emerald-50 rounded-xl p-3 border border-emerald-100 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/20 shadow-sm">
              {data.icon}
            </span>
            <h1 className="text-5xl font-black tracking-tight uppercase text-slate-900 dark:text-white">
              {data.name}
            </h1>
          </div>
          <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed ml-[5.5rem] dark:text-slate-400">
            {data.description}
          </p>
        </div>

        {/* Variants Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {data.variants?.map((variant: any) => (
            <Link
              key={variant.id}
              href={`/components/${category}/${variant.id}`}
              className="group block rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300 overflow-hidden relative dark:border-white/10 dark:bg-black/40 dark:hover:border-emerald-400 dark:hover:bg-black/80 backdrop-blur-sm"
            >
              {/* Decorators */}
              <div className="absolute top-0 right-0 p-3 text-[10px] font-bold text-slate-400 group-hover:text-emerald-500 transition-colors dark:text-slate-500 dark:group-hover:text-emerald-400 z-10">
                ID: {variant.id.toUpperCase()}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                    {variant.name}
                  </h3>
                </div>

                <p className="mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {variant.description}
                </p>

                {/* Mini Preview Window */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl mb-4 overflow-hidden shadow-inner dark:bg-black/60 dark:border-white/10 relative group-hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-200 bg-white dark:bg-white/5 dark:border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm"></div>
                    <span className="ml-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                      preview.tsx
                    </span>
                  </div>
                  <div className="p-6 flex items-center justify-center text-sm font-bold text-emerald-600 min-h-[120px] dark:text-emerald-400">
                    <pre className="whitespace-pre">{variant.preview}</pre>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-black text-slate-400 group-hover:text-emerald-600 transition-colors dark:text-slate-500 dark:group-hover:text-emerald-400 pt-2">
                  <span>VIEW_DETAILS</span>
                  <span className="group-hover:translate-x-1 transition-transform">--&gt;</span>
                </div>
              </div>

              {/* Animated Border Bottom */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full dark:bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            </Link>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 border-t-2 border-dashed border-slate-200 pt-8 flex justify-between items-center text-sm font-bold dark:border-white/10">
          <Link
            href="/components"
            className="text-slate-500 hover:text-emerald-600 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm transition-all dark:text-slate-400 dark:bg-black/40 dark:border-white/10 dark:hover:text-emerald-400"
          >
            &lt; cd ..
          </Link>
          <span className="text-slate-300 dark:text-slate-600">END_OF_BUFFER</span>
        </div>
      </div>
    </main>
  );
}