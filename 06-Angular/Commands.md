# Set up

1. Install node js

2. Install node js ==> `npm install`

3. Check node version ==> `node -v`

4. Check npm version ==> `npm -v`

5. Install Angular CLI ==> `install npm -g @angular/cli`

6. Check angular version ==> `ng v`

7. Create angular project ==> `ng new project_name`

8. Go to the project ==> `cd project_name`

9. Run the project ==> `npm start` or `ng serve`

   - Run project & open browser together ==> `ng serve --o`

   - Run project in a specific port ==> `ng serve --port port_number`

10. Create component ==> `ng g c component_name` or `ng generate component component_name`

&nbsp;

&nbsp;

&nbsp;

# Deployment

1. Executes the deploy CLI builder ==> `ng deploy`

2. Add any CLI builder ==> `ng add`

&nbsp;

&nbsp;

&nbsp;

# Install angular in github codespace

I've been able to get Angular running in Codespaces by changing the Node version to 16.13. NVM comes pre-installed, so all you need is:

> nvm install 22.4.1

> npm install -g @angular/cli

> ng new project_name

> ng serve

&nbsp;

&nbsp;

# Create angular project in existing github project

> ng new app_Name --directory ./

&nbsp;

&nbsp;

# Deploy

## Install ghpages

> npm i angular-cli-ghpages

## ng add

> ng add angular-cli-ghpages

## Build application

> ng build --base-href "https://Chaitalykundu.github.io/repository_name/"

## Deploy

> npx angular-cli-ghpages --dir=dist/repository_name