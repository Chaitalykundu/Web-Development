To build a vertical navigation bar, you can style the `<a>` elements inside the list,

&nbsp;

## Example

```css
li a {
  display: block;
  width: 60px;
}
```

&nbsp;

### Example explained:

`display: block;` - Displaying the links as block elements makes the whole link area clickable (not just the text), and it allows us to specify the width (and padding, margin, height, etc. if you want)

`width: 60px;` - Block elements take up the full width available by default. We want to specify a 60 pixels width

&nbsp;

You can also set the width of `<ul>`, and remove the width of `<a>`, as they will take up the full width available when displayed as block elements. This will produce the same result as our previous example:

&nbsp;

## Example

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60px;
}

li a {
  display: block;
}
```

&nbsp;
