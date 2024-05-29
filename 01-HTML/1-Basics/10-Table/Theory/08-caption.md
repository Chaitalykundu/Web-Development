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

| Specifications        | Description / Type                              |
| --------------------- | ----------------------------------------------- |
| `<caption></caption>` | used to add a caption or title of a HTML table. |
| Tag                   | Container                                       |
| Display / Element     | Inline                                          |
| Usage                 | Textual                                         |
|                       |                                                 |

&nbsp;

&nbsp;

# `<caption></caption>` tag

- It defines a table caption

- HTML `<caption>` tag is used to add a caption or title of a HTML table.

- It should be used inside the `<table>` element and just after the `<table>`start tag.

- A table may contain only one `<caption>`element.

&nbsp;

&nbsp;

## Note

- By default, a table caption will be center-aligned above a table. However, the CSS properties `text-align` and `caption-side` can be used to align and place the caption.

&nbsp;

&nbsp;

# Syntax

```html
<table>
  <caption></caption>
  <thead></thead>
  <tbody></tbody>
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
caption {
  display: table-caption;
  text-align: center;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Tag               | Container |
| Display / Element | Inline    |
| Usage             | Textual   |
|                   |           |

&nbsp;

&nbsp;

# Global attribute

> The `<caption>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<caption>` tag supports the Event attributes in HTML.

&nbsp;

&nbsp;

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
