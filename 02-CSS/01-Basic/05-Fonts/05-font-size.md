| Property  | Description               | Default value |
| --------- | ------------------------- | ------------- |
| font-size | Specifies the font size . | medium        |

&nbsp;

# Definition and Usage

The `font-size` property sets the size of a font.

# NOTE

If we do not define a font-size, then for the normal text such as paragraphs, the default size is 16px, which is equal to 1em.

&nbsp;

The font-size can be **absolute** or **relative**.

&nbsp;

## <u>Absolute-size</u>

It is used to set the text to **a definite size**.

Using absolute-size, it is not possible to change the size of the text in all browsers. It is advantageous when we know the physical size of the output.

&nbsp;

## <u>Relative-size</u>

It is used to set the size of the text **relative to its neighboring elements**.

With relative-size, it is possible to change the size of the text in browsers.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  font-size: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|percentage|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Set different font weight for three paragraphs:

```css
p.normal {
  font-weight: normal;
}

p.thick {
  font-weight: bold;
}

p.thicker {
  font-weight: 900;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type:    | yes                                                                   |
| Version:           | CSS1                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.fontSize="14px"                                          |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value    | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| medium   | Sets the font-size to a medium size.                              |
| xx-small | Sets the font-size to an xx-small size                            |
| x-small  | Sets the font-size to an extra small size                         |
| small    | Sets the font-size to a small size                                |
| large    | Sets the font-size to a large size                                |
| x-large  | Sets the font-size to an extra large size                         |
| xx-large | Sets the font-size to an xx-large size                            |
| smaller  | Sets the font-size to a smaller size than the parent element      |
| larger   | Sets the font-size to a larger size than the parent element       |
| length   | Sets the font-size to a fixed size in px, cm, etc.                |
| %        | Sets the font-size to a percent of the parent element's font size |
| initial  | Sets this property to its default value.                          |
| inherit  | Inherits this property from its parent element                    |
