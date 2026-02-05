import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";

// Component data - Updated with ALL categories
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
  // --- NEW CATEGORIES ---
  spinners: {
    name: "Spinners",
    icon: "◐",
    variants: {
      dots: {
        name: "Dots Spinner",
        description: "Classic dots animation",
        installCommand: "npx siddcn add spinner-dots",
        usage: `import { Dots } from 'siddcn';\n\nexport default function App() {\n  return <Dots color="green" />;\n}`,
        props: [
          {
            name: "color",
            type: "string",
            required: false,
            description: "Color of the dots",
          },
        ],
        preview: "Loading...",
      },
      line: {
        name: "Line Spinner",
        description: "Rotating line character",
        installCommand: "npx siddcn add spinner-line",
        usage: `import { LineSpinner } from 'siddcn';\n\nexport default function App() {\n  return <LineSpinner />;\n}`,
        preview: "/ - \\ |",
      },
      "progress-bar": {
        name: "Progress Bar",
        description: "Indeterminate sliding bar",
        installCommand: "npx siddcn add spinner-progress",
        usage: `import { ProgressBar } from 'siddcn';\n\nexport default function App() {\n  return <ProgressBar />;\n}`,
        preview: "[====    ]",
      },
      bouncing: {
        name: "Bouncing Ball",
        description: "Bouncing character animation",
        installCommand: "npx siddcn add spinner-bounce",
        usage: `import { BouncingBall } from 'siddcn';\n\nexport default function App() {\n  return <BouncingBall />;\n}`,
        preview: "(o)     ",
      },
      clock: {
        name: "Clock Spinner",
        description: "Rotating clock hands",
        installCommand: "npx siddcn add spinner-clock",
        usage: `import { Clock } from 'siddcn';\n\nexport default function App() {\n  return <Clock />;\n}`,
        preview: "🕛 🕐 🕑",
      },
    },
  },
  textinput: {
    name: "Text Input",
    icon: "﹥",
    variants: {
      basic: {
        name: "Basic Input",
        description: "Simple text field",
        installCommand: "npx siddcn add input-basic",
        usage: `import { TextInput } from 'siddcn';\n\nexport default function App() {\n  return <TextInput placeholder="Type here..." />;\n}`,
        props: [
          {
            name: "placeholder",
            type: "string",
            required: false,
            description: "Placeholder text",
          },
        ],
        preview: "> Type here...",
      },
      password: {
        name: "Password Input",
        description: "Masked input for secrets",
        installCommand: "npx siddcn add input-password",
        usage: `import { PasswordInput } from 'siddcn';\n\nexport default function App() {\n  return <PasswordInput />;\n}`,
        preview: "Password: ****",
      },
      search: {
        name: "Search Bar",
        description: "Input with search prefix",
        installCommand: "npx siddcn add input-search",
        usage: `import { SearchInput } from 'siddcn';\n\nexport default function App() {\n  return <SearchInput onSubmit={console.log} />;\n}`,
        preview: "🔍 Search...",
      },
    },
  },
  cards: {
    name: "Cards",
    icon: "□",
    variants: {
      simple: {
        name: "Simple Card",
        description: "Basic bordered container",
        installCommand: "npx siddcn add card-simple",
        usage: `import { Card } from 'siddcn';\n\nexport default function App() {\n  return <Card>Content</Card>;\n}`,
        preview: "┌────────┐\n│ Content│\n└────────┘",
      },
      titled: {
        name: "Titled Card",
        description: "Card with header title",
        installCommand: "npx siddcn add card-titled",
        usage: `import { TitledCard } from 'siddcn';\n\nexport default function App() {\n  return <TitledCard title="Title">Body</TitledCard>;\n}`,
        preview: "┌─ Title ─┐\n│ Body    │\n└─────────┘",
      },
      alert: {
        name: "Alert Card",
        description: "Card for important messages",
        installCommand: "npx siddcn add card-alert",
        usage: `import { Alert } from 'siddcn';\n\nexport default function App() {\n  return <Alert type="warning">Check logs</Alert>;\n}`,
        preview: "(!) Alert \n Check logs",
      },
      stats: {
        name: "Stats Card",
        description: "Display numerical data",
        installCommand: "npx siddcn add card-stats",
        usage: `import { Stats } from 'siddcn';\n\nexport default function App() {\n  return <Stats label="CPU" value="45%" />;\n}`,
        preview: "CPU: 45%\n[||||  ]",
      },
      info: {
        name: "Info Box",
        description: "Information display container",
        installCommand: "npx siddcn add card-info",
        usage: `import { InfoBox } from 'siddcn';\n\nexport default function App() {\n  return <InfoBox>Read-only</InfoBox>;\n}`,
        preview: "ℹ️ Info   \n Read-only",
      },
      error: {
        name: "Error Box",
        description: "Error message container",
        installCommand: "npx siddcn add card-error",
        usage: `import { ErrorBox } from 'siddcn';\n\nexport default function App() {\n  return <ErrorBox>Failed!</ErrorBox>;\n}`,
        preview: "❌ Error  \n Failed!",
      },
    },
  },
  select: {
    name: "Select",
    icon: "▼",
    variants: {
      list: {
        name: "List Select",
        description: "Vertical list selection",
        installCommand: "npx siddcn add select-list",
        usage: `import { Select } from 'siddcn';\n\nexport default function App() {\n  return <Select options={['A', 'B']} />;\n}`,
        preview: "> Option A\n  Option B",
      },
      radio: {
        name: "Radio Group",
        description: "Radio button selection",
        installCommand: "npx siddcn add select-radio",
        usage: `import { RadioGroup } from 'siddcn';\n\nexport default function App() {\n  return <RadioGroup options={['Yes', 'No']} />;\n}`,
        preview: "(*) Yes\n( ) No",
      },
      dropdown: {
        name: "Dropdown",
        description: "Collapsible selection list",
        installCommand: "npx siddcn add select-dropdown",
        usage: `import { Dropdown } from 'siddcn';\n\nexport default function App() {\n  return <Dropdown placeholder="Select" />;\n}`,
        preview: "Select ▼",
      },
    },
  },
  backgrounds: {
    name: "Backgrounds",
    icon: "░",
    variants: {
      matrix: {
        name: "Matrix Rain",
        description: "Falling code characters",
        installCommand: "npx siddcn add bg-matrix",
        usage: `import { MatrixBg } from 'siddcn';\n\nexport default function App() {\n  return <MatrixBg />;\n}`,
        preview: "1 0 1 0\n0 1 1 0",
      },
      stars: {
        name: "Starfield",
        description: "Moving star animation",
        installCommand: "npx siddcn add bg-stars",
        usage: `import { Starfield } from 'siddcn';\n\nexport default function App() {\n  return <Starfield />;\n}`,
        preview: ".  * . \n * .  *",
      },
    },
  },
  animatedtext: {
    name: "Animated Text",
    icon: "A",
    variants: {
      typewriter: {
        name: "Typewriter",
        description: "Typing effect character by character",
        installCommand: "npx siddcn add text-typewriter",
        usage: `import { Typewriter } from 'siddcn';\n\nexport default function App() {\n  return <Typewriter text="Hello World" />;\n}`,
        preview: "Typing..._",
      },
      gradient: {
        name: "Gradient Text",
        description: "RGB color cycle effect",
        installCommand: "npx siddcn add text-gradient",
        usage: `import { GradientText } from 'siddcn';\n\nexport default function App() {\n  return <GradientText>RAINBOW</GradientText>;\n}`,
        preview: "RAINBOW",
      },
      glitch: {
        name: "Glitch Text",
        description: "Random character corruption",
        installCommand: "npx siddcn add text-glitch",
        usage: `import { GlitchText } from 'siddcn';\n\nexport default function App() {\n  return <GlitchText>System</GlitchText>;\n}`,
        preview: "Sys$#em",
      },
      pulse: {
        name: "Pulse Text",
        description: "Opacity pulsing effect",
        installCommand: "npx siddcn add text-pulse",
        usage: `import { PulseText } from 'siddcn';\n\nexport default function App() {\n  return <PulseText>Loading...</PulseText>;\n}`,
        preview: "Loading...",
      },
    },
  },
  notifications: {
    name: "Notifications",
    icon: "!",
    variants: {
      toast: {
        name: "Toast",
        description: "Temporary popup message",
        installCommand: "npx siddcn add notify-toast",
        usage: `import { Toast } from 'siddcn';\n\nexport default function App() {\n  return <Toast message="Saved" />;\n}`,
        preview: "[✔ Saved]",
      },
      banner: {
        name: "Banner",
        description: "Full width alert bar",
        installCommand: "npx siddcn add notify-banner",
        usage: `import { Banner } from 'siddcn';\n\nexport default function App() {\n  return <Banner type="warning">WARNING</Banner>;\n}`,
        preview: "⚠ WARNING ⚠",
      },
      "spinner-toast": {
        name: "Loading Toast",
        description: "Toast with spinner",
        installCommand: "npx siddcn add notify-loading",
        usage: `import { LoadingToast } from 'siddcn';\n\nexport default function App() {\n  return <LoadingToast>Working</LoadingToast>;\n}`,
        preview: "⟳ Working",
      },
      "error-toast": {
        name: "Error Toast",
        description: "Error notification",
        installCommand: "npx siddcn add notify-error",
        usage: `import { ErrorToast } from 'siddcn';\n\nexport default function App() {\n  return <ErrorToast>Failed</ErrorToast>;\n}`,
        preview: "✖ Failed",
      },
    },
  },
  dashboards: {
    name: "Dashboards",
    icon: "▦",
    variants: {
      server: {
        name: "Server Monitor",
        description: "CPU/RAM resource layout",
        installCommand: "npx siddcn add dash-server",
        usage: `import { ServerDash } from 'siddcn';\n\nexport default function App() {\n  return <ServerDash />;\n}`,
        preview: "CPU [||] 20%\nRAM [||] 40%",
      },
      network: {
        name: "Network Stats",
        description: "Upload/Download speed layout",
        installCommand: "npx siddcn add dash-net",
        usage: `import { NetworkDash } from 'siddcn';\n\nexport default function App() {\n  return <NetworkDash />;\n}`,
        preview: "▲ 1.2 MB/s\n▼ 4.5 MB/s",
      },
      process: {
        name: "Process List",
        description: "Table of active processes",
        installCommand: "npx siddcn add dash-proc",
        usage: `import { ProcessList } from 'siddcn';\n\nexport default function App() {\n  return <ProcessList />;\n}`,
        preview: "PID  NAME\n123  node",
      },
      docker: {
        name: "Docker Containers",
        description: "Container status grid",
        installCommand: "npx siddcn add dash-docker",
        usage: `import { DockerDash } from 'siddcn';\n\nexport default function App() {\n  return <DockerDash />;\n}`,
        preview: "ID   STATUS\na1b  Up 2h",
      },
      logs: {
        name: "Log Viewer",
        description: "Scrolling log output",
        installCommand: "npx siddcn add dash-logs",
        usage: `import { LogViewer } from 'siddcn';\n\nexport default function App() {\n  return <LogViewer />;\n}`,
        preview: "[INFO] Start\n[WARN] Slow",
      },
      minimal: {
        name: "Minimal Dash",
        description: "Clean simple metrics",
        installCommand: "npx siddcn add dash-min",
        usage: `import { MinDash } from 'siddcn';\n\nexport default function App() {\n  return <MinDash />;\n}`,
        preview: "OK | 20ms",
      },
    },
  },

  // --- ORIGINAL CATEGORIES ---
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
  if (!categoryData) return <NotFound />;

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
