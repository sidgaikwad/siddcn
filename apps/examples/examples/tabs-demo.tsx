#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import { Tabs, DashboardTab, AnalyticsTab, SettingsTab } from 'siddcn';

const TabsDemo = () => {
  const handleTabChange = (index: number) => {
    console.log(`Switched to tab ${index}`);
  };

  const tabs = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: '📊', 
      content: <DashboardTab /> 
    },
    { 
      id: 'analytics', 
      label: 'Analytics', 
      icon: '📈', 
      content: <AnalyticsTab /> 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: '⚙️', 
      content: <SettingsTab /> 
    },
  ];

  return <Tabs tabs={tabs} style="modern" onTabChange={handleTabChange} />;
};

render(<TabsDemo />);
