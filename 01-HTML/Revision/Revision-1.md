# Overview

- [Overview](#overview)
- [Basic Structure](#basic-structure)
- [!DOCTYPE](#doctype)
  - [Purpose of `<!DOCTYPE>`](#purpose-of-doctype)
    - [Note](#note)
- [head tag](#head-tag)
  - [Purpose of the `<head>` Tag](#purpose-of-the-head-tag)
- [Semantic Elements:](#semantic-elements)

&nbsp;

&nbsp;

&nbsp;

# Basic Structure

```md
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <p>Content goes here</p>
</body>
</html>
```

&nbsp;

- `<!DOCTYPE>`: Declares the document type and version (e.g., HTML5).
- `<html>`: The root element for the HTML document.
- `<head>`: Contains metadata (e.g., `<title>`, `<meta>`).
- `<body>`: Contains the visible content.

&nbsp;

&nbsp;

&nbsp;

# !DOCTYPE

The `<!DOCTYPE>` declaration specifies the **Document Type Definition** (DTD) and tells the browser what version of HTML the page is written in.

&nbsp;

&nbsp;

## Purpose of `<!DOCTYPE>`

1. **_<u>Standards Compliance</u>_** : It ensures the browser follows the standard rules for rendering the HTML and CSS, providing consistent behavior across browsers.

2. **_<u>Document Rendering Mode</u>_**: Without a `<!DOCTYPE>`, browsers may switch to **quirks mode**, where they emulate older, less strict behavior for backward compatibility. This can cause inconsistent layout and styling.

3. **_<u>HTML Version Specification</u>_**: It helps the browser understand which version of HTML (e.g., HTML5, XHTML, etc.) is being used, influencing how it parses and interprets the code.

&nbsp;

### Note

Always include `<!DOCTYPE>` at the beginning of your HTML document to ensure **predictable and standards-compliant rendering**.

&nbsp;

&nbsp;

&nbsp;

# head tag

The `<head>` tag contains metadata and other informations which are not directly displayed to to webpage.

It provides essential details to the browser and search engines, influencing how the page is rendered and indexed.

&nbsp;

&nbsp;

## Purpose of the `<head>` Tag

- Metadata Storage
- Page Title
- Linking External Resources
- Defining Character Encoding
- SEO and Social Sharing
- Browser Behavior Control
- Customizing Appearance

&nbsp;

&nbsp;

# Semantic Elements:

| Semantic Elements | Description       |
| ----------------- | ----------------- |
| `<header>`        | top section       |
| `<footer>`        | bottom section    |
| `<main>`          | core content      |
| `<article>`       | independent piece |
| `<section>`       | group of content  |
|                   |                   |

&nbsp;

&nbsp;

&nbsp;

&nbsp;
