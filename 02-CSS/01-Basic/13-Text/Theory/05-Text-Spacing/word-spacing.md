| Property     | Description                                 | Default value |
| ------------ | ------------------------------------------- | ------------- |
| word-spacing | Specifies the space between words in a text |

&nbsp;

&nbsp;

# Definition & usage

The `word-spacing` property increases or decreases the white space between words.

&nbsp;

# Note

Negative values are allowed.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  word-spacing: normal|length|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  word-spacing: normal;
}

/* <length> values */
selector {
  word-spacing: 3px;
  word-spacing: 0.3em;
}

/* Global values */
selector {
  word-spacing: inherit;
  word-spacing: initial;
  word-spacing: revert;
  word-spacing: revert-layer;
  word-spacing: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
p {
  word-spacing: 30px;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type     | a length                                                              |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.wordSpacing="20px"                                       |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value   | Description                                                        |
| ------- | ------------------------------------------------------------------ |
| normal  | Defines normal space between words (0.25em) .                      |
| length  | Defines an additional space between words (in px, pt, cm, em, etc) |
| initial | Sets this property to its default value.                           |
| inherit | Inherits this property from its parent element                     |
