# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Definition and Usage](#definition-and-usage)
- [Note](#note)
- [Constituent properties](#constituent-properties)
- [Syntax](#syntax)
- [Example](#example)
- [Formal Definition](#formal-definition)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The `border-width` property is used to set the **border's width**.

- The `border-width` is always used with `border-style` to set the border first. Otherwise it will not work.

- We can also define border property without defining `border-width` property. It will take default value at that time

- There are **five** different syntaxes you can use with this property

&nbsp;

&nbsp;

| Property     | Description                             | Default value |
| ------------ | --------------------------------------- | ------------- |
| border-width | specifies the width of the four borders | medium        |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `border-width` property is used to set the **border's width**.

It is set in **pixels**.

We can also use the one of the three pre-defined values, **thin**, **medium** or **thick** to set the width of the border.

&nbsp;

&nbsp;

# Note

The `border-width` is always used with `border-style` to set the border first. Otherwise it will not work.

&nbsp;

&nbsp;

# Constituent properties

`border-width` property is a shorthand for the following CSS properties:

- border-top-width: medium
- border-right-width: medium
- border-bottom-width: medium
- border-left-width: medium

&nbsp;

&nbsp;

# Syntax

```css
selector {
  border-width: thin|medium|thick|length|initial|inherit;
}
```

&nbsp;

&nbsp;

There are **five** different syntaxes you can use with this property:

- <u>**The keyword syntax**</u>

  ```css
  selector {
    border-width: thin|medium| thick;
  }
  ```

  &nbsp;

- <u>**the one-value syntax**</u>

  ```css
  /* all four sides */
  selector {
    border-width: 4px;
  }
  ```

&nbsp;

- <u>**The two-value syntax**</u>

  ```css
  /* top and bottom | left and right */
  selector {
    border-width: 2px 1.5em;
  }
  ```

&nbsp;

- <u>**The three-value syntax**</u>

  ```css
  /* top | left and right | bottom */
  selector {
    border-width: 1px 2em 1.5cm;
  }
  ```

&nbsp;

- <u>**The four-value syntax**</u>

  ```css
  /* top | right | bottom | left */
  selector {
    border-width: 1px 2em 0 4rem;
  }
  ```

- <u> **Global values**</u>

  ```css
  selector {
    border-width: inherit;
    border-width: initial;
    border-width: revert;
    border-width: revert-layer;
    border-width: unset;
  }
  ```

&nbsp;

&nbsp;

# Example

```css
.para1 {
  border: 10px dotted red;
  border-top: 1px solid black;
}
```

&nbsp;

In the following example `border-width` is not define. It will take default value at that time

```css
.para2 {
  border: solid black;
}
```

&nbsp;

&nbsp;

# Formal Definition

|                    |                                                   |
| ------------------ | ------------------------------------------------- |
| Inherited:         | no                                                |
| Animation type:    | a length                                          |
| Applies to         | all elements. It also applies to `::first-letter` |
| JavaScript syntax: | object.style.borderWidth="1px 5px"                |
|                    |                                                   |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| thin    | specifies the thin border                       |
| medium  | specifies the medium border                     |
| thick   | specifies the thick border                      |
| length  | specifies the length of the border              |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
|         |                                                 |
