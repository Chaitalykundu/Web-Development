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

| Specifications    | Description / Type                        |
| ----------------- | ----------------------------------------- |
| `<tbody></tbody>` | used to group the body content in a table |
| Tag               | Container                                 |
| Display / Element | Inline                                    |
| Usage             | Table body                                |
|                   |                                           |

&nbsp;

&nbsp;

# `<tbody>..</tbody>` tag

- tbody stands for **table body**.

- This tag is used to group the body content in a table.

- Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.

&nbsp;

&nbsp;

## Note

- The `<tbody>` element must have one or more `<tr>` tags inside.

- The `<tbody>` tag must be used in the following context: As a child of a `<table>` element, after any `<caption>`, `<colgroup>`, and `<thead>` elements.

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
  <tfoot></tfoot>
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
  <tfoot></tfoot>
</table>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |            |
| ----------------- | ---------- |
| Tag               | Container  |
| Display / Element | Inline     |
| Usage             | Table body |
|                   |            |

&nbsp;

&nbsp;

# Tag-specific attribute

> HTML `<tbody>` tag does not contain any specific attribute.

&nbsp;

# Global attribute

> The `<tbody>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<tbody>` tag supports the Event attributes in HTML.

&nbsp;

&nbsp;

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
