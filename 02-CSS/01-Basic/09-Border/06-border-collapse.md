| Property        | Description                                                                     | Default value |
| --------------- | ------------------------------------------------------------------------------- | ------------- |
| border-collapse | sets whether table borders should collapse into a single border or be separated | separate      |

&nbsp;

&nbsp;

# Definition and Usage

The `border-collapse` property sets whether table borders should collapse into a single border or be separated as in standard HTML.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  border-collapse: separate|collapse|initial|inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  border-collapse: collapse;
  border-collapse: separate;
}

/* Global values */
selector {
  border-collapse: inherit;
  border-collapse: initial;
  border-collapse: revert;
  border-collapse: revert-layer;
  border-collapse: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
#table1 {
  border-collapse: separate;
}

#table2 {
  border-collapse: collapse;
}
```

&nbsp;

&nbsp;

# Formal definition

|                    |                                        |
| ------------------ | -------------------------------------- |
| Inherited:         | yes                                    |
| Animation type     | discrete                               |
| Applies to         | table and inline-table elements        |
| JavaScript syntax: | object.style.borderCollapse="collapse" |
|                    |                                        |

&nbsp;

&nbsp;

# Property Values

| Value    | Description                                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------------------- |
| separate | Borders are separated; each cell will display its own borders.                                                      |
| collapse | Borders are collapsed into a single border when possible (border-spacing and empty-cells properties have no effect) |
| initial  | Sets this property to its default value.                                                                            |
| inherit  | Inherits this property from its parent element.                                                                     |
