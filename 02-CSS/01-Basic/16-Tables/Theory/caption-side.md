| Property     | Description                                 | Default value |
| ------------ | ------------------------------------------- | ------------- |
| caption-side | specifies the placement of a table caption. | top           |

&nbsp;

&nbsp;

# Definition and Usage

The `caption-side` property specifies the placement of a table caption.

The values are relative to the writing-mode of the table.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  caption-side: top|bottom|initial|inherit;
}
```

&nbsp;

```css
/* Directional values */
selector {
  caption-side: top;
  caption-side: bottom;
}

/* Logical values */
selector {
  caption-side: block-start;
  caption-side: block-end;
  caption-side: inline-start;
  caption-side: inline-end;
}

/* Global values */
selector {
  caption-side: inherit;
  caption-side: initial;
  caption-side: revert;
  caption-side: revert-layer;
  caption-side: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
#table1 {
  border-collapse: separate;
  border-spacing: 15px;
}

#table2 {
  border-collapse: separate;
  border-spacing: 15px 50px;
}
```

&nbsp;

&nbsp;

# Formal definition

|                    |                                   |
| ------------------ | --------------------------------- |
| Inherited:         | yes                               |
| Animation type     | discrete                          |
| Applies to         | table and inline-table elements   |
| JavaScript syntax: | object.style.captionSide="bottom" |
|                    |                                   |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                       |
| ------- | ------------------------------------------------- |
| top     | Puts the caption above the table. This is default |
| bottom  | Puts the caption below the table                  |
| initial | Sets this property to its default value.          |
| inherit | Inherits this property from its parent element.   |
