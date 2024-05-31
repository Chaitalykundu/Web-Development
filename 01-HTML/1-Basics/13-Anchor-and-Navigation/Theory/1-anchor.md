# Overview

- Links
- anchor tag (`<a></a>`)
- Syntax
- Example
- Image as a Link
- Link to an Email Address
- Button as a Link
- Default CSS Settings
- Specification
- Global Attributes
- Event Attributes

&nbsp;

&nbsp;

&nbsp;

# Summary

| Tag / Attribute / Property | Description                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------- |
| `<a>`                      | define a link                                                                         |
| `href`                     | define the link address                                                               |
| `target`                   | define where to open the linked document                                              |
| `<img>`                    | used inside `<a>` to define an image as a link                                        |
| `mailto:`                  | used inside the `href` attribute to create a link that opens the user's email program |

&nbsp;

&nbsp;

# Links

- Links allow users to click their way from page to page.

- HTML links are hyperlinks.

&nbsp;

&nbsp;

&nbsp;

# anchor tag (`<a></a>`)

- The HTML `<a>` tag defines a hyperlink that links one page to another page.

- It can create hyperlink to other web page as well as files, location, or any URL.

- The `href` attribute is the most important attribute of the HTML `<a>` tag which indicates the link's destination.

&nbsp;

&nbsp;

# Tips and Notes

1. If the `<a>` tag has no `href` attribute, it is only a placeholder for a hyperlink.

2. A linked page is normally displayed in the current browser window, unless you specify another target.

3. Use CSS to style Links and Buttons.

&nbsp;

&nbsp;

# Syntax :

```html
<a href="url">link text</a>
```

&nbsp;

&nbsp;

# Example

```html
<a href="https://www.google.com">Visit Google!</a>
```

&nbsp;

&nbsp;

# Image as a Link

- To use an image as a link, just put the `<img>` tag inside the `<a>` tag:

&nbsp;

## Example

```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;" />
</a>
```

&nbsp;

&nbsp;

# Link to an Email Address

- Use `mailto:` inside the `href` attribute to create a link that opens the user's email program (to let them send a new email):

&nbsp;

## Example

```html
<a href="mailto:someone@example.com">Send email</a>
```

&nbsp;

&nbsp;

# Button as a Link

- To use an HTML button as a link, you have to add some JavaScript code.

- JavaScript allows you to specify what happens at certain events, such as a click of a button:

&nbsp;

## Example

```html
<button onclick="document.location='default.asp'">HTML Tutorial</button>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
a:link,
a:visited {
  color: (internal value);
  text-decoration: underline;
  cursor: auto;
}

a:link:active,
a:visited:active {
  color: (internal value);
}
```

&nbsp;

&nbsp;

# Specification

|                   |           |
| ----------------- | --------- |
| Tag               | Container |
| Display / Element | Inline    |
| Usage             | Link      |
|                   |           |

&nbsp;

&nbsp;

# Global Attributes

The `<a>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

The `<a>` tag also supports the Event Attributes in HTML.

&nbsp;
