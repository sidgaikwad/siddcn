#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import { FileTree, TreeNode } from 'siddcn';

const TreesDemo = () => {
  const sampleTree: TreeNode = {
    name: 'my-project',
    type: 'dir',
    children: [
      {
        name: 'src',
        type: 'dir',
        children: [
          {
            name: 'components',
            type: 'dir',
            children: [
              { name: 'App.tsx', type: 'file', meta: '2.4 KB' },
              { name: 'Header.tsx', type: 'file', meta: '1.1 KB' },
              { name: 'Footer.tsx', type: 'file', meta: '0.8 KB' },
              { name: 'Sidebar.tsx', type: 'file', meta: '1.6 KB' },
            ],
          },
          {
            name: 'hooks',
            type: 'dir',
            children: [
              { name: 'useAuth.ts', type: 'file', meta: '1.2 KB' },
              { name: 'useFetch.ts', type: 'file', meta: '0.9 KB' },
            ],
          },
          {
            name: 'utils',
            type: 'dir',
            children: [
              { name: 'api.ts', type: 'file', meta: '2.1 KB' },
              { name: 'helpers.ts', type: 'file', meta: '1.4 KB' },
              { name: 'constants.ts', type: 'file', meta: '0.6 KB' },
            ],
          },
          { name: 'index.ts', type: 'file', meta: '0.2 KB' },
          { name: 'App.css', type: 'file', meta: '3.2 KB' },
        ],
      },
      {
        name: 'public',
        type: 'dir',
        children: [
          { name: 'index.html', type: 'file', meta: '1.0 KB' },
          { name: 'favicon.ico', type: 'file', meta: '16 KB' },
          { name: 'manifest.json', type: 'file', meta: '0.3 KB' },
        ],
      },
      { name: 'package.json', type: 'file', meta: '1.8 KB' },
      { name: 'tsconfig.json', type: 'file', meta: '0.5 KB' },
      { name: 'README.md', type: 'file', meta: '2.2 KB' },
    ],
  };

  const handleSelect = (node: TreeNode) => {
    console.log('Selected:', node.name, '- Type:', node.type);
  };

  return <FileTree data={sampleTree} onSelect={handleSelect} />;
};

render(<TreesDemo />);
