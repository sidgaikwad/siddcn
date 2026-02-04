import { ComponentCard } from "@/components/ComponentCard";

const components = [
  {
    id: "spinners",
    name: "Spinners",
    icon: "*",
    description: "Loading animations",
    variants: [
      { id: "dots", name: "Dots Spinner", description: "Classic dots animation", preview: "Loading..." },
      { id: "bounce", name: "Bouncing Spinner", description: "Bouncing animation", preview: "Processing..." },
      { id: "pulse", name: "Pulse Spinner", description: "Pulsating animation", preview: "Working..." },
      { id: "bar", name: "Bar Spinner", description: "Animated sliding bar", preview: "[====  ]" },
      { id: "wave", name: "Wave Spinner", description: "Wave animation", preview: "~~~~~" },
    ],
  },
  {
    id: "textinput",
    name: "Text Input",
    icon: ">",
    description: "Input fields & forms",
    variants: [
      { id: "basic", name: "Basic Input", description: "Simple text input", preview: "> Type..." },
      { id: "password", name: "Password Input", description: "Masked password field", preview: "> ****" },
      { id: "search", name: "Search Input", description: "Search-style input", preview: "@ Search..." },
    ],
  },
  {
    id: "cards",
    name: "Cards",
    icon: "[]",
    description: "Container components",
    variants: [
      { id: "basic", name: "Basic Card", description: "Simple card", preview: "Card" },
      { id: "info", name: "Info Card", description: "Information card", preview: "[i] Info" },
      { id: "warning", name: "Warning Card", description: "Warning card", preview: "[!] Warning" },
      { id: "success", name: "Success Card", description: "Success card", preview: "[+] Success" },
      { id: "error", name: "Error Card", description: "Error card", preview: "[x] Error" },
      { id: "glow", name: "Glow Card", description: "Animated glow card", preview: "*Card*" },
    ],
  },
  {
    id: "select",
    name: "Select",
    icon: "v",
    description: "Selection inputs",
    variants: [
      { id: "basic", name: "Basic Select", description: "Simple list selection", preview: "> Option 1" },
      { id: "radio", name: "Radio Select", description: "Radio button style", preview: "(*) Option" },
      { id: "dropdown", name: "Dropdown Select", description: "Collapsible dropdown", preview: "Select v" },
    ],
  },
  {
    id: "backgrounds",
    name: "Backgrounds",
    icon: ".",
    description: "Animated effects",
    variants: [
      { id: "stars", name: "Twinkling Stars", description: "Animated starfield", preview: "*  . + *" },
      { id: "matrix", name: "Matrix Rain", description: "Matrix-style characters", preview: "01010" },
    ],
  },
  {
    id: "animatedtext",
    name: "Animated Text",
    icon: "A",
    description: "Text animations",
    variants: [
      { id: "typewriter", name: "Typewriter", description: "Typing effect", preview: "Typing..._" },
      { id: "gradient", name: "Gradient Text", description: "Color cycling", preview: "Rainbow" },
      { id: "pulse", name: "Pulsing Text", description: "Pulsating opacity", preview: "Pulse..." },
      { id: "loading", name: "Loading Dots", description: "Animated ellipsis", preview: "Loading..." },
    ],
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: "!",
    description: "Toasts & alerts",
    variants: [
      { id: "toast", name: "Toast", description: "Toast notification", preview: "[+] Success!" },
      { id: "banner", name: "Banner", description: "Full-width banner", preview: "-- Alert --" },
      { id: "inline", name: "Inline", description: "Inline notification", preview: "(i) Note" },
      { id: "progress", name: "Progress", description: "Progress notification", preview: "Uploading 45%" },
    ],
  },
  {
    id: "dashboards",
    name: "Dashboards",
    icon: "#",
    description: "System monitors",
    variants: [
      { id: "htop", name: "Htop Dashboard", description: "Htop-style layout", preview: "CPU [||||] 65%" },
      { id: "network", name: "Network Dashboard", description: "Network monitoring", preview: "NET: 1.2MB/s" },
      { id: "server", name: "Server Dashboard", description: "Server status", preview: "SRV: Online" },
      { id: "vertical", name: "Vertical Dashboard", description: "Vertical layout", preview: "| Stats |" },
      { id: "horizontal", name: "Horizontal Dashboard", description: "Horizontal layout", preview: "--- Stats ---" },
      { id: "paged", name: "Paged Dashboard", description: "Multi-page layout", preview: "[1/3] Stats" },
    ],
  },
  {
    id: "buttons",
    name: "Buttons",
    icon: "O",
    description: "Interactive button components with various styles",
    variants: [
      { id: "simple", name: "Simple Button", description: "A basic button component", preview: "[ Button ]" },
      { id: "primary", name: "Primary Button", description: "A styled primary action button", preview: "[ Primary ]" },
      { id: "danger", name: "Danger Button", description: "A button for destructive actions", preview: "[ Delete ]" },
      { id: "glow", name: "Glow Button", description: "Animated glow border", preview: "*[ Glow ]*" },
      { id: "pulse", name: "Pulse Button", description: "Pulsating animation", preview: "~ Pulse ~" },
      { id: "icon", name: "Icon Button", description: "Button with icon", preview: "> Action" },
    ],
  },
  {
    id: "progress",
    name: "Progress Bars",
    icon: "|",
    description: "Progress indicators and loading states",
    variants: [
      { id: "linear", name: "Linear Progress", description: "A horizontal progress bar", preview: "[========  ] 75%" },
      { id: "circular", name: "Circular Progress", description: "A circular/spinner indicator", preview: "( 60% )" },
      { id: "step", name: "Step Progress", description: "Multi-step progress indicator", preview: "[1] -> [2] -> [ ]" },
    ],
  },
  {
    id: "badges",
    name: "Badges",
    icon: "*",
    description: "Status indicators and labels",
    variants: [
      { id: "status", name: "Status Badge", description: "Display status with color coding", preview: "< Active >" },
      { id: "count", name: "Count Badge", description: "Display numerical count", preview: "( 42 )" },
      { id: "dot", name: "Dot Badge", description: "Simple dot indicator", preview: "* Online" },
    ],
  },
  {
    id: "charts",
    name: "Charts",
    icon: "^",
    description: "Data visualization components",
    variants: [
      { id: "bar", name: "Bar Chart", description: "Display data as vertical bars", preview: "| | |  |" },
      { id: "line", name: "Line Chart", description: "Display data as a line graph", preview: "_/\\_/" },
    ],
  },
  {
    id: "trees",
    name: "Trees",
    icon: "+",
    description: "Hierarchical data structures",
    variants: [
      { id: "file", name: "File Tree", description: "File system hierarchy", preview: "+- src/\n   +- index.ts" },
      { id: "data", name: "Data Tree", description: "Expandable data nodes", preview: "+- Root\n   +- Child" },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    icon: "=",
    description: "Tabbed navigation with multiple styles",
    variants: [
      { id: "modern", name: "Modern Tabs", description: "Clean modern interface", preview: "[ Tab 1 ] Tab 2" },
      { id: "rounded", name: "Rounded Tabs", description: "Tabs with rounded borders", preview: "( Tab 1 ) Tab 2" },
      { id: "pills", name: "Pill Tabs", description: "Pill-shaped buttons", preview: "[Tab 1] [Tab 2]" },
    ],
  },
  {
    id: "table",
    name: "Table",
    icon: "#",
    description: "Scrollable data grid",
    variants: [
      { id: "default", name: "Data Table", description: "Scrollable table with row selection", preview: "| Name | Status |" },
    ],
  },
  {
    id: "multiselect",
    name: "Multi-Select",
    icon: "x",
    description: "Multiple item selection with limits",
    variants: [
      { id: "default", name: "Multi-Select List", description: "Select multiple items", preview: "[x] React\n[ ] Vue" },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-terminal-cyan">
            Component Library
          </h1>
          <p className="mx-auto max-w-2xl text-terminal-text/70">
            Browse all available TUI components. Each component can be previewed
            in the terminal and installed with a single command.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <ComponentCard key={component.id} {...component} />
          ))}
        </div>
      </div>
    </main>
  );
}
