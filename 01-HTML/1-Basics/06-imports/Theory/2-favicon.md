# Overview

- Favicon
- How To Add a Favicon in HTML
- Example
- Create your own favicon

&nbsp;

&nbsp;

&nbsp;

# Favicon

- A favicon is a **small image** displayed next to the page title in the browser tab.

- A favicon is a small image, so it should be a simple image with **high contrast**.

- We use HTML `<link>` tag to insert a **favicon**

&nbsp;

&nbsp;

# How To Add a Favicon in HTML

- To add a favicon to your website, either save your favicon image to the root directory of your web server, or create a folder in the root directory called images, and save your favicon image in this folder.

- A common name for a favicon image is **_"favicon.ico"_**.

- Next, add a `<link>` element to your "index.html" file, after the `<title>` element

&nbsp;

&nbsp;

## Example

```html
<head>
  <title>My Page Title</title>

  <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
</head>
```

&nbsp;

&nbsp;

# Create your own favicon

- You can create your own favicon on this [site](https://www.favicon.cc).
