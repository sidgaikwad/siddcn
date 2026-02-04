import Link from "next/link";

// Inline the data to ensure we have it for the new UI
const components = [
  {
    id: "spinners",
    name: "Spinners",
    icon: "◐",
    description: "Loading animations",
    count: 5,
  },
  {
    id: "textinput",
    name: "Text Input",
    icon: "﹥",
    description: "Input fields & forms",
    count: 3,
  },
  {
    id: "cards",
    name: "Cards",
    icon: "□",
    description: "Container components",
    count: 6,
  },
  {
    id: "select",
    name: "Select",
    icon: "▼",
    description: "Selection inputs",
    count: 3,
  },
  {
    id: "backgrounds",
    name: "Backgrounds",
    icon: "░",
    description: "Animated effects",
    count: 2,
  },
  {
    id: "animatedtext",
    name: "Animated Text",
    icon: "A",
    description: "Text animations",
    count: 4,
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: "!",
    description: "Toasts & alerts",
    count: 4,
  },
  {
    id: "dashboards",
    name: "Dashboards",
    icon: "▦",
    description: "System monitors",
    count: 6,
  },
  {
    id: "buttons",
    name: "Buttons",
    icon: "○",
    description: "Interactive button components",
    count: 6,
  },
  {
    id: "progress",
    name: "Progress Bars",
    icon: "║",
    description: "Progress indicators",
    count: 3,
  },
  {
    id: "badges",
    name: "Badges",
    icon: "*",
    description: "Status indicators",
    count: 3,
  },
  {
    id: "charts",
    name: "Charts",
    icon: "📈",
    description: "Data visualization",
    count: 2,
  },
  {
    id: "trees",
    name: "Trees",
    icon: "⑂",
    description: "Hierarchical data",
    count: 2,
  },
  {
    id: "tabs",
    name: "Tabs",
    icon: "═",
    description: "Tabbed navigation",
    count: 3,
  },
  {
    id: "table",
    name: "Table",
    icon: "田",
    description: "Scrollable data grid",
    count: 1,
  },
  {
    id: "multiselect",
    name: "Multi-Select",
    icon: "☑",
    description: "Multiple item selection",
    count: 1,
  },
];

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-terminal-bg selection:bg-terminal-cyan selection:text-terminal-bg relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none" />
      <div
        className="absolute inset-0 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 opacity-20 pointer-events-none border-terminal-cyan/5"
        style={{
          backgroundImage:
            "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* System Header */}
        <div className="mb-16 border-b border-terminal-cyan/30 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="animate-pulse h-2 w-2 rounded-full bg-terminal-cyan shadow-[0_0_10px_rgba(0,255,255,0.8)]"></span>
                <span className="text-xs font-mono text-terminal-cyan/70 tracking-widest">
                  SYSTEM_ONLINE
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-terminal-cyan to-terminal-green tracking-tight font-mono">
                COMPONENT_LIB
              </h1>
              <p className="mt-4 max-w-xl text-lg text-terminal-text/70 font-mono border-l-2 border-terminal-cyan/20 pl-4">
                Accessing TUI modules...
                <br />
                {components.length} components loaded ready for deployment.
              </p>
            </div>

            {/* Stats Box */}
            <div className="border border-terminal-cyan/20 bg-terminal-bg/50 p-4 min-w-[200px] backdrop-blur-sm">
              <div className="flex justify-between text-xs text-terminal-text/50 font-mono mb-2">
                <span>MEMORY</span>
                <span>64K</span>
              </div>
              <div className="w-full bg-terminal-text/10 h-1 mb-4">
                <div className="bg-terminal-cyan h-full w-[45%]"></div>
              </div>
              <div className="text-right font-mono text-sm text-terminal-cyan">
                v2.0.4-stable
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {components.map((component) => (
            <Link
              key={component.id}
              href={`/components/${component.id}`}
              className="group relative overflow-hidden border border-terminal-cyan/20 bg-terminal-bg/40 p-6 transition-all duration-300 hover:border-terminal-cyan hover:bg-terminal-bg/80 hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.15)]"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono text-terminal-cyan">
                  [↗]
                </span>
              </div>

              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded border border-terminal-cyan/10 bg-terminal-cyan/5 text-2xl text-terminal-cyan group-hover:scale-110 transition-transform duration-300">
                  {component.icon}
                </div>
                <span className="font-mono text-xs text-terminal-text/40 border border-terminal-text/10 px-2 py-1 rounded">
                  {component.count} VAR
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-terminal-text group-hover:text-terminal-cyan transition-colors font-mono">
                {component.name}
              </h3>

              <p className="text-sm text-terminal-text/60 font-mono line-clamp-2">
                {component.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-terminal-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
