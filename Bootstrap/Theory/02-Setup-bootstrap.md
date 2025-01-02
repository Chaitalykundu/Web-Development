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

# Setup Bootstrap in Your Project

There are **three** ways to start using Bootstrap 5 on your own web site.

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

# CDN

CDN = Content Delivery Network

&nbsp;

&nbsp;

# CDN CSS link

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>
```

&nbsp;

CSS Link should be added in `<head>` tag

If we want to add both bootstrap CSS and custom css file, first we need to add bootstrap css file link then custom css file link in html file.

&nbsp;

&nbsp;

# CDN JS link

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

&nbsp;

&nbsp;
