- The CSS box-sizing property allows us to include the padding and border in an element's total width and height

- By default, the width and height of an element is calculated like this:

```md
width + padding + border = actual width of an element
height + padding + border = actual height of an element
```

This means: When you set the width/height of an element, the element often appears bigger than you have set. To avoid this issue we use

```css
box-sizing: border-box;
```
