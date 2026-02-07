---
description: Generate a PR description from current branch changes
---

# Generate PR Description

## Steps

1. **Get base branch:**
   - Default to `main`
   - Verify: `git rev-parse --verify main`

2. **Get context:**
   - `git log main..HEAD --oneline` (commits)
   - `git diff main...HEAD` (changes)

3. **Generate description:**

   ```
   ## Summary
   [1-3 bullet points of what changed]

   ## Why
   [Brief motivation]

   ## Test Plan
   [How to verify changes]
   ```

4. **Ask user** if they want to create/update PR with this description.
