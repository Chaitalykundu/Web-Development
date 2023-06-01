| Property            | Description                                    | Default value |
| ------------------- | ---------------------------------------------- | ------------- |
| list-style-position | Specifies where to place the list-item marker. | outside       |

&nbsp;

&nbsp;

# Definition & usage

The `list-style-position` property specifies the position of the list-item markers (bullet points).

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```css
selector {
  list-style-position: inside|outside|initial|inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  list-style-position: inside;
  list-style-position: outside;
}

/* Global values */
selector {
  list-style-position: inherit;
  list-style-position: initial;
  list-style-position: revert;
  list-style-position: revert-layer;
  list-style-position: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}
```

&nbsp;

&nbsp;

|                    |                                         |
| ------------------ | --------------------------------------- |
| Inherited:         | yes                                     |
| Animation type     | discrete                                |
| Applies to         | list items                              |
| JavaScript syntax: | object.style.listStylePosition="inside" |
|                    |                                         |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| inside  | The bullet points will be inside the list item                   |
| outside | The bullet points will be outside the list item. This is default |
| initial | Sets this property to its default value.                         |
| inherit | Inherits this property from its parent element.                  |
