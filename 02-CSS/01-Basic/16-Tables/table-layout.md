| Property     | Description                                                          | Default value |
| ------------ | -------------------------------------------------------------------- | ------------- |
| table-layout | defines the algorithm used to lay out table cells, rows, and columns | auto          |

&nbsp;

&nbsp;

# Definition and Usage

The `table-layout` property defines the algorithm used to lay out table cells, rows, and columns.

&nbsp;

# Tip

The main benefit of `table-layout: fixed;` is that the table renders much faster. On large tables, users will not see any part of the table until the browser has rendered the whole table. So, if you use table-layout: fixed, users will see the top of the table while the browser loads and renders rest of the table. This gives the impression that the page loads a lot quicker!

&nbsp;

&nbsp;

# Syntax

```css
selector {
  table-layout: auto|fixed|initial|inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  table-layout: auto;
  table-layout: fixed;
}

/* Global values */
selector {
  table-layout: inherit;
  table-layout: initial;
  table-layout: revert;
  table-layout: revert-layer;
  table-layout: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
table.a {
  table-layout: auto;
  width: 180px;
}

table.b {
  table-layout: fixed;
  width: 180px;
}
```

&nbsp;

&nbsp;

# Formal definition

|                    |                                  |
| ------------------ | -------------------------------- |
| Inherited:         | no                               |
| Animation type     | discrete                         |
| Applies to         | table and inline-table elements  |
| JavaScript syntax: | object.style.tableLayout="fixed" |
|                    |                                  |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                                                                                                                                                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto    | Browsers use an automatic table layout algorithm. The column width is set by the widest unbreakable content in the cells. The content will dictate the layout                                                                                                                                                                                 |
| fixed   | Sets a fixed table layout algorithm. The table and column widths are set by the widths of table and col or by the width of the first row of cells. Cells in other rows do not affect column widths. If no widths are present on the first row, the column widths are divided equally across the table, regardless of content inside the cells |
| initial | Sets this property to its default value.                                                                                                                                                                                                                                                                                                      |
| inherit | Inherits this property from its parent element.                                                                                                                                                                                                                                                                                               |
