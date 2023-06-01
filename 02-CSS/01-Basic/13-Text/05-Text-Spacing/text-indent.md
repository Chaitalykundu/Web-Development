| Property    | Description                                                 | Default value |
| ----------- | ----------------------------------------------------------- | ------------- |
| text-indent | Specifies the indentation of the first line in a text-block | 0             |

&nbsp;

&nbsp;

# Definition & usage

The `text-indent` property specifies the indentation of the first line in a text-block.

&nbsp;

# Note

Negative values are allowed.

The first line will be indented to the left if the value is negative.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-indent: length | percentage | initial | inherit;
}
```

&nbsp;

```css
/* Keyword values */
selector {
  text-indent: 5em each-line;
  text-indent: 5em hanging;
  text-indent: 5em hanging each-line;
}

/* Global values */
selector {
  text-indent: inherit;
  text-indent: initial;
  text-indent: revert;
  text-indent: revert-layer;
  text-indent: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.a {
  text-indent: 50px;
}

div.b {
  text-indent: -2em;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type     | a length, percentage or calc();                                       |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.textIndent="50px"                                        |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| length  | Defines a fixed indentation in px, pt, cm, em, etc.             |
| %       | Defines the indentation in % of the width of the parent element |
| initial | Sets this property to its default value.                        |
| inherit | Inherits this property from its parent element.                 |
