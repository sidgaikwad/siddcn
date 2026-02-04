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
      <main className="min-h-screen flex items-center justify-center bg-terminal-bg text-terminal-red font-mono">
        <div className="border border-terminal-red p-8 text-center max-w-md">
          <h1 className="text-4xl mb-4">404 ERROR</h1>
          <p>CATEGORY_NOT_FOUND: {category}</p>
          <Link
            href="/components"
            className="mt-8 block hover:underline text-terminal-text"
          >
            [ Return to Root ]
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-terminal-bg px-4 py-12 sm:px-6 lg:px-8 font-mono">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb / CLI Path */}
        <nav className="mb-12 flex items-center gap-2 text-sm text-terminal-text/60 bg-terminal-text/5 p-3 rounded border border-terminal-text/10 w-fit">
          <span className="text-terminal-green">$</span>
          <Link
            href="/components"
            className="hover:text-terminal-cyan transition-colors"
          >
            ~/components
          </Link>
          <span className="text-terminal-text/30">/</span>
          <span className="text-terminal-cyan font-bold">{category}</span>
          <span className="animate-pulse inline-block w-2 h-4 bg-terminal-cyan/50 ml-1 align-middle"></span>
        </nav>

        {/* Category Header */}
        <div className="mb-16 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-terminal-cyan to-transparent opacity-50"></div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl text-terminal-cyan opacity-80">
              {data.icon}
            </span>
            <h1 className="text-5xl font-black text-terminal-text tracking-tight uppercase">
              {data.name}
            </h1>
          </div>
          <p className="text-xl text-terminal-text/70 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Variants Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {data.variants?.map((variant: any) => (
            <Link
              key={variant.id}
              href={`/components/${category}/${variant.id}`}
              className="group block rounded-none border border-terminal-cyan/30 bg-terminal-bg hover:bg-terminal-cyan/5 transition-all duration-300 overflow-hidden relative"
            >
              {/* Decorators */}
              <div className="absolute top-0 right-0 p-2 text-[10px] text-terminal-cyan/40 group-hover:text-terminal-cyan">
                ID: {variant.id.toUpperCase()}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-terminal-cyan group-hover:text-white transition-colors">
                    {variant.name}
                  </h3>
                </div>

                <p className="mb-6 text-sm text-terminal-text/70">
                  {variant.description}
                </p>

                {/* Mini Preview Window */}
                <div className="bg-black/40 border border-terminal-text/20 rounded mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-terminal-text/10 bg-terminal-text/5">
                    <div className="w-2 h-2 rounded-full bg-terminal-red/50"></div>
                    <div className="w-2 h-2 rounded-full bg-terminal-yellow/50"></div>
                    <div className="w-2 h-2 rounded-full bg-terminal-green/50"></div>
                    <span className="ml-2 text-[10px] text-terminal-text/40">
                      preview.tsx
                    </span>
                  </div>
                  <div className="p-6 flex items-center justify-center font-mono text-sm text-terminal-green min-h-[100px]">
                    <pre className="whitespace-pre">{variant.preview}</pre>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-terminal-cyan/60 font-bold group-hover:text-terminal-cyan">
                  <span>VIEW_DETAILS</span>
                  <span>--&gt;</span>
                </div>
              </div>

              {/* Animated Border Bottom */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-terminal-cyan transition-all duration-500 group-hover:w-full"></div>
            </Link>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-20 border-t border-dashed border-terminal-text/20 pt-8 flex justify-between items-center text-sm">
          <Link
            href="/components"
            className="text-terminal-text/60 hover:text-terminal-cyan font-mono"
          >
            &lt; cd ..
          </Link>
          <span className="text-terminal-text/30">END_OF_BUFFER</span>
        </div>
      </div>
    </main>
  );
}
