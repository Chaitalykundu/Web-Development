# Overview

- Introduction
- Activities in table
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

| Tag               | Description                                          |
| ----------------- | ---------------------------------------------------- |
| table             | used to display data in tabular form (row \* column) |
| Tag               | Container                                            |
| Display / Element | block                                                |
| Usage             | Table header                                         |
|                   |                                                      |

&nbsp;

&nbsp;

# `<table>..</table>` tag

- HTML table tag is used to display data in tabular form (row \* column).

- We can create a table to display data in tabular form, using `<table>` element, with the help of `<tr>` , `<td>`, and `<th>` elements.

- A table allows you to quickly and easily look up values that indicate some kind of connection between different types of data.

- HTML tables are used to manage the layout of the page e.g. header section, navigation bar, body content, footer section etc. But it is recommended to use div tag over table to manage the layout of the page .

- An HTML table consists of one `<table>` element and one or more `<tr>`, `<th>`, and `<td>` elements.

&nbsp;

&nbsp;

# Activities in table

1. Change the order
2. Merge rows
3. Merge columns
4. Change color of nth child

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
  <tbody></tbody>
  <tfoot></tfoot>
</table>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |              |
| ----------------- | ------------ |
| Tag               | Container    |
| Display / Element | block        |
| Usage             | Table header |
|                   |              |

&nbsp;

# Tag-specific attribute

> HTML `<table>` tag does not contain any specific attribute.

&nbsp;

# Global attribute

> The `<table>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<table>` tag supports the Event attributes in HTML.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
