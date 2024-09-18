# Files

When we create a project, the following files are created

- package.json
- package-lock.json
- angular.json
- tsconfig.app.json
- tsconfig.json
- tsconfig.spec.json
- README.md
- .gitignore
- app.config.ts
- app.routes.ts

&nbsp;

&nbsp;

# package.json

package.json is the entry of all the Packages and libraries along with its version that we will be using in the project.

Configures npm package dependencies that are available to all projects in the workspace.

Configure = arrange or put together in a particular form or configuration.

&nbsp;

In package.json we can see project name and version of the project.

&nbsp;

This file also contains **dependencies** and **dev-dependencies** section.

`dependencies` contains the packages which will be the part of the build even after deployment.

`dev-dependencies` contains the packages which will be the part of the angular project to run only locally (for development as well as testing). These are not the part of the build

&nbsp;

&nbsp;

# angular.json

This file contains project configuration related setting

&nbsp;

&nbsp;

# .gitignore

This file contains the folders or files or modules which should not be pushed in git.

Folder should be specified using `/`, and Files should be in only names.

&nbsp;

&nbsp;

# tsconfig.json

This file contains the settings of the compilation of typescript.

&nbsp;

&nbsp;

# src folder

Source files for the root-level application project.

&nbsp;

&nbsp;

# index.html

This is the entry point.

This file contains `<app-toot></app-toot>`. The whole application will run inside this.

&nbsp;

&nbsp;

# main.ts

After running the application the very first file which will be executed is main.ts.

bootstraping = turn on / starting something

&nbsp;

&nbsp;

# app.routes.ts

Here, We create routes

&nbsp;
