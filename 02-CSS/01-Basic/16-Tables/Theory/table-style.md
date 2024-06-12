# Table Padding

To control the space between the border and the content in a table, use the **_padding_** property on `<td>` and `<th>` elements:

&nbsp;

## Example

```css
th,
td {
  padding: 15px;
  text-align: left;
}
```

&nbsp;

&nbsp;

# Horizontal Dividers

Add the `border-bottom` property to `<th>` and `<td>` for horizontal dividers:

&nbsp;

# Example

```css
th,
td {
  border-bottom: 1px solid #ddd;
}
```

&nbsp;

&nbsp;

# Hoverable Table

Use the `:hover` selector on `<tr>` to highlight table rows on mouse over:

&nbsp;

## Example

```css
tr:hover {
  background-color: coral;
}
```

&nbsp;

&nbsp;

# Striped Tables

For **zebra-striped** tables, use the `nth-child()` selector and add a `background-color` to all even (or odd) table rows

&nbsp;

## Example

```css
tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

&nbsp;

&nbsp;

# Table Color

The example below specifies the background color and text color of `<th>` elements:

```css
th {
  background-color: #04aa6d;
  color: white;
}
```

&nbsp;
&nbsp;
