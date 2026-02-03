import React, { useState } from "react";
import { Box, Text, useInput } from "ink";
import { getTheme } from "../utils/theme";
import { SimpleButton } from "../components/buttons";
import { LinearProgress } from "../components/progress";
import { StatusBadge } from "../components/badges";

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  preview: React.ReactNode;
}

interface ShowcaseMenuScreenProps {
  onSelect: (categoryId: string) => void;
}

export const ShowcaseMenuScreen: React.FC<ShowcaseMenuScreenProps> = ({
  onSelect,
}) => {
  const theme = getTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items: ShowcaseItem[] = [
    {
      id: "buttons",
      title: "Buttons",
      subtitle: "Styled variants",
      icon: "◉",
      preview: <SimpleButton label="Primary" />,
    },
    {
      id: "select",
      title: "Select",
      subtitle: "Single-select",
      icon: "◎",
      preview: (
        <Text>
          ▸ <Text color={theme.colors.primary}>Option 1</Text>
        </Text>
      ),
    },
    {
      id: "multi-select",
      title: "Multi-Select",
      subtitle: "Checkboxes",
      icon: "☑",
      preview: (
        <Text>
          <Text color={theme.colors.primary}>☑</Text> Item A
        </Text>
      ),
    },
    {
      id: "text-input",
      title: "Text Input",
      subtitle: "Live typing",
      icon: "✎",
      preview: (
        <Text dimColor>
          │ Type... <Text color={theme.colors.primary}>█</Text>
        </Text>
      ),
    },
    {
      id: "trees",
      title: "Tree",
      subtitle: "Hierarchy",
      icon: "⊞",
      preview: (
        <Text>
          ├─ <Text color={theme.colors.primary}>folder/</Text>
        </Text>
      ),
    },
    {
      id: "tabs",
      title: "Tabs",
      subtitle: "Tab interface",
      icon: "⊟",
      preview: (
        <Text>
          [{" "}
          <Text color={theme.colors.primary} bold>
            Tab 1
          </Text>{" "}
          ]
        </Text>
      ),
    },
    {
      id: "tables",
      title: "Table",
      subtitle: "Data grid",
      icon: "▦",
      preview: <Text dimColor>│ Row 1 │</Text>,
    },
    {
      id: "cards",
      title: "Cards",
      subtitle: "Panel layout",
      icon: "◇",
      preview: <Text dimColor>╭─Card─╮</Text>,
    },
    {
      id: "badges",
      title: "Badges",
      subtitle: "Status tags",
      icon: "◆",
      preview: <StatusBadge status="success" />,
    },
    {
      id: "progress",
      title: "Progress",
      subtitle: "Progress bars",
      icon: "▓",
      preview: <LinearProgress value={60} max={100} animated={false} />,
    },
    {
      id: "spinners",
      title: "Spinners",
      subtitle: "Animations",
      icon: "◌",
      preview: (
        <Text>
          <Text color={theme.colors.primary}>⠋</Text> Loading...
        </Text>
      ),
    },
    {
      id: "charts",
      title: "Chart",
      subtitle: "Live data",
      icon: "▄",
      preview: <Text color={theme.colors.primary}>▂▃▅▇▆▄▂</Text>,
    },
  ];

  // Grid logic
  const COLS = 3;
  const ROWS = Math.ceil(items.length / COLS);
  const CARD_WIDTH = 30; // Fixed width to prevent jumping

  useInput((input, key) => {
    if (key.leftArrow || input === "h")
      setSelectedIndex((prev) => Math.max(0, prev - 1));
    if (key.rightArrow || input === "l")
      setSelectedIndex((prev) => Math.min(items.length - 1, prev + 1));
    if (key.upArrow || input === "k")
      setSelectedIndex((prev) => Math.max(0, prev - COLS));
    if (key.downArrow || input === "j")
      setSelectedIndex((prev) => Math.min(items.length - 1, prev + COLS));
    if (key.return) onSelect(items[selectedIndex].id);
  });

  return (
    <Box flexDirection="column" alignItems="center" width="100%">
      {/* ── Header ── */}
      <Box
        borderStyle="double"
        borderColor={theme.colors.primary}
        paddingX={4}
        marginBottom={1}
      >
        <Text bold color={theme.colors.text}>
          siddcn Component Library Showcase
        </Text>
      </Box>

      <Box marginBottom={1}>
        <Text dimColor>
          Navigate the grid with arrow keys · Enter to explore
        </Text>
      </Box>

      {/* ── Grid ── */}
      <Box flexDirection="column">
        {Array.from({ length: ROWS }).map((_, row) => (
          <Box key={row} flexDirection="row" marginBottom={1}>
            {Array.from({ length: COLS }).map((_, col) => {
              const index = row * COLS + col;

              // Empty placeholder for alignment
              if (index >= items.length) {
                return <Box key={col} width={CARD_WIDTH} marginRight={2} />;
              }

              const item = items[index];
              const isSelected = index === selectedIndex;
              const borderColor = isSelected ? theme.colors.primary : "gray";
              // "round" looks more like ╭─Card─╮ than single
              const borderStyle = isSelected ? "round" : "single";

              return (
                <Box
                  key={item.id}
                  width={CARD_WIDTH}
                  height={8} // Fixed height ensures alignment
                  marginRight={2}
                  borderStyle={borderStyle}
                  borderColor={borderColor}
                  flexDirection="column"
                  paddingX={1}
                >
                  {/* Top Row: Icon + Title */}
                  <Box flexDirection="row">
                    <Text color={isSelected ? theme.colors.primary : "white"}>
                      {item.icon}{" "}
                    </Text>
                    <Text bold color={isSelected ? "white" : "gray"}>
                      {item.title}
                    </Text>
                  </Box>

                  {/* Separator */}
                  <Box>
                    <Text dimColor>──────────────────────</Text>
                  </Box>

                  {/* Preview (Middle) */}
                  <Box flexGrow={1} justifyContent="center" alignItems="center">
                    {item.preview}
                  </Box>

                  {/* Bottom: Description */}
                  <Box justifyContent="center">
                    <Text dimColor wrap="truncate">
                      {item.subtitle}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* ── Footer ── */}
      <Box marginTop={1} flexDirection="column" alignItems="center">
        <Text dimColor>
          ────────────────────────────────────────────────────────────────────────
        </Text>
        <Text dimColor>
          {items.length} components · Arrow keys navigate · Enter select ·
          Ctrl+C quit
        </Text>
      </Box>
    </Box>
  );
};
