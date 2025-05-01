# Questions

1. What is Git snapshot

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# 1. What is git?

```md
Git is a distributed version control system and source code management (SCM) system with an emphasis to handle small and large projects with speed and efficiency
```

&nbsp;

# 2. What is the command you can use to write a commit message?

```md
The command which is used to write a commit message is `git commit -m "commit message"`.
We can also use `git commit -a`. This automatically stage all tracked, modified files before the commit
```

&nbsp;

&nbsp;

# How can we clone a repo and and push it in different repo

Steps :

1. clone the repo `git clone <repo_link>`
2. delete the `.git` file
3. `git init`
4. `git add .`
5. `git commit -m "message"`
6. `git branch -M master`
7. `git remote add origin https://github.com/Chaitalykundu/aa.git`
8. `git push -u origin master`

&nbsp;

&nbsp;

&nbsp;
