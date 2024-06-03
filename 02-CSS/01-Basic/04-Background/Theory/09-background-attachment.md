# Overview

- Definition and Usage
- Syntax
- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `background-attachment` property sets whether a background image **scrolls** with the rest of the page, or is fixed.

&nbsp;

&nbsp;

| Property              | Description                                                                   | Default value |
| --------------------- | ----------------------------------------------------------------------------- | ------------- |
| background-attachment | Sets whether a background image is fixed or scrolls with the rest of the page | scroll        |
|                       |                                                                               |               |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `background-attachment` property sets whether a background image **scrolls** with the rest of the page, or is fixed.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-attachment: scroll|fixed|local|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

A background-image that will not scroll with the page (fixed):

```css
body {
  background-image: url("img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                           |
| ------------------ | ----------------------------------------- |
| Inherited:         | no                                        |
| Animation type:    | no                                        |
| Version:           | CSS1                                      |
| JavaScript syntax: | object.style.backgroundAttachment="fixed" |
|                    |                                           |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| scroll  | The background image will scroll with the page. This is default |
| fixed   | The background image will not scroll with the page              |
| local   | The background image will scroll with the element's contents    |
| initial | Sets this property to its default value.                        |
| inherit | Inherits this property from its parent element.                 |
