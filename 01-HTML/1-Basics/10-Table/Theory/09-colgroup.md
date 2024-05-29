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

| Specifications          | Description / Type                                 |
| ----------------------- | -------------------------------------------------- |
| `<colgroup></colgroup>` | used as a container for the column specifications. |
| Tag                     | Container                                          |
| Display / Element       | None                                               |
| Usage                   | HTML Tables                                        |
|                         |                                                    |

&nbsp;

&nbsp;

# col & colgroup

- If you want to style the specific columns of a table, use the `<colgroup>` and `<col>` elements.

- The `<colgroup>` element should be used as a container for the column specifications.

- Each group is specified with a `<col>` element.

- The span attribute specifies how many columns that get the style.

- The style attribute specifies the style to give the columns.

```html
<table>
  <colgroup>
    <col span="2" style="background-color: #D6EEEE" />
  </colgroup>
</table>
```

&nbsp;

&nbsp;

# Legal CSS Properties

There is only a very limited selection of CSS properties that are allowed to be used in the colgroup:

- width
- visibility
- background
- border

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

# Empty Colgroups

- If you want to style columns in the middle of a table, insert a "empty" `<col>` element (with no styles) for the columns before:

```html
<table>
  <colgroup>
    <col span="3" />
    <col span="2" style="background-color: pink" />
  </colgroup>
</table>
```

&nbsp;

&nbsp;

# Hide Columns

- You can hide columns with the `visibility: collapse` property:

```html
<table>
  <colgroup>
    <col span="2" />
    <col span="3" style="visibility: collapse" />
  </colgroup>
</table>
```

&nbsp;

&nbsp;
