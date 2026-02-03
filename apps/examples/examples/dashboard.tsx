#!/usr/bin/env node
import React, { useState, useEffect } from 'react';
import { render, Box, Text } from 'ink';
import { LinearProgress, CircularProgress } from 'siddcn';
import { StatusBadge } from 'siddcn';

const Dashboard = () => {
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [diskUsage, setDiskUsage] = useState(38);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 100));
      setMemoryUsage(Math.floor(Math.random() * 100));
      setDiskUsage(Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box flexDirection="column" padding={2}>
      <Box borderStyle="double" borderColor="cyan" paddingX={2} paddingY={1} marginBottom={2}>
        <Text bold color="cyan">
          📊 System Dashboard
        </Text>
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>CPU Usage</Text>
        </Box>
        <LinearProgress value={cpuUsage} max={100} animated={false} />
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>Memory Usage</Text>
        </Box>
        <LinearProgress value={memoryUsage} max={100} animated={false} />
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>Disk Usage</Text>
        </Box>
        <LinearProgress value={diskUsage} max={100} animated={false} />
      </Box>

      <Box borderStyle="round" paddingX={2} paddingY={1}>
        <Box flexDirection="column">
          <Box marginBottom={1}>
            <Text bold>System Status</Text>
          </Box>
          <Box>
            <Text>API Server: </Text>
            <StatusBadge status="success" />
            <Text>  </Text>
            <Text>Database: </Text>
            <StatusBadge status="success" />
            <Text>  </Text>
            <Text>Cache: </Text>
            <StatusBadge status="warning" />
          </Box>
        </Box>
      </Box>

      <Box marginTop={2}>
        <Text dimColor>
          Press Ctrl+C to exit • Updates every 2 seconds
        </Text>
      </Box>
    </Box>
  );
};

render(<Dashboard />);
