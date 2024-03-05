| Property   | Description                                | Default value                                           |
| ---------- | ------------------------------------------ | ------------------------------------------------------- |
| text-align | Specifies the horizontal alignment of text | left if direction is ltr, and right if direction is rtl |

&nbsp;

&nbsp;

# Definition & usage

The `text-align` property is used to set the **horizontal alignment** of a text.

A text can be **left or right aligned, centered, or justified**.

&nbsp;

# Note

When the `text-align` property is set to "`justify`", each line is stretched so that every line has equal width, and the left and right margins are straight
&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-align: start | end | left | right |center| justify | justify-all |
    match-parent | initial | inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
h1 {
  text-align: center;
}

p.date {
  text-align: right;
}

p.main {
  text-align: justify;
}
```

&nbsp;

&nbsp;

|                    |                                |
| ------------------ | ------------------------------ |
| Inherited:         | yes                            |
| Animation type     | discrete                       |
| Applies to         | block containers               |
| JavaScript syntax: | object.style.textAlign="right" |
|                    |                                |

&nbsp;

&nbsp;

# Property values

| Property     | Values                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Value        | Description                                                                                                                                                  |
| start        | The same as left if direction is left-to-right and right if direction is right-to-left.                                                                      |
| end          | The same as right if direction is left-to-right and left if direction is right-to-left.                                                                      |
| left         | Aligns the text to the left                                                                                                                                  |
| right        | Aligns the text to the right                                                                                                                                 |
| center       | Centers the text                                                                                                                                             |
| justify      | Stretches the lines so that each line has equal width (like in newspapers and magazines)                                                                     |
| justify-all  | Same as justify, but also forces the last line to be justified.                                                                                              |
| match-parent | Similar to inherit, but the values start and end are calculated according to the parent's direction and are replaced by the appropriate left or right value. |
| initial      | Sets this property to its default value.                                                                                                                     |
| inherit      | Inherits this property from its parent element.                                                                                                              |
