# Overview

- [Overview](#overview)
- [Short status flags](#short-status-flags)
- [Commit](#commit)
  - [Note](#note)
- [Syntax](#syntax)
- [Git Commit without Stage](#git-commit-without-stage)
- [Git Commit Log](#git-commit-log)

&nbsp;

&nbsp;

&nbsp;

# Short status flags

| flags | Descriptions         |
| ----- | -------------------- |
| ??    | Untracked files      |
| A     | Files added to stage |
| M     | Modified files       |
| D     | Deleted files        |

&nbsp;

&nbsp;

# Commit

Since we have finished our work, we are ready move from `stage` to `commit` for our repo.

Adding commits keep track of our progress and changes as we work.

Git considers each commit **_change point or "save point"_**. It is a point in the project you can go back to if you find a bug, or want to make a change.

By adding clear messages to each commit, it is easy for yourself (and others) to see what has changed and when.

&nbsp;

## Note

**When we commit, we should always include a message.**

&nbsp;

&nbsp;

# Syntax

```bash
git bash -m "COMMIT-MESSAGE"
```

&nbsp;

&nbsp;

# Git Commit without Stage

Sometimes, when you make small changes, using the staging environment seems like a waste of time. It is possible to commit changes directly, skipping the staging environment.

The `-a` option will automatically stage every changed, already tracked file.

```bash
git commit -a -m "COMMIT-MESSAGE"
```

&nbsp;

&nbsp;

# Git Commit Log

To view the history of commits for a repository, you can use the `log` command:

```bash
git log
```

&nbsp;

Summary

```bash
 git log --oneline
```
