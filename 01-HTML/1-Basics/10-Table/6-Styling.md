# HTML Table - Zebra Stripes

- If you add a background color on every other table row, you will get a nice zebra stripes effect.

* To style every other table row element, use the :nth-child(even) selector like this:

```css
tr:nth-child(even) {
  background-color: #d6eeee;
}
```

- Note: If you use (odd) instead of (even), the styling will occur on row 1,3,5 etc. instead of 2,4,6 etc.

&nbsp;

&nbsp;

# HTML Table - Vertical Zebra Stripes

- To make vertical zebra stripes, style every other column, instead of every other row.

```css
Set the :nth-child(even) for table data elements like this:


td:nth-child(even),
th:nth-child(even) {
  background-color: #d6eeee;
}
```

&nbsp;

- Note: Put the `:nth-child()` selector on both `th` and `td` elements if you want to have the styling on both headers and regular table cells.

&nbsp;

&nbsp;

# Combine Vertical and Horizontal Zebra Stripes

- If you use a transparent color you will get an overlapping effect.

* Use an `rgba()` color to specify the transparency of the color:

```css
tr:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}

th:nth-child(even),
td:nth-child(even) {
  background-color: rgba(150, 212, 212, 0.4);
}
```

&nbsp;

&nbsp;

# Horizontal Dividers

- If you specify borders only at the bottom of each table row, you will have a table with horizontal dividers.

* Add the `border-bottom` property to all `tr` elements to get horizontal dividers:

```css
tr {
  border-bottom: 1px solid #ddd;
}
```

&nbsp;

&nbsp;

# Hoverable Table

- Use the `:hover` selector on `tr` to highlight table rows on mouse over:

```css
tr:hover {
  background-color: #d6eeee;
}
```

&nbsp;
