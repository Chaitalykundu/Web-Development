# initialize git repository

> git init

&nbsp;

&nbsp;

# Staging files

stage a file

> git add FILENAME

&nbsp;

stage multiple file

> git add FILENAME1 FILENAME2

&nbsp;

Stage the current directory & all its files

> git add .

&nbsp;

Stage a file with a pattern

> git add \*.extension

&nbsp;

&nbsp;

# See status

full status

> git status

&nbsp;

Short status

> git status -s

&nbsp;

&nbsp;

# Committing the staged files

Commits with a one single-line message

> git commit -m "MESSAGE"

&nbsp;

Open the default editor to type a long message

> git commit

&nbsp;

&nbsp;

# Skipping the staging area

> git commit -am "MESSAGE"

&nbsp;

&nbsp;

# Removing files

Remove from working directory & staging area

> git rm FILENAME

&nbsp;

Remove from staging area only

> git rm --cached FILENAME

&nbsp;

&nbsp;

# Renaming or moving file

> git mv OLD_NAME NEW_NAME

&nbsp;

&nbsp;

# Viewing the staged/unstaged changes

Shows unstaged changes

> git diff

&nbsp;

Shows staged changes

&nbsp;

> git diff-staged

&nbsp;

Same as the above

> git diff --cached

&nbsp;

&nbsp;

# Viewing the history

Full history

> git log

&nbsp;

Summary

> git log --oneline

&nbsp;

Lists the commits from the oldest to the newest

> git log --reverse

&nbsp;

&nbsp;

# Viewing a commit

Shows the given commit

> git show 921a2ff

&nbsp;

Shows the last commit

> git show HEAD

&nbsp;

Two steps before the last commit

> git show HEAD-2

&nbsp;

Shows the version of file.js stored in the last commit

> git show HEAD:file.js

&nbsp;

&nbsp;

# Unstaging files (undoing git add)

Copies the last version of file is from repo to index

> git restore --staged filename

&nbsp;

&nbsp;

# Discarding local changes

Copies file from index to working directory

> git restore file

&nbsp;

Restores multiple files in working directory

> git restore file1 file2

&nbsp;

Discards all local changes (except untracked files)

> git restore .

&nbsp;

Removes all untracked files

> git clean -fd

&nbsp;

&nbsp;

# Restoring an earlier version of a file

> git restore--source-HEAD-2 file.js

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
