| Property         | Description                              | Default value |
| ---------------- | ---------------------------------------- | ------------- |
| background-image | Sets the background image for an element | None          |

&nbsp;

# Definition and Usage

The `background-image` property sets one or more background images for an element.

By default, a background-image is placed at the **_top-left corner_** of an element, and **_repeated both vertically and horizontally_**.

&nbsp;

# Tip

- When using a background image, use an image that does not disturb the text.

- Always set a `background-color` to be used if the image is unavailable.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-image: url|none|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Set the background image for a page:

```css
body {
  background-image: url("paper.gif");
}
```

&nbsp;

Sets two background images for the `<body>` element. Let the first image appear only once (with `no-repeat`), and let the second image be `repeated`:

```css
body {
  background-image: url("img_tree.gif"), url("paper.gif");
  background-repeat: no-repeat, repeat;
  background-color: #cccccc;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Default value:     | none                                                                  |
| Inherited:         | no                                                                    |
| Animation type:    | no                                                                    |
| Version:           | CSS1 + new values in CSS3                                             |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.backgroundImage="url(img_tree.gif)"                      |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value                       | Description                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| url('URL')                  | The **URL** to the image. To specify more than one image, separate the URLs with a comma     |
| none                        | No background image will be displayed.                                                       |
| conic-gradient()            | Sets a conic gradient as the background image. Define at least two colors                    |
| linear-gradient()           | Sets a linear gradient as the background image. Define at least two colors (top to bottom)   |
| radial-gradient()           | Sets a radial gradient as the background image. Define at least two colors (center to edges) |
| repeating-conic-gradient()  | Repeats a conic gradient                                                                     |
| repeating-linear-gradient() | Repeats a linear gradient                                                                    |
| repeating-radial-gradient() | Repeats a radial gradient                                                                    |
| initial                     | Sets this property to its default value.                                                     |
| inherit                     | Inherits this property from its parent element                                               |
|                             |                                                                                              |

&nbsp;

&nbsp;

&nbsp;
&nbsp;
&nbsp;
