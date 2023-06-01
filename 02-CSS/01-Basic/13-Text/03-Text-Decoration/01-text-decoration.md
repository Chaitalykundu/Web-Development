| Property        | Description                                                | Default value                |
| --------------- | ---------------------------------------------------------- | ---------------------------- |
| text-decoration | Sets all the text-decoration properties in one declaration | none currentColor solid auto |

&nbsp;

&nbsp;

# Definition & usage

The `text-decoration` property specifies the decoration added to text.

&nbsp;

&nbsp;

# text-decoration Shorthand Property

The `text-decoration` property is a shorthand property for:

- text-decoration-line (none) (required)
- text-decoration-color (currentColor)
- text-decoration-style (solid)
- text-decoration-thickness (auto)

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-decoration: text-decoration-line text-decoration-color
    text-decoration-style text-decoration-thickness|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
h1 {
  text-decoration: underline overline dotted red;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type:    | no.                                                                   |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.textDecoration="underline"                               |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value                     | Description                                                                      | Default value |
| ------------------------- | -------------------------------------------------------------------------------- | ------------- |
| text-decoration-line      | Sets the kind of text decoration to use (like underline, overline, line-through) |
| text-decoration-color     | Sets the color of the text decoration                                            |
| text-decoration-style     | Sets the style of the text decoration (like solid, wavy, dotted, dashed, double) |
| text-decoration-thickness | Sets the thickness of the decoration line                                        |
| initial                   | Sets this property to its default value. Read about initial                      |
| inherit                   | Inherits this property from its parent element                                   |
