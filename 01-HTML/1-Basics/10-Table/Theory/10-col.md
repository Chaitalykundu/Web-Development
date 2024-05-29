# Overview

- colgroup
- col
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

# `col` Summary

| Specifications    | Description / Type                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| `<col></col>`     | used to specify common column properties for each column within `<colgroup>` element in an HTML table. |
| Tag               | Empty tag                                                                                              |
| Display / Element | None                                                                                                   |
| Usage             | HTML Tables                                                                                            |
|                   |                                                                                                        |

&nbsp;

&nbsp;

# `<col>` tag

- HTML `<col>` tag is used to specify common column properties for each column within `<colgroup>` element in an HTML table.

- The `<col>` tag is useful when it requires to apply common style rules for each column cell rather than applying individually.

&nbsp;

&nbsp;

# Example

```html
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE" />
  </colgroup>
</table>
```

&nbsp;

&nbsp;

# Multiple Col Elements

- If you want to style more columns with different styles, use more `<col>` elements inside the `<colgroup>`:

```html
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE" />
    <col span="3" style="background-color: pink" />
  </colgroup>
</table>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
