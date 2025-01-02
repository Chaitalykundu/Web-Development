# Overview

- [Overview](#overview)
- [!DOCTYPE](#doctype)
- [Purpose of `<!DOCTYPE>`](#purpose-of-doctype)
- [Note](#note)

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
