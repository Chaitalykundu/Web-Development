# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [CSS padding Properties](#css-padding-properties)
- [Definition and Usage](#definition-and-usage)
- [Note](#note)
- [Syntax](#syntax)
- [Padding: Shorthand Property](#padding-shorthand-property)
- [CSS padding Values](#css-padding-values)
- [Padding and Element Width](#padding-and-element-width)
  - [Example](#example)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- Padding is used to create **space around an element's content**, inside of any defined borders.

- Padding creates extra space within an element, while margin creates extra space around an element.

- The padding property is a shorthand property for the following individual **padding** properties:

  - padding-top
  - padding-right
  - padding-bottom
  - padding-left

- Negative values are not allowed in padding property

&nbsp;

&nbsp;

# CSS padding Properties

| Property       | Description                                                                    | Default value |
| -------------- | ------------------------------------------------------------------------------ | ------------- |
| padding        | A shorthand property for setting all the padding properties in one declaration | 0             |
| padding-top    | Sets the top padding of an element                                             | 0             |
| padding-right  | Sets the right padding of an element                                           | 0             |
| padding-bottom | Sets the bottom padding of an element                                          | 0             |
| padding-left   | Sets the left padding of an element                                            | 0             |
|                |                                                                                |               |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

Padding is used to create **space around an element's content**, inside of any defined borders.

&nbsp;

# Note

Padding creates extra space within an element, while margin creates extra space around an element.

**_Negative values are not allowed._**

&nbsp;

&nbsp;

# Syntax

```css
padding: length|percentage|initial|inherit;
```

&nbsp;

&nbsp;

# Padding: Shorthand Property

The padding property is a shorthand property for:

- padding-top
- padding-right
- padding-bottom
- padding-left

&nbsp;

There are **four** types to specify the padding property. You can use one of them.

- padding: 50px 100px 150px 200px;
- padding: 50px 100px 150px;
- padding: 50px 100px;
- padding 50px;

&nbsp;

&nbsp;

- padding: 50px 100px 150px 200px;

  - **top** padding value is 50px
  - **right** padding value is 100px
  - **bottom** padding value is 150px
  - **left** padding value is 200px

&nbsp;

- padding: 50px 100px 150px;

  - **top** padding value is 50px
  - **left** and **right** padding values are 100px
  - **bottom** padding value is 150px

&nbsp;

- **_padding_**: 50px 100px;

  - **top** and **bottom** padding values are 50px
  - **left** and **right** padding values are 100px

&nbsp;

- **_padding_**: 50px;

  - **top right bottom** and **left** padding values are 50px

&nbsp;

&nbsp;

# CSS padding Values

| Value   | Description                                                            |
| ------- | ---------------------------------------------------------------------- |
| length  | specifies a padding in px, pt, cm, etc.                                |
| %       | specifies a padding in % of the width of the containing element        |
| inherit | specifies that the padding should be inherited from the parent element |

&nbsp;

&nbsp;

&nbsp;

# Padding and Element Width

The CSS `width` property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element .

So, if an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.

&nbsp;

## Example

Here, the `<div>` element is given a width of 300px. However, the actual width of the `<div>` element will be 350px (300px + 25px of left padding + 25px of right padding):

```css
div {
  width: 300px;
  padding: 25px;
}
```
