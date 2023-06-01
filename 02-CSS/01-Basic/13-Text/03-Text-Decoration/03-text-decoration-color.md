| Property              | Description                                | Default value |
| --------------------- | ------------------------------------------ | ------------- |
| text-decoration-color | Specifies the color of the text-decoration | currentColor  |

&nbsp;

&nbsp;

# Definition & usage

The `text-decoration-color` property specifies the color of the text-decoration (underlines, overlines, linethroughs).

&nbsp;

# Note

The `color` applies to decorations, such as underlines, overlines, strikethroughs, and wavy lines like those used to mark misspellings, in the scope of the property's value.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-decoration-color: color|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
div.a {
  text-decoration-line: overline;
  text-decoration-color: red;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type :   | a color                                                               |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.textDecorationColor="red"                                |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| color   | Specifies the color of the text-decoration      |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
