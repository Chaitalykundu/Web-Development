| Property                  | Description                                         | Default value |
| ------------------------- | --------------------------------------------------- | ------------- |
| text-decoration-thickness | Specifies the thickness of the text decoration line | auto          |

&nbsp;

&nbsp;

# Definition & usage

The `text-decoration-thickness` property specifies the thickness of the decoration line.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-decoration-thickness: auto|from-font|length|percentage|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
h1 {
  text-decoration: underline;
  text-decoration-thickness: auto;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type     | by computed value type                                                |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.textDecorationThickness="5px"                            |
|                    |

&nbsp;

&nbsp;

# Property values

| Value      | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| auto       | The browser chooses the thickness of the decoration line                                                |
| from-font  | If a font file contains information about a preferred thickness, use that value. If not, behave as auto |
| length     | Specifies the thickness as a length                                                                     |
| percentage | Specifies the thickness as percentage                                                                   |
| initial    | Sets this property to its default value. Read about initial                                             |
| inherit    | Inherits this property from its parent element.                                                         |
