# Overview

- Center Align Text
- Center an Image
- Left and Right Align - Using position

- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- To just **center the text**  inside an element, use `text-align: center;`

- To **horizontally center** a _block element_ (like `<div>`), use `margin: auto;`. and `width` have to set (not 100%)

- To center an image, set **left and right margin to auto** and make it into a **_block element_**

&nbsp;

&nbsp;

&nbsp;

# Center Align Text

To just **center the text**  inside an element, use `text-align: center;`

&nbsp;

## Example

```css
.center {
  text-align: center;
}
```

&nbsp;

&nbsp;

# Center Align Elements

To **horizontally center** a _block element_ (like `<div>`), use `margin: auto;`

**Note : width should be mentioned**

&nbsp;

## Example

```css
.center {
  margin: auto;
  width: 50%;
}
```

&nbsp;

## Note

Center aligning has no effect if the `width` property is not set or set to 100%.

&nbsp;

&nbsp;

# Center an Image

To center an image, set **left and right margin to auto** and make it into a **_block element_**

&nbsp;

# Example

```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

&nbsp;

&nbsp;

# Left and Right Align - Using position

One method for aligning elements is to use `position: absolute;`

## Example

```css
.right {
  position: absolute;
  right: 0px;
}
```

&nbsp;

## Note

Absolute positioned elements are removed from the normal flow, and can overlap elements.

&nbsp;

&nbsp;

# Left and Right Align - Using float

Another method for aligning elements is to use the float property:

&nbsp;

## Example

```css
.right {
  float: right;
}
```

&nbsp;

&nbsp;

# The clearfix Hack

## Note:

If an element is taller than the element containing it, and it is floated, it will overflow outside of its container. You can use the "**_clearfix hack_**" to fix this.

&nbsp;

Then we can add the clearfix hack to the containing element to fix this problem:

&nbsp;

## Example

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

&nbsp;

&nbsp;

# Center Vertically - Using padding

There are many ways to center an element vertically in CSS.

A simple solution is to use top and bottom padding:

## Example

```css
.center {
  padding: 70px 0;
}
```

&nbsp;

To center both vertically and horizontally, use padding and text-align: center:

&nbsp;

## Example

```css
.center {
  padding: 70px 0;
  text-align: center;
}
```

&nbsp;

&nbsp;

# Center Vertically - Using line-height

Another trick is to use the `line-height` property with a value that is **equal to the height** property:

&nbsp;

## Example

```css
.center {
  line-height: 200px;
  height: 200px;
}

/* If the text has multiple lines, add the following: */
.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}
```

&nbsp;

&nbsp;

# Center Vertically - Using position & transform

If padding and line-height are not options, another solution is to use positioning and the transform property:

&nbsp;

## Example

```css
.center {
  height: 200px;
  position: relative;
  border: 3px solid green;
}

.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

&nbsp;

&nbsp;

# Center Vertically - Using Flexbox

You can also use flexbox to center things. Just note that flexbox is not supported in IE10 and earlier versions:

&nbsp;

## Example

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
