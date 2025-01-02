# Overview

- [Overview](#overview)
- [`justify-content` Property](#justify-content-property)
  - [Values of `justify-content`](#values-of-justify-content)
  - [Syntax](#syntax)
  - [space-around vs space-evenly](#space-around-vs-space-evenly)

&nbsp;

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
```

&nbsp;

## space-around vs space-evenly

[space-around vs space-evenly](https://www.samanthaming.com/flexbox30/14-space-around-vs-space-evenly/)

&nbsp;

&nbsp;
