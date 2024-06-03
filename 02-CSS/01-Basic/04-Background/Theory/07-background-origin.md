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

- The `background-origin` property specifies the origin position (the background positioning area) of a background image.

- `background-origin` property has no effect if `background-attachment` is "**fixed**".

&nbsp;

&nbsp;

| Property          | Description                                             | Default value |
| ----------------- | ------------------------------------------------------- | ------------- |
| background-origin | Specifies where the background image(s) is/are position | padding-box   |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `background-origin` property specifies the origin position (the background positioning area) of a background image.

&nbsp;

# Note

This property has no effect if `background-attachment` is "**fixed**".

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-origin: padding-box|border-box|content-box|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
.container {
  background-image: url("./assets/random-photo.jpg");
  border: 10px dashed black;
  padding: 25px;
  background-repeat: no-repeat;
  background-origin: content-box;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type:    | no                                                                    |
| Version:           | CSS3                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.backgroundOrigin="content-box"                           |

&nbsp;

&nbsp;

# Property Values

| Value       | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| padding-box | The background image starts from the upper left corner of the padding edge |
| border-box  | The background image starts from the upper left corner of the border       |
| content-box | The background image starts from the upper left corner of the content      |
| initial     | Sets this property to its default value.                                   |
| inherit     | Inherits this property from its parent element.                            |

&nbsp;

&nbsp;
