| Function | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| calc()   | Allows you to perform calculations to determine CSS property values |

&nbsp;

&nbsp;

# Definition & usage

The `calc()` function performs a calculation to be used as the property value.

&nbsp;

# Note

It can be used with `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` values

&nbsp;

The benefit of `calc()` is in allowing you to avoid either hard-coding a range of magic numbers or adding a JavaScript solution to calculate the value needed to apply it as an inline style.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  property: calc(expression);
}
```

&nbsp;

&nbsp;

# Example

```css
.content {
  height: calc(100vh - 60px);
}
```

&nbsp;

&nbsp;

# Property values

| Value      | Description                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------ |
| expression | Required. A mathematical expression. The result will be used as the value. The following operators can be used: + - \* / |
