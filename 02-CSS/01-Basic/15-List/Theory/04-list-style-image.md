| Property         | Description                                | Default value |
| ---------------- | ------------------------------------------ | ------------- |
| list-style-image | Specifies an image as the list-item marker | none          |

&nbsp;

&nbsp;

# Definition & usage

The `list-style-image` property replaces the list-item marker with an image.

&nbsp;

# Note

Always specify the `list-style-type` property in addition. This property is used if the image for some reason is unavailable.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  list-style-image: none|url|initial|inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  list-style-image: none;
}

/* valid image values */
selector {
  list-style-image: linear-gradient(to left bottom, red, blue);
}

/* <url> values */
selector {
  list-style-image: url("starsolid.gif");
}

/* Global values */
selector {
  list-style-image: inherit;
  list-style-image: initial;
  list-style-image: revert;
  list-style-image: revert-layer;
  list-style-image: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
ul {
  list-style-image: url("sqpurple.gif");
}
```

&nbsp;

&nbsp;

|                    |                                                 |
| ------------------ | ----------------------------------------------- |
| Inherited:         | yes                                             |
| Animation type     | discrete                                        |
| Applies to         | list items                                      |
| JavaScript syntax: | object.style.listStyleImage="url('smiley.gif')" |
|                    |                                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| none    | No image will be displayed. Instead, the list-style-type property will define what type of list marker will be rendered |
| url     | The path to the image to be used as a list-item marker                                                                  |
| initial | Sets this property to its default value.                                                                                |
| inherit | Inherits this property from its parent element.                                                                         |
