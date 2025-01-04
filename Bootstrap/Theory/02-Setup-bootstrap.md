# Overview

- [Overview](#overview)
- [Setup Bootstrap in Your Project](#setup-bootstrap-in-your-project)
- [CDN](#cdn)
- [CDN CSS link](#cdn-css-link)
- [CDN JS link](#cdn-js-link)
  - [Popper JS CDN link](#popper-js-cdn-link)
  - [Bootstrap JS CDN link](#bootstrap-js-cdn-link)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

**three** ways to start using Bootstrap 5 are

1. Including a CDN (Content Delivery Network)

   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
     rel="stylesheet"
   />
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```

2. Download Bootstrap 5 from `getbootstrap.com`

   - Download Bootstrap from the official website.
   - Include the CSS and JS files in your project.

3. Package Managers

   - Use npm or yarn

     ```bash
     npm install bootstrap
     ```

&nbsp;

&nbsp;

&nbsp;

# Setup Bootstrap in Your Project

There are **three** ways to start using Bootstrap 5 on our own web site.

1. Including a CDN (Content Delivery Network)

2. Download Bootstrap 5 from `getbootstrap.com`

3. Package Managers

&nbsp;

&nbsp;

&nbsp;

# Including a CDN

CDN = Content Delivery Network

The CDN method is the easiest and fastest way to include Bootstrap in our project. We don’t need to download anything—just link to the Bootstrap files hosted online.

&nbsp;

## Steps to Set Up Bootstrap via CDN:

1. **Create an HTML File**: Create a new `.html` file (e.g., index.html).

2. **Add Bootstrap’s CSS and JS**: Paste the following `<link>` into the `<head>` and `<script>` into the `<body>` sections of HTML file:

   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
     rel="stylesheet"
   />
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   ```

&nbsp;

&nbsp;

## CDN CSS link

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>
```

&nbsp;

### Note

CSS Link should be added in `<head>` tag

If we want to add both bootstrap CSS and custom css file, first we need to add bootstrap css file link then custom css file link in html file.

&nbsp;

&nbsp;

## CDN JS link

```html
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
  crossorigin="anonymous"
></script>
```

&nbsp;

`bootstrap.bundle.min.js` is the combination of `popper.js` and `bootstrap.js`

&nbsp;

### Note

JS Link should be added in `<body>` tag

You can also include Popper and our JS separately. If you don’t plan to use **dropdowns**, **popovers**, or **tooltips**, save some kilobytes by not including Popper.

&nbsp;

&nbsp;

## Popper JS CDN link

```html
<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
  integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
  crossorigin="anonymous"
></script>
```

&nbsp;

## Bootstrap JS CDN link

```html
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
  integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
  crossorigin="anonymous"
></script>
```

&nbsp;

&nbsp;

## Pros of CDN

- **Quick setup**: No downloads required.
- **Automatic updates**: Always uses the latest version.
- **Performance**: CDNs deliver files faster and often use caching.

&nbsp;

&nbsp;

## Cons of CDN:

- Requires an internet connection to load Bootstrap files.

&nbsp;

&nbsp;

&nbsp;

# Local Installation

The local installation method allows us to host Bootstrap files locally in our project.

This is a good option if you want to **work offline or avoid relying on external servers**.

&nbsp;

## Steps to Set Up Bootstrap Locally:

1. **Download Bootstrap**:

   - Go to the official Bootstrap website.
   - Click on Download and choose the compiled CSS and JS version (or source files if you want to customize them using Sass).

2. **Extract the Files**:

   - After downloading, extract the zip file. Inside, we’ll find:
     - **CSS folder**: Contains `bootstrap.min.css` and other styles.
     - **JS folder**: Contains `bootstrap.min.js` and related scripts.

3. **Add Bootstrap to Your Project**:

- Create an HTML file (e.g., index.html).
- Link the local Bootstrap files in your project like this:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bootstrap Local Setup</title>
      <!-- Local Bootstrap CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css" />
    </head>
    <body>
      <h1 class="text-center text-success">Hello, Bootstrap!</h1>
      <!-- Local Bootstrap JS -->
      <script src="js/bootstrap.min.js"></script>
    </body>
  </html>
  ```

4. **Organize Files**:

- Place the `bootstrap.min.css` in a css folder and `bootstrap.min.js` in a js folder (or organize them as you like).

5. **Open the File in a Browser**:

- Save the file and open it in your browser. Bootstrap styling should now be applied.

&nbsp;

&nbsp;

## Pros of Local Installation:

- Works without an internet connection.
- More control over the files (e.g., customizations).
- Doesn’t rely on third-party servers.

&nbsp;

&nbsp;

## Cons of Local Installation:

- Requires downloading and managing files manually.
- No automatic updates—you need to update the files yourself.

&nbsp;

&nbsp;

&nbsp;

# Package Managers

- Use npm or yarn

  ```bash
  npm install bootstrap
  ```

&nbsp;

&nbsp;

&nbsp;

# Which Method Should You Choose?

## Use CDN:

- For quick setups and smaller projects.
- When you need to ensure performance through caching and faster delivery.

&nbsp;

## Use Local Installation:

- For offline work or larger projects that require custom modifications to Bootstrap files.
