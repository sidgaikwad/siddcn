import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";

// Component data
const componentData: Record<
  string,
  {
    name: string;
    icon: string;
    variants: Record<
      string,
      {
        name: string;
        description: string;
        installCommand: string;
        usage: string;
        props?: {
          name: string;
          type: string;
          required: boolean;
          description: string;
        }[];
        preview: string;
      }
    >;
  }
> = {
  buttons: {
    name: "Buttons",
    icon: "O",
    variants: {
      simple: {
        name: "Simple Button",
        description: "A basic button component for terminal interfaces",
        installCommand: "npx siddcn add button-simple",
        usage: `import { SimpleButton } from 'siddcn';

export default function App() {
  return <SimpleButton label="Click me" />;
}`,
        props: [
          {
            name: "label",
            type: "string",
            required: true,
            description: "The text displayed on the button",
          },
        ],
        preview: "[ Click me ]",
      },
      primary: {
        name: "Primary Button",
        description: "A styled primary action button with emphasis",
        installCommand: "npx siddcn add button-primary",
        usage: `import { PrimaryButton } from 'siddcn';

export default function App() {
  return <PrimaryButton label="Submit" />;
}`,
        preview: "[ Submit ]",
      },
      danger: {
        name: "Danger Button",
        description: "A button for destructive actions with warning styling",
        installCommand: "npx siddcn add button-danger",
        usage: `import { DangerButton } from 'siddcn';

export default function App() {
  return <DangerButton label="Delete" />;
}`,
        preview: "[ Delete ]",
      },
    },
  },
  progress: {
    name: "Progress Bars",
    icon: "|",
    variants: {
      linear: {
        name: "Linear Progress",
        description: "A horizontal progress bar with percentage display",
        installCommand: "npx siddcn add progress-linear",
        usage: `import { LinearProgress } from 'siddcn';

export default function App() {
  return <LinearProgress value={75} max={100} />;
}`,
        props: [
          {
            name: "value",
            type: "number",
            required: true,
            description: "Current progress value",
          },
          {
            name: "max",
            type: "number",
            required: false,
            description: "Maximum value (default: 100)",
          },
          {
            name: "animated",
            type: "boolean",
            required: false,
            description: "Enable animation",
          },
        ],
        preview: "[========  ] 75%",
      },
      circular: {
        name: "Circular Progress",
        description: "A circular spinner-style progress indicator",
        installCommand: "npx siddcn add progress-circular",
        usage: `import { CircularProgress } from 'siddcn';

export default function App() {
  return <CircularProgress percentage={60} />;
}`,
        preview: "( 60% )",
      },
      step: {
        name: "Step Progress",
        description: "Multi-step progress indicator for wizards and flows",
        installCommand: "npx siddcn add progress-step",
        usage: `import { StepProgress } from 'siddcn';

export default function App() {
  return <StepProgress currentStep={2} totalSteps={4} />;
}`,
        preview: "[1] -> [2] -> [ ] -> [ ]",
      },
    },
  },
  badges: {
    name: "Badges",
    icon: "*",
    variants: {
      status: {
        name: "Status Badge",
        description: "Display status with color coding",
        installCommand: "npx siddcn add badge-status",
        usage: `import { StatusBadge } from 'siddcn';

export default function App() {
  return <StatusBadge status="success" />;
}`,
        props: [
          {
            name: "status",
            type: '"success" | "warning" | "error" | "info"',
            required: true,
            description: "The status type to display",
          },
        ],
        preview: "< Active >",
      },
      count: {
        name: "Count Badge",
        description: "Display numerical count values",
        installCommand: "npx siddcn add badge-count",
        usage: `import { CountBadge } from 'siddcn';

export default function App() {
  return <CountBadge count={42} />;
}`,
        preview: "( 42 )",
      },
      dot: {
        name: "Dot Badge",
        description: "Simple dot indicator for status",
        installCommand: "npx siddcn add badge-dot",
        usage: `import { DotBadge } from 'siddcn';

export default function App() {
  return <DotBadge color="green" />;
}`,
        preview: "* Online",
      },
    },
  },
  charts: {
    name: "Charts",
    icon: "^",
    variants: {
      bar: {
        name: "Bar Chart",
        description: "Display data as vertical bars in the terminal",
        installCommand: "npx siddcn add chart-bar",
        usage: `import { BarChart } from 'siddcn';

const data = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 60 },
];

export default function App() {
  return <BarChart data={data} />;
}`,
        preview: "| | |  |",
      },
      line: {
        name: "Line Chart",
        description: "Display data as a line graph",
        installCommand: "npx siddcn add chart-line",
        usage: `import { LineChart } from 'siddcn';

export default function App() {
  return <LineChart />;
}`,
        preview: "_/\\_/",
      },
    },
  },
  trees: {
    name: "Trees",
    icon: "+",
    variants: {
      file: {
        name: "File Tree",
        description:
          "File system hierarchy display with vim-style navigation (j/k)",
        installCommand: "npx siddcn add tree-file",
        usage: `import { FileTree } from 'siddcn';

const tree = {
  name: 'project',
  type: 'dir',
  children: [
    { name: 'src', type: 'dir', children: [
      { name: 'index.tsx', type: 'file' }
    ]},
    { name: 'package.json', type: 'file' }
  ]
};

export default function App() {
  return <FileTree data={tree} />;
}`,
        preview:
          "+- project/\n   +- src/\n   |  +- index.tsx\n   +- package.json",
      },
      data: {
        name: "Data Tree",
        description: "Hierarchical data with expandable/collapsible nodes",
        installCommand: "npx siddcn add tree-data",
        usage: `import { DataTree } from 'siddcn';

export default function App() {
  return <DataTree data={treeData} />;
}`,
        preview: "+- Root\n   +- Branch\n      +- Leaf",
      },
    },
  },
  tabs: {
    name: "Tabs",
    icon: "=",
    variants: {
      modern: {
        name: "Modern Tabs",
        description: "Clean modern tab interface",
        installCommand: "npx siddcn add tabs-modern",
        usage: `import { Tabs } from 'siddcn';

const tabs = [
  { id: 'tab1', label: 'Dashboard', content: <Dashboard /> },
  { id: 'tab2', label: 'Settings', content: <Settings /> }
];

export default function App() {
  return <Tabs tabs={tabs} style="modern" />;
}`,
        preview: "[ Dashboard ]  Settings  Analytics",
      },
      rounded: {
        name: "Rounded Tabs",
        description: "Tabs with rounded borders",
        installCommand: "npx siddcn add tabs-rounded",
        usage: `import { Tabs } from 'siddcn';

export default function App() {
  return <Tabs tabs={tabs} style="rounded" />;
}`,
        preview: "( Tab 1 )  Tab 2  Tab 3",
      },
      pills: {
        name: "Pill Tabs",
        description: "Pill-shaped tab buttons",
        installCommand: "npx siddcn add tabs-pills",
        usage: `import { Tabs } from 'siddcn';

export default function App() {
  return <Tabs tabs={tabs} style="pills" />;
}`,
        preview: "[Tab 1] [Tab 2] [Tab 3]",
      },
    },
  },
  table: {
    name: "Table",
    icon: "#",
    variants: {
      default: {
        name: "Data Table",
        description:
          "Scrollable table with row selection and vim-style navigation",
        installCommand: "npx siddcn add table",
        usage: `import { Table } from 'siddcn';

const columns = [
  { key: 'name', header: 'Name', width: 20 },
  { key: 'status', header: 'Status', width: 10 }
];

const data = [
  { name: 'John Doe', status: 'Active' },
  { name: 'Jane Smith', status: 'Pending' }
];

export default function App() {
  return <Table columns={columns} data={data} maxVisibleRows={10} />;
}`,
        props: [
          {
            name: "columns",
            type: "TableColumn[]",
            required: true,
            description: "Column definitions",
          },
          {
            name: "data",
            type: "TableRow[]",
            required: true,
            description: "Data rows",
          },
          {
            name: "maxVisibleRows",
            type: "number",
            required: false,
            description: "Maximum visible rows (default: 10)",
          },
          {
            name: "onSelect",
            type: "(row, index) => void",
            required: false,
            description: "Row selection callback",
          },
        ],
        preview:
          "| Name       | Status  |\n|------------|--------|\n| John Doe   | Active |",
      },
    },
  },
  multiselect: {
    name: "Multi-Select",
    icon: "x",
    variants: {
      default: {
        name: "Multi-Select List",
        description: "Select multiple items with optional limits",
        installCommand: "npx siddcn add multiselect",
        usage: `import { MultiSelect } from 'siddcn';

const items = [
  { value: 'react', label: 'React', desc: 'UI Library' },
  { value: 'vue', label: 'Vue', desc: 'Framework' },
  { value: 'svelte', label: 'Svelte', desc: 'Compiler' }
];

export default function App() {
  return <MultiSelect items={items} maxSelect={2} />;
}`,
        props: [
          {
            name: "items",
            type: "SelectItem[]",
            required: true,
            description: "Available items",
          },
          {
            name: "maxSelect",
            type: "number",
            required: false,
            description: "Maximum selections allowed",
          },
          {
            name: "showProgress",
            type: "boolean",
            required: false,
            description: "Show selection progress",
          },
        ],
        preview:
          "[x] React - UI Library\n[ ] Vue - Framework\n[x] Svelte - Compiler",
      },
    },
  },
};

export default async function ComponentVariantPage({
  params,
}: {
  params: Promise<{ category: string; variant: string }>;
}) {
  const { category, variant } = await params;

  const categoryData = componentData[category];
  if (!categoryData) return <NotFound />; // Use a helper or inline nicely

  const variantData = categoryData.variants[variant];
  if (!variantData) return <NotFound />;

  return (
    <main className="min-h-screen bg-terminal-bg px-4 py-12 sm:px-6 lg:px-8 font-mono text-terminal-text selection:bg-terminal-cyan/30">
      <div className="mx-auto max-w-7xl">
        {/* Top Navigation Bar */}
        <nav className="mb-8 flex items-center justify-between border-b border-terminal-cyan/20 pb-4">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/components"
              className="text-terminal-text/50 hover:text-terminal-cyan"
            >
              components
            </Link>
            <span className="text-terminal-text/30">/</span>
            <Link
              href={`/components/${category}`}
              className="text-terminal-text/50 hover:text-terminal-cyan"
            >
              {categoryData.name}
            </Link>
            <span className="text-terminal-text/30">/</span>
            <span className="text-terminal-cyan font-bold bg-terminal-cyan/10 px-2 py-0.5 rounded">
              {variantData.name}
            </span>
          </div>
          <div className="text-xs text-terminal-text/40 hidden sm:block">
            STATUS: READ_ONLY
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Header & Preview */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded border border-terminal-cyan/30 bg-terminal-cyan/5 flex items-center justify-center text-3xl text-terminal-cyan shadow-[0_0_15px_-3px_rgba(0,255,255,0.2)]">
                  {categoryData.icon}
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-terminal-text mb-1">
                    {variantData.name}
                  </h1>
                  <p className="text-lg text-terminal-text/60">
                    {variantData.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Preview Window */}
            <section className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-terminal-cyan to-terminal-green opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
              <div className="relative rounded-lg border border-terminal-cyan/30 bg-black overflow-hidden">
                {/* Fake Window Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-terminal-text/10 border-b border-terminal-text/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-xs text-terminal-text/40 tracking-widest">
                    LOCALHOST:3000
                  </div>
                </div>

                {/* Preview Content */}
                <div className="p-12 min-h-[300px] flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-20">
                  <div className="scale-125 transform">
                    {/* Assuming the preview string is text, we render it. 
                                    If you had real components, you'd map them here. 
                                    For now, we style the text preview nicely. */}
                    <pre className="font-mono text-terminal-cyan drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] bg-black/50 p-6 border border-terminal-cyan/20 rounded">
                      {variantData.preview}
                    </pre>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="bg-terminal-cyan text-black px-4 py-1 text-xs font-bold flex justify-between">
                  <span>NORMAL</span>
                  <span>100%</span>
                </div>
              </div>
            </section>

            {/* Props Table */}
            {variantData.props && variantData.props.length > 0 && (
              <section>
                <h2 className="mb-6 text-xl font-bold text-terminal-text flex items-center gap-2">
                  <span className="text-terminal-cyan">#</span> API Reference
                </h2>
                <div className="rounded border border-terminal-text/20 overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-terminal-text/5 text-terminal-text/60 uppercase text-xs tracking-wider">
                      <tr>
                        <th className="px-6 py-4 font-medium">Prop</th>
                        <th className="px-6 py-4 font-medium">Type</th>
                        <th className="px-6 py-4 font-medium">Required</th>
                        <th className="px-6 py-4 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-terminal-text/10 bg-black/20">
                      {variantData.props.map((prop: any, idx: number) => (
                        <tr
                          key={prop.name}
                          className="hover:bg-terminal-cyan/5 transition-colors group"
                        >
                          <td className="px-6 py-4 font-mono text-terminal-cyan font-bold">
                            {prop.name}
                          </td>
                          <td className="px-6 py-4 font-mono text-terminal-yellow text-xs">
                            {prop.type}
                          </td>
                          <td className="px-6 py-4">
                            {prop.required ? (
                              <span className="inline-flex items-center rounded-sm bg-terminal-red/10 px-2 py-1 text-xs font-medium text-terminal-red ring-1 ring-inset ring-terminal-red/20">
                                YES
                              </span>
                            ) : (
                              <span className="text-terminal-text/30">-</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-terminal-text/70">
                            {prop.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Code & Usage */}
          <div className="lg:col-span-5 space-y-8">
            {/* Installation Card */}
            <div className="bg-terminal-bg border border-terminal-text/20 rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-terminal-text/20 bg-terminal-text/5 flex items-center justify-between">
                <span className="text-sm font-bold text-terminal-text/80">
                  Installation
                </span>
                <span className="text-xs text-terminal-text/40">BASH</span>
              </div>
              <div className="p-4 bg-black">
                <CodeBlock
                  code={variantData.installCommand}
                  language="bash"
                  filename=""
                />
              </div>
            </div>

            {/* Usage Card */}
            <div className="bg-terminal-bg border border-terminal-text/20 rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-terminal-text/20 bg-terminal-text/5 flex items-center justify-between">
                <span className="text-sm font-bold text-terminal-text/80">
                  Usage
                </span>
                <span className="text-xs text-terminal-text/40">TSX</span>
              </div>
              <div className="p-4 bg-black">
                <CodeBlock
                  code={variantData.usage}
                  language="tsx"
                  filename=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-2xl text-terminal-red">DATA_CORRUPTED</h1>
        <Link
          href="/components"
          className="mt-4 text-terminal-cyan hover:underline"
        >
          &lt; Return to Safety
        </Link>
      </div>
    </main>
  );
}
