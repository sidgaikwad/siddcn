---
description: Create git commits with user approval
---

# Commit Changes

You are committing changes made during this session.

## Process

1. **Review changes:**
   - Run `git status` to see changes
   - Run `git diff` to understand modifications
   - Consider one commit or multiple logical commits

2. **Check staged files:**
   - Run `git diff --cached --name-status`
   - If files staged, ask user whether to include them

3. **Plan commits:**
   - Group related files together
   - Draft clear commit messages (imperative mood)
   - Focus on WHY, not just WHAT

4. **Present plan:**
   - List files for each commit
   - Show commit messages
   - Ask: "I plan to create [N] commit(s). Proceed?"

5. **Execute:**
   - Use `git add` with specific files (never `-A`)
   - Create commits
   - Show result: `git log --oneline -n [N]`

## Important

- **NO co-author or Claude attribution**
- Commits authored solely by user
- Write messages as if user wrote them
