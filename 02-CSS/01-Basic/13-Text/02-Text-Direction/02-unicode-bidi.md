| Property     | Description                                                                                                                                         | Default value |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| unicode-bidi | Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document | normal        |

&nbsp;

&nbsp;

# Definition & usage

The `unicode-bidi` property is used together with the `direction` property to set or return whether **the text should be overridden** to support multiple languages in the same document.

&nbsp;

# Note

The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  unicode-bidi: normal|embed|bidi-override|initial|inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  unicode-bidi: normal;
  unicode-bidi: embed;
  unicode-bidi: isolate;
  unicode-bidi: bidi-override;
  unicode-bidi: isolate-override;
  unicode-bidi: plaintext;
}

/* Global values */
selector {
  unicode-bidi: inherit;
  unicode-bidi: initial;
  unicode-bidi: revert;
  unicode-bidi: revert-layer;
  unicode-bidi: unset;
}
```

&nbsp;

&nbsp;

# Example

Override text:

```css
div {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

&nbsp;

&nbsp;

|                    |                                          |
| ------------------ | ---------------------------------------- |
| Inherited:         | no                                       |
| Animation type     | Not Animation type                       |
| Applies to         | all elements                             |
| JavaScript syntax: | object.style.unicodeBidi="bidi-override" |
|                    |                                          |

&nbsp;

&nbsp;

# Property values

| Property         | Values                                                                                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| normal           | The element does not open an additional level of embedding. This is default                                                                               |
| embed            | For inline elements, this value opens an additional level of embedding                                                                                    |
| bidi-override    | For inline elements, this creates an override. For block elements, this creates an override for inline-level descendants not within another block element |
| isolate          | The element is isolated from its siblings                                                                                                                 |
| isolate-override |
| plaintext        |
| initial          | Sets this property to its default value.                                                                                                                  |
| inherit          | Inherits this property from its parent element.                                                                                                           |
