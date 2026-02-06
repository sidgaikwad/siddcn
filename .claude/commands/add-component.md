---
description: Add a new TUI component to siddcn
---

# Add Component: $ARGUMENTS

## Process

### 1. Understand Component

What component type is "$ARGUMENTS"?
- What does it display/do?
- What variants should exist?
- What props are needed?

### 2. Check Similar Components

Look at existing patterns in `packages/siddcn/src/components/`:
- `buttons/` - Interactive buttons
- `progress/` - Progress indicators  
- `badges/` - Status badges
- `charts/` - Data visualization
- `trees/` - Hierarchical data

### 3. Create Component

```
/task component-builder "Create component: $ARGUMENTS

Requirements: [from step 1]
Similar to: [from step 2]

Create in: packages/siddcn/src/components/[name]/index.tsx
Register in: packages/siddcn/src/components/registry.tsx"
```

### 4. Verify

- Run `pnpm build` in packages/siddcn
- Run `pnpm dev` to test component
- Check it appears in the TUI menu

### 5. Document

Ensure component has:
- Proper TypeScript types
- Install command in registry
- Usage example in registry
- Props documentation
