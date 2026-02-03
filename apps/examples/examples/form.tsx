#!/usr/bin/env node
import React, { useState } from 'react';
import { render, Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';
import { PrimaryButton, SimpleButton } from 'siddcn';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentField, setCurrentField] = useState<'name' | 'email' | 'submit'>('name');
  const [submitted, setSubmitted] = useState(false);

  useInput((input, key) => {
    if (key.tab) {
      if (currentField === 'name') setCurrentField('email');
      else if (currentField === 'email') setCurrentField('submit');
      else setCurrentField('name');
    }
    if (key.return && currentField === 'submit') {
      setSubmitted(true);
    }
  });

  if (submitted) {
    return (
      <Box flexDirection="column" padding={2}>
        <Box borderStyle="double" borderColor="green" paddingX={2} paddingY={1}>
          <Text color="green" bold>
            ✓ Form Submitted Successfully!
          </Text>
        </Box>
        <Box marginTop={2} flexDirection="column">
          <Text>Name: <Text color="cyan">{name}</Text></Text>
          <Text>Email: <Text color="cyan">{email}</Text></Text>
        </Box>
        <Box marginTop={2}>
          <Text dimColor>Press Ctrl+C to exit</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box flexDirection="column" padding={2}>
      <Box borderStyle="double" borderColor="cyan" paddingX={2} paddingY={1} marginBottom={2}>
        <Text bold color="cyan">
          📝 User Registration Form
        </Text>
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold color={currentField === 'name' ? 'cyan' : 'white'}>
            Name:
          </Text>
        </Box>
        <Box>
          {currentField === 'name' ? (
            <TextInput value={name} onChange={setName} placeholder="Enter your name" />
          ) : (
            <Text>{name || <Text dimColor>Not entered</Text>}</Text>
          )}
        </Box>
      </Box>

      <Box flexDirection="column" borderStyle="round" paddingX={2} paddingY={1} marginBottom={2}>
        <Box marginBottom={1}>
          <Text bold color={currentField === 'email' ? 'cyan' : 'white'}>
            Email:
          </Text>
        </Box>
        <Box>
          {currentField === 'email' ? (
            <TextInput value={email} onChange={setEmail} placeholder="Enter your email" />
          ) : (
            <Text>{email || <Text dimColor>Not entered</Text>}</Text>
          )}
        </Box>
      </Box>

      <Box marginBottom={2}>
        {currentField === 'submit' ? (
          <PrimaryButton label="Submit (Press Enter)" />
        ) : (
          <SimpleButton label="Submit" />
        )}
      </Box>

      <Box marginTop={1}>
        <Text dimColor>
          Tab to switch fields • Enter to submit • Ctrl+C to exit
        </Text>
      </Box>
    </Box>
  );
};

render(<Form />);
