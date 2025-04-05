# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Properties](#properties)
- [Definition and Usage](#definition-and-usage)
- [Note](#note)
- [Syntax](#syntax)
- [Example](#example)
- [Specification](#specification)
- [Property Values](#property-values)
- [Note](#note-1)
- [Position - Static](#position---static)
  - [Example](#example-1)
- [Position - relative](#position---relative)
  - [Example](#example-2)
- [Position - fixed](#position---fixed)
  - [Example](#example-3)
- [Position - absolute](#position---absolute)
- [Position - Sticky](#position---sticky)
  - [Example](#example-4)

&nbsp;

&nbsp;

# Chapter Summary

- Elements are then positioned using the **top**, **bottom**, **left**, and **right** properties. However, these properties will not work unless the position property is set first.

&nbsp;

&nbsp;

# Properties

| Value    | Description                                      | Default value |
| -------- | ------------------------------------------------ | ------------- |
| position | sets how an element is positioned in a document. | static        |
|          |                                                  |               |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `position` property sets how an element is positioned in a document. (static, relative, absolute, fixed, or sticky).

&nbsp;

# Note

Elements are then positioned using the **top**, **bottom**, **left**, and **right** properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value

The `sticky` value is not supported in Internet Explorer or Edge 15 and earlier versions.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  position: static | absolute | fixed | relative | sticky | initial | inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
#parent1 {
  position: static;
  border: 1px solid blue;
  width: 300px;
  height: 100px;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                  |
| ------------------ | -------------------------------- |
| Inherited:         | no                               |
| Animation type     | discrete                         |
| Applies to         | all elements                     |
| JavaScript syntax: | object.style.position="absolute" |
|                    |                                  |

&nbsp;

&nbsp;

# Property Values

| Value    | Description                                                                                                                                                                                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| static   | Elements render in order, as they appear in the document flow                                                                                                                                                                                                                          |
| absolute | The element is positioned relative to its parent                                                                                                                                                                                                                                       |
| relative | The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position                                                                                                                                                                |
| fixed    | The element is positioned relative to the browser window                                                                                                                                                                                                                               |
| sticky   | The element is positioned based on the user's scroll position A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). |
| initial  | Sets this property to its default value.                                                                                                                                                                                                                                               |
| inherit  | Inherits this property from its parent element.                                                                                                                                                                                                                                        |
|          |                                                                                                                                                                                                                                                                                        |

&nbsp;

&nbsp;

# Note

- Suppose we have two elements A & B. If we want to make A's position absolute with respect to B, then we have to set `position : relative` to element B first and then set `position:absolute` to element A.

- If we use before / after in any element and want set `position:absolute` then the element should be set to `position : relative` first

  ```css
  .para1{
    position: relative;
  }

  .para1:hover::before {
  content: "This is paragraph 1";
  color: red;
  background-color: #dfdbf5;
  position: absolute;
  left: 10%;
  top: 24px;

  ```

&nbsp;

&nbsp;

# Position - Static

HTML elements are positioned static by default.

Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with `position: static;` is not positioned in any special way. it is always positioned according to the normal flow of the page.

&nbsp;

### Example

```css
div.static {
  position: static;
  border: 3px solid #73ad21;
}
```

&nbsp;

&nbsp;

# Position - relative

An element with `position: relative;` is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.

Other content will not be adjusted to fit into any gap left by the element.

&nbsp;

### Example

```css
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73ad21;
}
```

&nbsp;

&nbsp;

# Position - fixed

An element with `position: fixed;` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.

The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

&nbsp;

### Example

Notice the fixed element in the lower-right corner of the page.

```css
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73ad21;
}
```

&nbsp;

&nbsp;

# Position - absolute

An element with `position: absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

Note: **Absolute positioned elements are removed from the normal flow, and can overlap elements.**

&nbsp;

&nbsp;

&nbsp;

# Position - Sticky

An element with `position: sticky;` is positioned based on the user's scroll position.

A sticky element toggles between **relative** and **fixed**, depending on the scroll position.

It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

&nbsp;

### Example

```css
div.sticky {
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4caf50;
}
```
