[w3school how to](https://www.w3schools.com/howto/howto_css_image_text_blocks.asp)

&nbsp;

&nbsp;

# Tips

- If we want to change any css of checked radio buttons, checkboxes and options we should use `:checked` selector

- `background-origin` property has no effect if `background-attachment` is "**fixed**".

&nbsp;

&nbsp;

&nbsp;

&nbsp;

1. Clean default CSS
2. To fit a photo in middle
3. Center a background image
4. Center an image or text
5. Center any text

&nbsp;

&nbsp;

# Clean default CSS

```css
body {
  margin: 0;
  padding: 0;
}
```

&nbsp;

&nbsp;

# To fit a photo in middle

```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
```

Note that it cannot be centered if the width is set to 100% (full-width).

&nbsp;

&nbsp;

# Center a background image

```css
body {
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

&nbsp;

&nbsp;

# Center an image

```css
img {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
}
```

&nbsp;

&nbsp;

# Center any text

```css
.paragraph {
  .paragraph {
    width: 200px;
    height: 200px;
    border: 1px solid black;

    position: absolute;
    top: 50vh;
    left: 50vw;

    transform: translate(-50%, -50%);
    overflow: auto;
  }
}
```

&nbsp;

&nbsp;

# Create vertical navbar

```css
.nav-vertically ul {
  list-style-type: none;
  display: block;
}

.nav-vertically ul li {
  padding: 10px;
}
```

&nbsp;

&nbsp;

# Create a horizontal navigation bar in left side

```css
nav ul li {
  display: inline-block;
  /* 
  or
  display:inline-flex;
   */
  padding: 50px;
}
```

<!-- alternative -->

```css
li {
  float: left;
  display: block;
  padding: 50px;
}
```

# Create a horizontal navigation bar in right side

```css
nav ul {
  list-style-type: none;
  display: flex;
  justify-content: end;
}

li {
  padding: 50px;
}
```

&nbsp;

&nbsp;

# Reference : Building-a-cafe-menu project

For `li` item we need to use float property. If p is used instead of li then `display: inline-block;` can be used in css.

&nbsp;

&nbsp;

# The following example shows a white text with black shadow

h1 {
color: white;
text-shadow: 2px 2px 4px #000000;
}

&nbsp;

&nbsp;

# We can also use the `box-shadow` property to create a any paper-like cards

```css
div.card {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
```

&nbsp;

&nbsp;

# If we want to add z-index, we have to use position:relative

```css
.box {
  position: relative;
  z-index: 1;
}
```

&nbsp;

&nbsp;

# If we want image in left and all other contents in right we have to use `float:left` in image

```css
img {
  float: left;
}
```

&nbsp;

&nbsp;

# If we want that there should not be anything in left or right or both side, then we have to use `clear:left`or `clear:right` or`clear:both`

```css
clear: left;
/* or */
clear: right;
/* or */
clear: both;
```

&nbsp;

&nbsp;

# Create a footer

```css
height: 60px;
width: 100%;
position: fixed;
background-color: rgb(230, 193, 72);
bottom: 0px;
```

&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
