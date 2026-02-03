#!/usr/bin/env node
import React, { useState, useEffect } from 'react';
import { render, Box, Text } from 'ink';
import { LinearProgress, CircularProgress, StepProgress } from 'siddcn';

const ProgressDemo = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setProgress1((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 200);

    const interval2 = setInterval(() => {
      setProgress2((prev) => (prev >= 100 ? 0 : prev + 3));
    }, 150);

    const interval3 = setInterval(() => {
      setProgress3((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <Box flexDirection="column" padding={2}>
      <Box borderStyle="double" borderColor="cyan" paddingX={2} paddingY={1} marginBottom={2}>
        <Text bold color="cyan">
          ⏳ Progress Bars Demo
        </Text>
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>Fast Progress (5% per tick)</Text>
        </Box>
        <LinearProgress value={progress1} max={100} animated={false} />
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>Medium Progress (3% per tick)</Text>
        </Box>
        <LinearProgress value={progress2} max={100} animated={false} />
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>Slow Progress (2% per tick)</Text>
        </Box>
        <LinearProgress value={progress3} max={100} animated={false} />
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>Circular Progress</Text>
        </Box>
        <CircularProgress percentage={progress1} animated={false} />
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold>Step Progress (Animated)</Text>
        </Box>
        <StepProgress />
      </Box>

      <Box marginTop={1}>
        <Text dimColor>
          All progress bars auto-loop • Press Ctrl+C to exit
        </Text>
      </Box>
    </Box>
  );
};

render(<ProgressDemo />);
