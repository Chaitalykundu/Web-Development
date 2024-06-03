# Overview

- Definition and Usage
- Syntax
- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `background-clip` property defines how far the background (**color or image**) should extend within an element.

- The image will be repeated if the actual image size is small and `background-repeat` is not set

&nbsp;

&nbsp;

| Property        | Description                                   | Default value |
| --------------- | --------------------------------------------- | ------------- |
| background-clip | Specifies the painting area of the background | border-box    |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `background-clip` property defines how far the background (color or image) should extend within an element.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-clip: length|percentage|border-box|padding-box|content-box|no-clip|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Specify how far the background should extend within an element:

```css
div {
  border: 10px dotted black;
  padding: 15px;
  background: lightblue;
  background-clip: padding-box;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type:    | yes                                                                   |
| Version:           | CSS3                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.backgroundClip="content-box"                             |

&nbsp;

&nbsp;

# Property Values

| Value       | Description Demo                                        |
| ----------- | ------------------------------------------------------- |
| border-box  | Default value. The background extends behind the border |
| padding-box | The background extends to the inside edge of the border |
| content-box | The background extends to the edge of the content box   |
| initial     | Sets this property to its default value.                |
| inherit     | Inherits this property from its parent element          |

&nbsp;

&nbsp;
