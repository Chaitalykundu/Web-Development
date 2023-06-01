# Horizontal Alignment

The `text-align` property sets the horizontal alignment (like **_left, right, or center_**) of the content in `<th>` or `<td>`

&nbsp;

By default, the content of `<th>` elements are **center-aligned** and the content of `<td>` elements are **left-aligned**.

&nbsp;

To center-align the content of <`td>` elements as well, use `text-align: center`

&nbsp;

## Example

```css
td {
  text-align: center;
}
```

&nbsp;

To left-align the content, force the alignment of `<th>` elements to be **left-aligned**, with the `text-align: left` property:

&nbsp;

## Example

```css
th {
  text-align: left;
}
```

&nbsp;

&nbsp;

# Vertical Alignment

The `vertical-align` property sets the vertical alignment (like **_top, bottom, or middle_**) of the content in `<th>` or `<td>`.

By default, the vertical alignment of the content in a table is middle (for both `<th>` and `<td>` elements).

&nbsp;

The following example sets the vertical text alignment to bottom for `<td>` elements:

```css
td {
  height: 50px;
  vertical-align: bottom;
}
```
