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
