| Property     | Description                | Default value |
| ------------ | -------------------------- | ------------- |
| font-variant | Specifies the font variant | normal        |

&nbsp;

# Definition and Usage

The `font-variant` property specifies whether or not a text should be displayed in a small-caps font.

&nbsp;

In a _small-caps_ font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  font-variant: normal|small-caps|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Set a paragraph to a small-caps font:

```css
p.small {
  font-variant: small-caps;
}
```

&nbsp;

&nbsp;

|                    |                                                                   |
| ------------------ | ----------------------------------------------------------------- |
| Inherited:         | yes                                                               |
| Animation type:    | no.                                                               |
| Version:           | CSS1                                                              |
| Applies to         | all elements. It also applies to ::first-letter and ::first-line. |
| JavaScript syntax: | object.style.fontVariant="small-caps"                             |
|                    |                                                                   |

&nbsp;

&nbsp;

# Property Values

| Value      | Description                                         |
| ---------- | --------------------------------------------------- |
| normal     | The browser displays a normal font. This is default |
| small-caps | The browser displays a small-caps font              |
| initial    | Sets this property to its default value             |
| inherit    | Inherits this property from its parent element      |

&nbsp;

&nbsp;

# Constituent properties

This property is a shorthand for the following CSS properties:

- font-variant-alternates
- font-variant-caps
- font-variant-east-asian
- font-variant-emoji
- font-variant-ligatures
- font-variant-numeric
- font-variant-position
