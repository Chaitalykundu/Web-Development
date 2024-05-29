# `<table></table>` tag

- HTML table tag is used to display data in tabular form (row \* column).

- We can create a table to display data in tabular form, using `<table>` element, with the help of `<tr>` , `<td>`, and `<th>` elements.

- A table allows you to quickly and easily look up values that indicate some kind of connection between different types of data.

- HTML tables are used to manage the layout of the page e.g. header section, navigation bar, body content, footer section etc. But it is recommended to use div tag over table to manage the layout of the page .

&nbsp;

&nbsp;

&nbsp;

# `<thead></thead>` tag

- thead stands for table header.

- This tag is used to group the header content in a table

- The `<thead>` tag should contain at least one row `<tr>` element inside it.

&nbsp;

# Specifications

|                   |              |
| ----------------- | ------------ |
| Display / Element | Inline       |
| Tag               | Container    |
| Usage             | Table header |
|                   |              |

&nbsp;

&nbsp;

&nbsp;

# `<th></th>` tag

- tr stands for header cell.

- It defines a header cell in a table.

- By default, the text in `<th>` elements are bold and centered, but you can change that with CSS.

&nbsp;

# Specifications

|                   |             |
| ----------------- | ----------- |
| Display / Element | None        |
| Tag               | Container   |
| Usage             | HTML Tables |
|                   |             |

&nbsp;

&nbsp;

&nbsp;

# `<tbody></tbody>` tag

- tbody stands for table body.

- This tag is used to group the body content in a table.

&nbsp;

# Specifications

|                   |            |
| ----------------- | ---------- |
| Display / Element | Inline     |
| Tag               | Container  |
| Usage             | Table body |
|                   |            |

&nbsp;

&nbsp;

&nbsp;

# Table Rows (`<tr></tr>` tag)

- tr stands for table row.

- It defines a row in a table

- The `<tr>` tag can consist of one or more `<th>` head cells and `<td>` data cells to define a single row of HTML table.

&nbsp;

# Specifications

|                   |               |
| ----------------- | ------------- |
| Display / Element | Inline        |
| Tag               | Container     |
| Usage             | Table content |
|                   |               |

&nbsp;

&nbsp;

&nbsp;

# Table Cells (`<td></td>` tag)

- td stands for table data.

- It is used to specify the cells of an HTML table which contain data of the table.

- A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.

&nbsp;

# Specifications

|                   |               |
| ----------------- | ------------- |
| Display / Element | Inline        |
| Tag               | Container     |
| Usage             | Table content |
|                   |               |

&nbsp;

&nbsp;

&nbsp;

# `<tfoot></tfoot>` tag

- This tag is used to group the footer content in a table

- This tag is used to define the set of rows which represents footer of a HTML table.

- The `<tfoot>` tag must contain one or more `<tr>` element.

&nbsp;

# Specifications

|                   |             |
| ----------------- | ----------- |
| Display / Element | None        |
| Tag               | Container   |
| Usage             | HTML Tables |
|                   |             |

&nbsp;

&nbsp;

&nbsp;

# `<caption></caption>` tag

- It defines a table caption

- HTML `<caption>` tag is used to add a caption or title of a HTML table.
- It should be used inside the `<table>` element and just after the `<table>`start tag.
- A table may contain only one `<caption>`element.

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Display / Element | Inline    |
| Tag               | Container |
| Usage             | Textual   |
|                   |           |

&nbsp;

&nbsp;

&nbsp;

# `<colgroup></colgroup>` tag

- It specifies a group of one or more columns in a table for formatting.

- It is used as a parent container of one or more `<col>` elements to apply different properties in an HTML table.

&nbsp;

# Specifications

|                   |             |
| ----------------- | ----------- |
| Display / Element | None        |
| Tag               | Container   |
| Usage             | HTML Tables |
|                   |             |

&nbsp;

&nbsp;

&nbsp;

# `<col>` tag

- HTML `<col>` tag is used to specify common column properties for each column within `<colgroup>` element in an HTML table.

- The `<col>` tag is useful when it requires to apply common style rules for each column cell rather than applying individually.

&nbsp;

# Specifications

|                   |             |
| ----------------- | ----------- |
| Display / Element | None        |
| Tag               | Empty tag   |
| Usage             | HTML Tables |
|                   |             |

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Fixed column width using `<td>` tag in a table

In an HTML table, the dimensions of the rows and columns in a table are automatically adjusted by the browser so that the contents fit in the row. However, there can be a situation where the width of the columns needs to be fixed or equal-sized. So there are various techniques to fix the width of the column.

**`<td>` tag width attribute:** The `<td>` tag width attribute is used to fix the width of a particular column. With this, we can assign a numeric value to this attribute or in terms of percentage.

## Fixed column width using `<col>` tag in a table

`<col>` tag: The `<col>` tag in a table is used to fix the width of a particular column. With this, we can assign a numeric value to this attribute or in terms of percentage.
