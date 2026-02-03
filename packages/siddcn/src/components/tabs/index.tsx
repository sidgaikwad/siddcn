import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { getTheme } from '../../utils/theme';

export interface Tab {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
  onTabChange?: (index: number) => void;
  style?: 'modern' | 'rounded' | 'underline' | 'pills' | 'blocks';
}

const TabStyles = {
  modern: {
    borderStyle: 'bold' as const,
    activeBorder: 'double' as const,
  },
  rounded: {
    borderStyle: 'round' as const,
    activeBorder: 'round' as const,
  },
  underline: {
    borderStyle: 'single' as const,
    activeBorder: 'single' as const,
  },
  pills: {
    borderStyle: 'round' as const,
    activeBorder: 'round' as const,
  },
  blocks: {
    borderStyle: 'bold' as const,
    activeBorder: 'bold' as const,
  },
};

export const Tabs: React.FC<TabsProps> = ({ 
  tabs, 
  defaultTab = 0,
  onTabChange,
  style = 'modern'
}) => {
  const theme = getTheme();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const styleConfig = TabStyles[style];

  useInput((input, key) => {
    if (key.leftArrow) {
      const newIndex = Math.max(0, activeTab - 1);
      setActiveTab(newIndex);
      onTabChange?.(newIndex);
    } else if (key.rightArrow) {
      const newIndex = Math.min(tabs.length - 1, activeTab + 1);
      setActiveTab(newIndex);
      onTabChange?.(newIndex);
    } else if (key.tab) {
      const newIndex = (activeTab + 1) % tabs.length;
      setActiveTab(newIndex);
      onTabChange?.(newIndex);
    } else if (input >= '1' && input <= '9') {
      const idx = parseInt(input) - 1;
      if (idx < tabs.length) {
        setActiveTab(idx);
        onTabChange?.(idx);
      }
    }
  });

  return (
    <Box flexDirection="column">
      {/* Tab Headers */}
      <Box>
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;
          
          return (
            <Box
              key={tab.id}
              marginRight={1}
              borderStyle={isActive ? styleConfig.activeBorder : styleConfig.borderStyle}
              borderColor={isActive ? theme.colors.primary : theme.colors.border}
              paddingX={2}
              paddingY={0}
            >
              <Text 
                color={isActive ? theme.colors.primary : theme.colors.text}
                bold={isActive}
              >
                {tab.icon && `${tab.icon} `}{tab.label}
              </Text>
            </Box>
          );
        })}
      </Box>

      {/* Separator */}
      <Box marginY={1}>
        <Text color={theme.colors.border}>{'─'.repeat(60)}</Text>
      </Box>

      {/* Active Tab Content */}
      <Box 
        borderStyle={theme.borderStyle} 
        borderColor={theme.colors.border} 
        padding={1}
        flexDirection="column"
      >
        {tabs[activeTab].content}
      </Box>

      {/* Footer with indicators */}
      <Box marginTop={1} justifyContent="center">
        {tabs.map((tab, index) => (
          <Text 
            key={tab.id}
            color={index === activeTab ? theme.colors.primary : theme.colors.dimText}
            bold={index === activeTab}
          >
            {tab.icon || '●'}
            {index < tabs.length - 1 && '   '}
          </Text>
        ))}
      </Box>

      <Box marginTop={1} justifyContent="center">
        <Text dimColor>
          ← → Navigate   1-{tabs.length} Quick Switch   Tab Cycle
        </Text>
      </Box>
    </Box>
  );
};

// Example Tab Content Components
export const DashboardTab: React.FC = () => {
  const theme = getTheme();
  
  const stats = [
    { label: 'Active Users', value: '12.4K', change: '+12.5%', positive: true },
    { label: 'Revenue', value: '$48.2K', change: '+8.2%', positive: true },
    { label: 'Conversion', value: '3.4%', change: '-2.1%', positive: false },
  ];

  return (
    <Box flexDirection="column">
      <Text bold color={theme.colors.primary}>Dashboard Overview</Text>
      <Box marginTop={1} flexDirection="column">
        {stats.map((stat, idx) => (
          <Box key={idx} marginBottom={1}>
            <Text bold color={theme.colors.secondary}>{stat.value.padEnd(10)}</Text>
            <Text>{stat.label.padEnd(18)}</Text>
            <Text color={stat.positive ? theme.colors.success : theme.colors.error}>
              {stat.change}
            </Text>
          </Box>
        ))}
      </Box>
      <Box marginTop={1}>
        <Text dimColor>Real-time metrics updated every minute</Text>
      </Box>
    </Box>
  );
};

export const AnalyticsTab: React.FC = () => {
  const theme = getTheme();
  
  const data = [
    { label: 'Mobile', value: 45 },
    { label: 'Desktop', value: 62 },
    { label: 'Tablet', value: 78 },
    { label: 'Web', value: 54 },
    { label: 'API', value: 89 },
  ];

  const maxVal = Math.max(...data.map(d => d.value));

  return (
    <Box flexDirection="column">
      <Text bold color={theme.colors.primary}>Platform Analytics</Text>
      <Box marginTop={1} flexDirection="column">
        {data.map((item, idx) => {
          const barWidth = Math.floor((item.value / maxVal) * 30);
          return (
            <Box key={idx}>
              <Text>{item.label.padEnd(8)}</Text>
              <Text color={theme.colors.primary}>{'█'.repeat(barWidth)}</Text>
              <Text dimColor>{'░'.repeat(30 - barWidth)}</Text>
              <Text dimColor> {item.value}%</Text>
            </Box>
          );
        })}
      </Box>
      <Box marginTop={1}>
        <Text dimColor>Platform usage distribution</Text>
      </Box>
    </Box>
  );
};

export const SettingsTab: React.FC = () => {
  const theme = getTheme();
  
  const settings = [
    { key: 'Notifications', value: 'Enabled', icon: '🔔' },
    { key: 'Theme Mode', value: 'Auto', icon: '🎨' },
    { key: 'Language', value: 'English', icon: '🌐' },
    { key: 'Privacy', value: 'High', icon: '🔒' },
  ];

  return (
    <Box flexDirection="column">
      <Text bold color={theme.colors.primary}>Settings</Text>
      <Box marginTop={1} flexDirection="column">
        {settings.map((setting, idx) => (
          <Box key={idx}>
            <Text dimColor>{setting.icon}  </Text>
            <Text>{setting.key.padEnd(16)}</Text>
            <Text color={theme.colors.secondary}>{setting.value}</Text>
          </Box>
        ))}
      </Box>
      <Box marginTop={1}>
        <Text dimColor>Customize your preferences</Text>
      </Box>
    </Box>
  );
};
