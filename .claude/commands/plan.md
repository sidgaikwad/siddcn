---
description: Plan a feature with clarification, research, and synthesis
---

**Step 1: Clarify Requirements**

**Feature Request:** $ARGUMENTS

Before planning, let me ask clarifying questions:

[Ask questions to understand scope, requirements, constraints, edge cases, and technical preferences]

---

**Step 2: Confirm Understanding**

[Summarize feature requirements and get confirmation]

---

**Step 3: Initial Codebase Research**

Launch researcher agent:

```
/task researcher "Analyze siddcn codebase:
1. Existing packages in use (check package.json)
2. Current architecture patterns
3. Files likely needing modification
4. Key integration points

Feature context: [requirements]"
```

---

**Step 4: Parallel Deep Research**

Launch multiple researchers (2-8 based on complexity):

```
/task researcher "Research [specific aspect]..."
/task researcher "Deep dive into [codebase area]..."
```

---

**Step 5: Synthesize Plan**

```
/task planner "Create plan for: [feature name]

Requirements: [confirmed requirements]

Research findings:
- Initial analysis: [summary]
- Technology research: [summary]
- Codebase analysis: [summary]

Output to .plans/[feature-name].md"
```
