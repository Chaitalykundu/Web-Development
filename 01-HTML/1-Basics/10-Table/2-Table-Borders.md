# How To Add a Border

- To add a border, use the CSS **border** property on table, th, and td elements:

```css
table,
th,
td {
  border: 1px solid black;
}
```

&nbsp;

# Collapsed Table Borders

- To avoid having double borders set the CSS **border-collapse** property to **collapse**.

```css
table,
th,
td {
  : 1px solid black;
  border-collapse: collapse;
}
```

&nbsp;

# Round Table Borders

- With the **border-radius** property, the borders get rounded corners.

```css
table,
th,
td {
  border-radius: 10px;
}
```

- The **border-radius** property does not apply to table elements when **border-collapse is collapse**.

&nbsp;

# Border Color

- With the **border-color** property, you can set the color of the border.

```css
th,
td {
  border-color: #96d4d4;
}
```

&nbsp;

# Dotted Table Borders

The following values are allowed:

- dotted
- dashed
- solid
- double
- groove
- ridge
- inset
- outset
- none
- hidden

&nbsp;

&nbsp;
&nbsp;
&nbsp;
