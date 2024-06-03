# Overview

- Introduction
- Note
- Syntax
- JavaScript syntax
- Property Values

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- We must use a / (slash) to separate `background-size` from the `background-position` property.

- If we are using multiple `background-image` sources but also want a `background-color`, the `background-color` parameter needs to be **last** in the list.

&nbsp;

&nbsp;

# Background property

The background property is a shorthand property for (in order):

- background-color
- background-image
- background-position
- background-size
- background-repeat
- background-origin
- background-clip
- background-attachment

&nbsp;

It does not matter if one of the values above are missing, e.g. `background:#ff0000 url(smiley.gif);` is allowed.

&nbsp;

&nbsp;

# Note

1. If one of the properties in the shorthand declaration is the `background-size` property, you must use a / (slash) to separate it from the `background-position` property.

   - Ex : `background:url(smiley.gif) 10px 20px/50px 50px;` will result in a background image, positioned 10 pixels from the left, 20 pixels from the top, and the size of the image will be 50 pixels wide and 50 pixels high.

&nbsp;

2. If we are using multiple `background-image` sources but also want a `background-color`, the `background-color` parameter needs to be **last** in the list.

&nbsp;

&nbsp;

# Syntax

```css
background: background-color background-image background-position/background-size background-repeat background-origin background-clip
  background-attachment initial|inherit;
```

&nbsp;

&nbsp;

# JavaScript syntax

|                    |                                                                  |
| ------------------ | ---------------------------------------------------------------- |
| JavaScript syntax: | object.style.background="red url(smiley.gif) top left no-repeat" |

&nbsp;

&nbsp;

# Property Values

| Property              | Description                                                                   | Default value     |
| --------------------- | ----------------------------------------------------------------------------- | ----------------- |
| background            | Sets all the background properties in one declaration                         |
| background-color      | Sets the background color of an element                                       | transparent       |
| background-image      | Sets the background image for an element                                      | None              |
| background-position   | Sets the starting position of a background image                              | top-left or 0% 0% |
| background-size       | Specifies the size of the background image(s)                                 | auto              |
| background-repeat     | Sets how a background image will be repeated                                  | repeat            |
| background-origin     | Specifies where the background image(s) is/are positioned                     | padding-box       |
| background-clip       | Specifies the painting area of the background                                 | border-box        |
| background-attachment | Sets whether a background image is fixed or scrolls with the rest of the page | scroll            |
| initial               | Sets this property to its default value                                       |
| inherit               | Inherits this property from its parent element.                               |
