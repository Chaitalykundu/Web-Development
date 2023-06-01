An HTML link is displayed in a different color depending on whether it has been visited, is unvisited, or is active.

# HTML Link Colors

&nbsp;

By default, links will appear as follows in all browsers:

- An **unvisited** link is **_underlined_** and **_blue_**
- A **visited** link is **_underlined_** and **_purple_**
- An **active** link is **_underlined_** and **_red_**

You can change the link state colors, by using CSS:

&nbsp;

&nbsp;

## Unvisited link

```css
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}
```

&nbsp;

## Visited link

```css
a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}
```

&nbsp;

## Hovered link

```css
a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}
```

&nbsp;

## Active link

```css
a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
```

&nbsp;

&nbsp;

# Link Buttons

A link can also be styled as a button, by using CSS:

```css
a:link,
a:visited {
  background-color: #f44336;
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background-color: red;
}
```
