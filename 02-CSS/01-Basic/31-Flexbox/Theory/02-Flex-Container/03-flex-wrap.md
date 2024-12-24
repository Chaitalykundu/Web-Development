
# `flex-wrap` Property

The `flex-wrap` property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

When we use `flex-wrap : wrap`, `height : auto` is also injected in many of the cases.

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

```css
.flex-container {
  display: flex;
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

&nbsp;

&nbsp;

&nbsp;
