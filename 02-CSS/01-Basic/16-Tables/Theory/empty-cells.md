| Property    | Description                                           | Default value |
| ----------- | ----------------------------------------------------- | ------------- |
| empty-cells | sets whether or not to display borders on empty cells | show          |

&nbsp;

&nbsp;

# Definition and Usage

The `empty-cells` property sets whether or not to display borders on empty cells in a table.

&nbsp;

# Note

This property has no effect if `border-collapse` is "collapse".

&nbsp;

&nbsp;

# Syntax

```css
selector {
  empty-cells: show|hide|initial|inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  empty-cells: show;
  empty-cells: hide;
}

/* Global values */
selector {
  empty-cells: inherit;
  empty-cells: initial;
  empty-cells: revert;
  empty-cells: revert-layer;
  empty-cells: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
table {
  empty-cells: hide;
}
```

&nbsp;

&nbsp;

# Formal definition

|                    |                                |
| ------------------ | ------------------------------ |
| Inherited:         | yes                            |
| Animation type     | discrete                       |
| Applies to         | table-cell elements            |
| JavaScript syntax: | object.style.emptyCells="hide" |
|                    |                                |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| show    | Display borders on empty cells                  |
| hide    | Hide borders on empty cells                     |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
