# Overview

- Introduction
- Syntax
- Example
- Default CSS Settings
- Specifications
- Tag-specific attribute
- Global attribute
- Event attribute

&nbsp;

&nbsp;

&nbsp;

# Summary

| Specifications    | Description / Type                              |
| ----------------- | ----------------------------------------------- |
| `<tfoot></tfoot>` | used to **group the footer content** in a table |
| Tag               | Container                                       |
| Display / Element | None                                            |
| Usage             | HTML Tables                                     |
|                   |                                                 |

&nbsp;

&nbsp;

# `<tfoot>..</tfoot>` tag

- This tag is used to **group the footer content** in a table

- This tag is used to define the set of rows which represents footer of a HTML table.

- The `<tfoot>` tag must contain one or more `<tr>` element.

&nbsp;

&nbsp;

## Note

- The `<tfoot>` element must have one or more `<tr>` tags inside.

- The `<tfoot>` tag must be used in the following context:
  - As a child of a `<table>` element
  - after any `<caption>`, `<colgroup>`, `<thead>`, and `<tbody>` elements.

&nbsp;

&nbsp;

# Syntax

```html
<table>
  <caption></caption>
  <thead>
    <tr>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tfoot>
</table>
```

&nbsp;

&nbsp;

# Example

```html
<table>
  <caption>
    Table
  </caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
tfoot {
  display: table-footer-group;
  vertical-align: middle;
  border-color: inherit;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |             |
| ----------------- | ----------- |
| Tag               | Container   |
| Display / Element | None        |
| Usage             | HTML Tables |
|                   |             |

&nbsp;

&nbsp;

# Global attribute

> The `<tfoot>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<tfoot>` tag supports the Event attributes in HTML.

&nbsp;

&nbsp;

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
