## Purpose
A Simple Website to showcase web-based projects served from Github Pages

## How to Deploy
Run `node ./Scripts/gh-pages-deploy.mjs`

This will run a series of commands that will:

1. Checkout an orphan branch called gh-pages
2. Build the Project into a `./dist/` folder
3. Copy the CNAME file into the dist folder
4. only add the `./dist/` folder to commit
5. commit and push to GitHub
6. force checkout master, and delete the local copy of the gh-pages branch

GitHub is then configured to deploy the `dist/` folder on gh-pages any time it is pushed to.

### Minor issues with the deployment process

If anything happens in the build process, it doesn't revert the steps that are already ran. So I have to manually force checkout master before making corrections
and then running the deploy command again.


### Contact
enochfinley@gmail.com
