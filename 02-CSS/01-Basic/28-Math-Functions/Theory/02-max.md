| Function | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| max()    | Uses the largest value, from a comma-separated list of values, as the property value |

&nbsp;

&nbsp;

# Definition & usage

The `max()` function uses the largest value, from a comma-separated list of values, as the property value.

&nbsp;

# Note

It can be used with `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` values

&nbsp;

&nbsp;

# Syntax

```css
selector {
  property: max(value1, value2, ...);
}
```

&nbsp;

&nbsp;

# Example

```css
#div1 {
  background-color: yellow;
  height: 100px;
  width: max(50%, 300px, 9em);
}
```

&nbsp;

&nbsp;

# Property values

| Value               | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| value1, value2, ... | Required. A list of comma-separated values - where the largest value is chosen |
