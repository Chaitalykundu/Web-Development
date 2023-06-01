There are **two** ways to create a horizontal navigation bar. Using -

1. inline
2. floating list items.

&nbsp;

&nbsp;

# Inline List Items

One way to build a horizontal navigation bar is to **specify the `<li>` elements as inline**

&nbsp;

## Example

```css
li {
  display: inline;
}
```

### Example explained:

`display: inline;` - By default, `<li>` elements are block elements. Here, we remove the line breaks before and after each list item, to display them on one line

&nbsp;

&nbsp;

# Floating List Items

Another way of creating a horizontal navigation bar is to float the `<li>` elements, and specify a layout for the navigation links:

&nbsp;

## Example

```css
li {
  float: left;
}

a {
  display: block;
  padding: 8px;
  background-color: #dddddd;
}
```

&nbsp;

### Example explained:

`float: left;` - Use float to get block elements to float next to each other

`display: block;` - Allows us to specify padding (and height, width, margins, etc. if you want)

`padding: 8px;` - Specify some padding between each `<a>` element, to make them look good

`background-color: #dddddd;` - Add a gray background-color to each `<a>` element

&nbsp;

&nbsp;

# Tip:

Add the background-color to `<ul>` instead of each `<a>` element if you want a full-width background color:

&nbsp;

&nbsp;

# Fixed Navigation Bar

## Fixed Top

```css
ul {
  position: fixed;
  top: 0;
  width: 100%;
}
```

&nbsp;

## Fixed Bottom

```css
ul {
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

&nbsp;

## Note

Fixed position might not work properly on mobile devices.

&nbsp;

&nbsp;

# Sticky Navbar

Add `position: sticky;` to `<ul>` to create a sticky navbar.

&nbsp;

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

&nbsp;

## Example

```css
ul {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
```

&nbsp;

&nbsp;
