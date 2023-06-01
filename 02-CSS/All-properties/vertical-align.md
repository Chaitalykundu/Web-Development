| Property       | Description                 | Default value |
| -------------- | --------------------------- | ------------- |
| vertical-align | sets the vertical alignment | baseline      |

&nbsp;

&nbsp;

# Definition & usage

The `vertical-align` property sets the vertical alignment of an element.

&nbsp;

# Note

The `vertical-align` property can be used in `two` contexts:

To vertically align an `inline-level` element's box inside its containing line box.

For example, it could be used to vertically position an image in a line of text.

&nbsp;

To vertically align the content of a cell in a table.

&nbsp;

&nbsp;

# Syntax

```css
vertical-align: baseline | length | percentage |sub |super |top |text-top |
  middle | bottom |text-bottom | initial| inherit;
```

&nbsp;

&nbsp;

# Example

Vertical align an image:

```css
img.a {
  vertical-align: baseline;
}

img.b {
  vertical-align: text-top;
}
```

&nbsp;

&nbsp;

|                    |                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------- |
| Inherited:         | yes                                                                                          |
| Animation type     | a length                                                                                     |
| Applies to         | inline-level and table-cell elements. It also applies to `::first-letter` and `::first-line` |
| JavaScript syntax: | object.style.verticalAlign="top"                                                             |
|                    |                                                                                              |

&nbsp;

&nbsp;

| Property | Values                                                                                                   |
| -------- | -------------------------------------------------------------------------------------------------------- |
| baseline | The element is aligned with the baseline of the parent. This is default                                  |
| length   | Raises or lower an element by the specified length. Negative values are allowed. Read about length units |
| %        | Raises or lower an element by a percent of the "line-height" property. Negative values are allowed       |
| sub      | The element is aligned with the subscript baseline of the parent                                         |
| super    | The element is aligned with the superscript baseline of the parent                                       |
| top      | The element is aligned with the top of the tallest element on the line                                   |
| text-top | The element is aligned with the top of the parent element's font                                         |
| middle   | The element is placed in the middle of the parent element                                                |
| bottom   | The element is aligned with the lowest element on the line                                               |
| text     | -bottom The element is aligned with the bottom of the parent element's font                              |
| initial  | Sets this property to its default value. Read about initial                                              |
| inherit  | Inherits this property from its parent element.                                                          |
