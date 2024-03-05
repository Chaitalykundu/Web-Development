# Clean default CSS

```css
margin: 0;
padding: 0;
box-sizing: border-box;
```

&nbsp;

&nbsp;

# To fit a photo in middle

```css
width: 80%;
margin-left: auto;
margin-right: auto;
max-width: 500px;
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

# The following example shows a white text with black shadow:

h1 {
color: white;
text-shadow: 2px 2px 4px #000000;
}

&nbsp;

&nbsp;

# We can also use the `box-shadow` property to create a any paper-like cards:

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
