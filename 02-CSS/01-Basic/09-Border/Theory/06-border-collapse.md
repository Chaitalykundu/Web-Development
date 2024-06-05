# Overview

- Definition and Usage
- Constituent properties
- Syntax
- Example
- Formal Definition
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `border-collapse` property sets whether table borders should collapse into a single border or be separated as in standard HTML.

- It only applies in tables

&nbsp;

&nbsp;

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
table,
th,
td {
  border: 3px solid rgb(232, 6, 6);
}
.table {
  margin: 30px;
  border-collapse: collapse;
}
```

&nbsp;

<table class="table" style="border: 3px solid rgb(232, 6, 6); border-collapse: collapse;" >
        <thead>
            <tr >
                <th style="border: 3px solid rgb(232, 6, 6);" >row 1</th>
                <th style="border: 3px solid rgb(232, 6, 6);" >row 2</th>
                <th style="border: 3px solid rgb(232, 6, 6);" >row 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 11</td>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 12</td>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 13</td>
            </tr>
            <tr>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 21</td>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 22</td>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 23</td>
            </tr>
            <tr>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 31</td>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 32</td>
                <td style="border: 3px solid rgb(232, 6, 6);" >value 33</td>
            </tr>
        </tbody>
    </table>

&nbsp;

&nbsp;

# Formal Definition

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
