# Overview

- [Overview](#overview)
- [Introduction](#introduction)
- [Create a flexbox](#create-a-flexbox)
- [The CSS properties used for the flex container](#the-css-properties-used-for-the-flex-container)

&nbsp;

&nbsp;

&nbsp;

# Introduction

An area of a document that is laid out using flexbox is called a **flex container**.

&nbsp;

&nbsp;

# Create a flexbox

To create a flex container, set the area's `display` property to `flex`.

```html
<div class="container">
  <div class="items">Item1</div>
  <div class="items">Item2</div>
  <div class="items">Item3</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #32a852;
}
```

Here the `div` containing the class `container` is flex-container and the div's containing class `items` are `flex-items`

&nbsp;

When we create a flex container, the direct children of that container become **flex items**.

You can explicitly control whether the container itself is displayed inline or in block formatting context using inline flex or inline-flex for inline flex containers or block flex or flex for block level flex containers.

&nbsp;

&nbsp;

# The CSS properties used for the flex container

The CSS properties we use for the flex container are:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

&nbsp;

&nbsp;

# `flex-direction` Property

The `flex-direction` property specifies the **display-direction** of flex items in the flex container.

&nbsp;

## Values of `flex-direction`

The `flex-direction` property can have one of the following values:

| Values              | flex items direction |
| ------------------- | -------------------- |
| row (default-value) | left to right        |
| column              | top to bottom        |
| row-reverse         | right to left        |
| column-reverse      | bottom to top        |
|                     |                      |

&nbsp;

## Syntax

```css
.flex-container {
  display: flex;
  flex-direction: row | column | row-reverse | column-reverse;
}
```

&nbsp;

&nbsp;

# `flex-wrap` Property

The `flex-wrap` property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

&nbsp;

## Values of `flex-direction`

The `flex-wrap` property can have one of the following values:

| Values           | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| nowrap (default) | specifies that the flex items will not wrap                            |
| wrap             | specifies that the flex items will wrap if necessary                   |
| wrap-reverse     | specifies that the flex items will wrap if necessary, in reverse order |
|                  |                                                                        |

&nbsp;

## Syntax

````css
.flex-container {
  display: flex;
  flex-wrap: nowrap | wrap | wrap-reverse;
}

&nbsp;

&nbsp;

# `justify-content` Property

The `justify-content` property is used to **align the flex items** when they do not use all available space on the main-axis (**horizontally**).

&nbsp;

## Values of `justify-content`

The `justify-content` property can have one of the following values:

| Values        | Description                                                |
| ------------- | ---------------------------------------------------------- |
| center        | positions the flex items in the center                     |
| flex-start    | positions the flex items at the beginning of the container |
| flex-end      | positions the flex items at the end of the container       |
| space-between | displays the flex items with space between them            |
| space-around  | displays the flex items with space around them             |
| space-evenly  | displays the flex items with equal space around them       |
|               |                                                            |

&nbsp;

## Syntax

```css
.flex-container {
  display: flex;
  justify-content: center | flex-start | flex-end | space-between | space-around
    | space-evenly;
}
````

&nbsp;

## space-around vs space-evenly

[space-around vs space-evenly](https://www.samanthaming.com/flexbox30/14-space-around-vs-space-evenly/)

&nbsp;

&nbsp;

# `align-items` Property

The `align-items` property is used to **align the flex items** when they do not use all available space on the cross-axis (**vertically**).

- In a **flexbox** container, the flexbox items are aligned on the cross axis, which is vertical by default (opposite of flex-direction).

- In a **grid** container, the grid items are aligned in the block direction. For pages in English, block direction is downward and inline direction is left to right

&nbsp;

## Tip

Use the `align-self` property of each item to override the `align-items` property.

&nbsp;

## Values of `align-items`

The `align-items` property can have one of the following values:

| Values     | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| normal     | This is default                                                            |
| center     | positions the flex items in the middle of the container                    |
| flex-start | positions the flex items at the top of the container                       |
| flex-end   | positions the flex items at the bottom of the container                    |
| stretch    | stretches the flex items to fill the container (this is equal to "normal") |
| baseline   | positions the flex items at the baseline of the container                  |
|            |                                                                            |

&nbsp;

## Syntax

```css
.flex-container {
  display: flex;
  align-items: center | flex-start | flex-end | stretch | baseline | normal;
}
```

&nbsp;

&nbsp;

# `align-content` property

The `align-content` property is used to align the flex lines.

It is used rarely

The `align-content` property is similar to align-items, but instead of aligning flex items, it aligns the flex lines.

## Values of `align-content`

The `align-content` property can have one of the following values:

| Values        | Description |
| ------------- | ----------- |
| center        |
| stretch       |
| flex-start    |
| flex-end      |
| space-around  |
| space-between |
| space-evenly  |
|               |             |

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
