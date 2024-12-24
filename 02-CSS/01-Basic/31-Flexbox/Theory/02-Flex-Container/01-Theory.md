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
