# Overview

- [Overview](#overview)
- [Flexbox](#flexbox)
- [Note](#note)
- [Features of Flexbox:](#features-of-flexbox)
- [Common use cases of Flexbox](#common-use-cases-of-flexbox)
- [Before Flex Box](#before-flex-box)
- [Flexbox Components / Properties](#flexbox-components--properties)
- [Axes of flexbox](#axes-of-flexbox)
  - [Main Axis:](#main-axis)
  - [Cross Axis:](#cross-axis)

&nbsp;

&nbsp;

[Flexbox cheatsheet](https://flexbox.malven.co/)

&nbsp;

# Flexbox

- Flexbox is short form of **Flexible Box Layout module**.

- Flexbox is a CSS layout model, designed to help create more efficient and predictable layouts by distributing space within a container and aligning items in a flexible manner even when their size is unknown and/or dynamic (thus the word “flex”).

- Flexbox is a layout method for arranging items in rows or columns.

- Flexbox makes it easier to design a flexible responsive layout structure, without using float or positioning.

- It is a one-dimensional layout model.

- The default behaviour of flexbox is **left to right**

&nbsp;

&nbsp;

# Note

Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.

&nbsp;

&nbsp;

# Features of Flexbox

- High flexibility
- Arrangement & alignment of items
- Proper spacing
- Order & sequencing of items
- Bootstrap 4 is built on top of the flex layout

&nbsp;

&nbsp;

# Common use cases of Flexbox

- Creating responsive navigation bars

- Centering elements vertically and horizontally

- Building complex layouts with flexible proportions

- Aligning elements within a container

&nbsp;

&nbsp;

# Before Flex Box

Before the Flexible Box Layout module, there were four layout modes:

- **Block**- for sections in a webpage
- **Inline**- for text
- **Table**- for two-dimensional table data
- **Positioned**- for explicit position of an element

CSS flexbox is supported in all modern browsers.

&nbsp;

&nbsp;

# Flexbox Components / Properties

A flexbox always consists of:

- a **<u>Flex Container</u>** - the parent (container) `<div>` element
- **<u>Flex Items</u>** - the items inside the container `<div>`

&nbsp;

&nbsp;

# Axes of flexbox

Flexbox operates on two axes:

- **<u>Main Axis</u>**: Runs from left to right by default.

- **<u>Cross Axis</u>**: Perpendicular to the main axis, runs from top to bottom

The `main axis` is defined by the `flex-direction` property, and the `cross axis` runs perpendicular to it.

&nbsp;

## Main Axis

- **Main Start**: The start of the main axis.
- **Main Size**: The length between Main Start and Main End.
- **Main End**: The endpoint of the main axis.

&nbsp;

## Cross Axis

The cross axis will be perpendicular to the main axis.

- **Cross Start**: The start of the cross axis.
- **Cross Size**: The length between Cross Start and Cross End.
- **Cross End**: The endpoint of the cross axis.

&nbsp;

&nbsp;
