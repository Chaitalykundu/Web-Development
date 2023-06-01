| Property       | Description                                              | Default value |
| -------------- | -------------------------------------------------------- | ------------- |
| border-spacing | sets the distance between the borders of adjacent cells. | 2px           |

&nbsp;

&nbsp;

# Definition and Usage

The `border-spacing` property sets the distance between the borders of adjacent cells.

&nbsp;

# Note

This property works only when `border-collapse` is `separate`.

Negative values are not allowed.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  border-spacing: length|initial|inherit;
}
```

&nbsp;

```css
/* <length> */
selector {
  border-spacing: 2px;
}
/* horizontal <length> | vertical <length> */
selector {
  border-spacing: 1cm 2em;
}

/* Global values */
selector {
  border-spacing: inherit;
  border-spacing: initial;
  border-spacing: revert;
  border-spacing: revert-layer;
  border-spacing: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
#table1 {
  border-collapse: separate;
  border-spacing: 15px;
}

#table2 {
  border-collapse: separate;
  border-spacing: 15px 50px;
}
```

&nbsp;

&nbsp;

# Formal definition

|                    |                                   |
| ------------------ | --------------------------------- |
| Inherited:         | yes                               |
| Animation type     | discrete                          |
| Applies to         | table and inline-table elements   |
| JavaScript syntax: | object.style.borderSpacing="15px" |
|                    |                                   |

&nbsp;

&nbsp;

# Property Values

| Value         | Description                                                                                                                                                                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| length length | Specifies the distance between the borders of adjacent cells in px, cm, etc. If one value is specified, it defines both the horizontal and vertical spacing between cells. If two values are specified, the first sets the horizontal spacing and the second sets the vertical spacing |
| initial       | Sets this property to its default value.                                                                                                                                                                                                                                               |
| inherit       | Inherits this property from its parent element.                                                                                                                                                                                                                                        |
