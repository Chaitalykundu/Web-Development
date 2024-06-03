# Overview

- Definition and Usage
- Tip
- Syntax
- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `background-position` property sets the starting position of a background image.

&nbsp;

&nbsp;

| Property            | Description                                      | Default value     |
| ------------------- | ------------------------------------------------ | ----------------- |
| background-position | Sets the starting position of a background image | top-left or 0% 0% |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `background-position` property sets the starting position of a background image.

&nbsp;

# Tip

By default, a `background-image` is placed at the **_top-left corner_** of an element,

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-position: value;
}
```

&nbsp;

&nbsp;

# Example

Position a background-image to be centered at top:

```css
body {
  background-image: url("w3css.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                          |
| ------------------ | ---------------------------------------- |
| Default value:     | 0% 0%                                    |
| Inherited:         | no                                       |
| Animation type:    | yes                                      |
| Version:           | CSS1                                     |
| JavaScript syntax: | object.style.backgroundPosition="center" |

&nbsp;

&nbsp;

# Property Values

## 1-value syntax

The value may be:

- The keyword value `center`, which centers the image.

- One of the keyword values `top`, `left`, `bottom`, `right`. This specifies an edge against which to place the item. The other dimension is then set to 50%, so the item is placed in the middle of the edge specified.
- A `<length>` or `<percentage>`. This specifies the X coordinate relative to the left edge, with the Y coordinate set to 50%.

&nbsp;

## 2-value syntax

| Value         | Description                                                                                                                                                                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| left top      | If you only specify one keyword, the other value will be "center"                                                                                                                                                                                          |
| left center   | same                                                                                                                                                                                                                                                       |
| left bottom   | same                                                                                                                                                                                                                                                       |
| right top     | same                                                                                                                                                                                                                                                       |
| right center  | same                                                                                                                                                                                                                                                       |
| right bottom  | same                                                                                                                                                                                                                                                       |
| center top    | same                                                                                                                                                                                                                                                       |
| center center | same                                                                                                                                                                                                                                                       |
| center bottom | same                                                                                                                                                                                                                                                       |
| x% y%         | The first value is the horizontal position and the second value is the vertical. The top left corner is 0% 0%. The right bottom corner is 100% 100%. If you only specify one value, the other value will be 50%. Default value is: 0% 0%                   |
| xpos ypos     | The first value is the horizontal position and the second value is the vertical. The top left corner is 0 0. Units can be pixels (0px 0px) or any other CSS units. If you only specify one value, the other value will be 50%. You can mix % and positions |
| initial       | Sets this property to its default value.                                                                                                                                                                                                                   |
| inherit       | Inherits this property from its parent element.                                                                                                                                                                                                            |
