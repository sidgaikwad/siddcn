#!/bin/bash
echo "Building siddcn..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo ""
echo "Starting siddcn TUI..."
node dist/cli.js
