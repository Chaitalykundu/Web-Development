| Property          | Description                                             | Default value |
| ----------------- | ------------------------------------------------------- | ------------- |
| background-origin | Specifies where the background image(s) is/are position | padding-box   |

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

Set two background images for a `<div>` element. Let the "paper.gif" background image starts from the upper left corner of the padding edge, and let the "img_tree.gif" background image starts from the upper left corner of the content:

```css
#example1 {
  border: 10px dashed black;
  padding: 25px;
  background: url(img_tree.gif), url(paper.gif);
  background-repeat: no-repeat;
  background-origin: content-box, padding-box;
}
```

&nbsp;

&nbsp;

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
