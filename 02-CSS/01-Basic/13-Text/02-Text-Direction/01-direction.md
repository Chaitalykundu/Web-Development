| Property  | Description                                                                 | Default value |
| --------- | --------------------------------------------------------------------------- | ------------- |
| direction | specifies the text direction/writing direction within a block-level element | ltr           |

&nbsp;

&nbsp;

# Definition & usage

The `direction` property specifies **the text direction/writing direction** within a block-level element.

&nbsp;

# Note

Use this property together with the `unicode-bidi` property to set or return whether the text should be overridden to support multiple languages in the same document.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  direction: ltr|rtl|initial|inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  direction: ltr;
  direction: rtl;
}

/* Global values */
selector {
  direction: inherit;
  direction: initial;
  direction: revert;
  direction: revert-layer;
  direction: unset;
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

|                    |                              |
| ------------------ | ---------------------------- |
| Inherited:         | yes                          |
| Animation type     | Not Animation type           |
| Applies to         | all elements                 |
| JavaScript syntax: | object.style.direction="rtl" |
|                    |                              |

&nbsp;

&nbsp;

# Property values

| Property | Values                                                  |
| -------- | ------------------------------------------------------- |
| ltr      | Text direction goes from left-to-right. This is default |
| rtl      | Text direction goes from right-to-left                  |
| initial  | Sets this property to its default value.                |
| inherit  | Inherits this property from its parent element.         |
