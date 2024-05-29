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

| Specifications         | Description / Type                          |
| ---------------------- | ------------------------------------------- |
| thead                  | used to group the header content in a table |
| Tag Type               | Container                                   |
| Display / Element Type | Inline                                      |
| Usage                  | Table header                                |
|                        |                                             |

&nbsp;

&nbsp;

# `<thead>..</thead>` tag

- thead stands for **table header**.

- This tag is used to group the header content in a table

- The `<thead>` tag should contain at least one row `<tr>` element inside it.

&nbsp;

&nbsp;

## Note

- The `<thead>` tag must be used in the following context:

  - As a child of a `<table>` element,

  - after any `<caption>` and `<colgroup>` elements, and
  - before any `<tbody>`, `<tfoot>`, and `<tr>` elements.

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
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |              |
| ----------------- | ------------ |
| Tag               | Container    |
| Display / Element | Inline       |
| Usage             | Table header |
|                   |              |

&nbsp;

# Tag-specific attribute

> HTML `<thead>` tag does not contain any specific attribute.

&nbsp;

# Global attribute

> The `<thead>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<thead>` tag supports the Event attributes in HTML.

&nbsp;

&nbsp;

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
