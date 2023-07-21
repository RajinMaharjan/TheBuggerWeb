The branches need to be pushed to the 'develop' branch and not to the main branch. Push can be in any branch as per need but can't be in the main branch

# Commit convention:

Example:
"Fix(layout): Set up the layout"

So this means that:
"Class(files): What you actually did"

Class:What did you do overall
-Fix - A bug fix
-Feat- A new feature
-Docs - Documentation only changes
-perf- Change the code performance
-refactor- changes that neither fixes a bug nor add a feature
-style-Changes that do not affect he meaning of the code.

Files: Where have you changed in the files
-in index.tsx=> (pages/index)

What:

- what you actually did.

# After committing, please run 'npm run build' before pushing.

# regarding push and pull cycle

- newBranch(after push->send pull request -> develop (here develop will either accept the changes or not).
- newBranch-> checkout-> develop-> git pull origin develop ->checkout-> newBranch -> git pull origin develop
  At the end of a work send pull request. And the pull origin of develop to start working again.
