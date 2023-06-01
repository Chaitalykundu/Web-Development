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

The `direction` and `unicode-bidi` properties are the two only properties which are not affected by the `all` shorthand property

&nbsp;

&nbsp;

# Syntax

```css
direction: ltr|rtl|initial|inherit;
```

&nbsp;

```css
/* Keyword values */
direction: ltr;
direction: rtl;

/* Global values */
direction: inherit;
direction: initial;
direction: revert;
direction: revert-layer;
direction: unset;
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

|                    |                              |
| ------------------ | ---------------------------- |
| Inherited:         | yes                          |
| Animation type     | Not Animation type           |
| Applies to         | all elements                 |
| JavaScript syntax: | object.style.direction="rtl" |
|                    |                              |

&nbsp;

&nbsp;

| Property | Values                                                  |
| -------- | ------------------------------------------------------- |
| ltr      | Text direction goes from left-to-right. This is default |
| rtl      | Text direction goes from right-to-left                  |
| initial  | Sets this property to its default value.                |
| inherit  | Inherits this property from its parent element.         |
