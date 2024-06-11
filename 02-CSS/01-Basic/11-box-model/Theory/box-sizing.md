If `box-sizing` is set to `border-box`, however, it determines the height and width of the **border area**.
Means it includes the border and padding; not margin.

If `box-sizing` is not mentioned then the height and width only takes the height and width of the content; not border, padding and margin.

&nbsp;

&nbsp;

# Overview

- Definition and Usage
- Syntax
- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The CSS `box-sizing` property allows us to include the padding and border in an element's total width and height.

&nbsp;

&nbsp;

| Property   | Description                                                                        | Default value |
| ---------- | ---------------------------------------------------------------------------------- | ------------- |
| box-sizing | allows us to include the padding and border in an element's total width and height | content-box   |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The CSS `box-sizing` property allows us to include the padding and border in an element's total width and height.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  box-sizing: content-box|border-box|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
.content-box-content{
    width: 150px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    box-sizing: content-box;
}
```

```css
.border-box-content{
    width: 150px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type:    | no                                                                    |
| Version:           | CSS2                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.boxSizing="border-box"                                   |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value       | Description                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| content-box | Default. The width and height properties (and min/max properties) includes only the content. Border and padding are not included |
| border-box  | The width and height properties (and min/max properties) includes content, padding and border                                    |
| initial     | Sets this property to its default value.                                                                                         |
| inherit     | Inherits this property from its parent element.                                                                                  |
|             |                                                                                                                                  |

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
