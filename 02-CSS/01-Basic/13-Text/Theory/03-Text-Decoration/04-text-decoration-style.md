| Property              | Description                                                      | Default value |
| --------------------- | ---------------------------------------------------------------- | ------------- |
| text-decoration-style | Specifies the style of the text decoration (solid, dotted, etc.) | solid         |

&nbsp;

&nbsp;

# Definition & usage

The `text-decoration-style` property sets the style of the text decoration (like solid, wavy, dotted, dashed, double).

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-decoration-style: solid|double|dotted|dashed|wavy|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
div.a {
  text-decoration-line: underline;
  text-decoration-style: solid;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type :   | discrete                                                              |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.textDecorationStyle="wavy"                               |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value   | Description                                           |
| ------- | ----------------------------------------------------- |
| solid   | Default value. The line will display as a single line |
| double  | The line will display as a double line                |
| dotted  | The line will display as a dotted line                |
| dashed  | The line will display as a dashed line                |
| wavy    | The line will display as a wavy line                  |
| initial | Sets this property to its default value               |
| inherit | Inherits this property from its parent element        |
