# Overview

- [Introduction Techniques](#introduction-techniques)
- [Automatic deployment with the CLI](#automatic-deployment-with-the-cli)
  - [Command](#commands)
  - [Different platforms for deployment](#different-platforms-for-deployment)
- [Basic deployment to a remote server](#basic-deployment-to-a-remote-server)
  - [Steps](#steps)
- [Deploy to GitHub Pages](#deploy-to-github-pages)

&nbsp;

&nbsp;

&nbsp;

# Introduction Techniques

When we are ready to deploy our Angular application to a remote server, we have various options for deployment.

Before fully deploying our application, we can test the process, build configuration, and deployed behavior by using one of these interim techniques.

- Automatic deployment with the CLI
- Building and serving from disk
- Basic deployment to a remote server
- Deploy to GitHub Pages

&nbsp;

&nbsp;

# Automatic deployment with the CLI

The Angular CLI command `ng deploy` executes the deploy CLI builder associated with your project.

A number of third-party builders implement deployment capabilities to different platforms. You can add any of them to your project with `ng add`

&nbsp;

&nbsp;

## Commands

```
ng add @angular/<CLI_Builder>
ng deploy
```

&nbsp;

&nbsp;

## Different platforms for deployment

| Deployment to    | Setup Command                     |
| ---------------- | --------------------------------- |
| Firebase hosting | `ng add @angular/fire`            |
| Vercel vercel    | `init angular`                    |
| Netlify          | `ng add @netlify-builder/deploy`  |
| GitHub pages     | `ng add angular-cli-ghpages`      |
| Amazon Cloud S3  | `ng add @jefiozie/ngx-aws-deploy` |
|                  |                                   |

&nbsp;

&nbsp;

If you're deploying to a self-managed server or there's no builder for your favorite cloud platform, you can either create a builder that allows you to use the `ng deploy` command, or read through this guide to learn how to manually deploy your application.

&nbsp;

&nbsp;

# Basic deployment to a remote server

For the simplest deployment, create a production build and copy the output directory to a web server.

&nbsp;

## Steps

1. Start with the production build ==> `ng build`

2. Copy everything within the output folder (`dist/project-name/ by default`) to a folder on the server.

3. Configure the server to redirect requests for missing files to `index.html`

This is the simplest production-ready deployment of your application.

&nbsp;

&nbsp;

# Deploy to GitHub Pages

To deploy your Angular application to GitHub Pages, complete the following steps:

1. Create a GitHub repository for your project.

2. Configure git in your local project by adding a remote that specifies the GitHub repository you created in previous step. GitHub provides these commands when you create the repository so that you can copy and paste them at your command prompt. The commands should be similar to the following, though GitHub fills in your project-specific settings for you:

   ```
   git remote add origin https://github.com/your-username/your-project-name.git
   git branch -M main
   git push -u origin main
   ```

When you paste these commands from GitHub, they run automatically.

3. Create and check out a git branch named gh-pages.

   ```
   git checkout -b gh-pages
   ```

4. Build your project using the GitHub project name, with the Angular CLI command `ng build` and the following options, where `your_project_name` is the name of the project that you gave the GitHub repository in step 1.

Be sure to include the slashes on either side of your project name as in `/your_project_name/`.

    ```
    ng build --output-path docs --base-href /your_project_name/
    ```

5. When the build is complete, make a copy of `docs/index.html` and name it `docs/404.html`.

6. Commit your changes and push.

7. On the GitHub project page, go to Settings and select the Pages option from the left sidebar to configure the site to publish from the docs folder.

8. Click Save.

9. Click on the GitHub Pages link at the top of the GitHub Pages section to see your deployed application. The format of the link is `https://<user_name>.github.io/<project_name>`.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
