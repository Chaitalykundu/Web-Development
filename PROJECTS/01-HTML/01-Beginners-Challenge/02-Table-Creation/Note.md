- To collapse border into a single border, we use `border-collapse` property. But If you use `border-collapse: collapse`, the corners won’t appear rounded.

- `border-collapse: separate` is essential for rounded corners to work on the table

- `border-spacing: 0` Removes extra spacing between the cells and the table's outer border.

- `overflow: hidden` Ensures that the rounded corners clip any overflowing content.

- `tr:last-child td` - this selector defines the last datas of last row
