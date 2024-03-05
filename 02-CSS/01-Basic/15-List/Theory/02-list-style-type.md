| Property        | Description                            | Default value |
| --------------- | -------------------------------------- | ------------- |
| list-style-type | Specifies the type of list-item marker | disc          |

&nbsp;

&nbsp;

# Definition & usage

The `list-style-type` specifies the type of list-item marker in a list.

&nbsp;

# Note

&nbsp;

&nbsp;

# Syntax

```css
selector {
  list-style-type: value;
}
```

&nbsp;

```css
/* Partial list of types */
selector {
  list-style-type: disc;
  list-style-type: circle;
  list-style-type: square;
  list-style-type: decimal;
  list-style-type: georgian;
  list-style-type: trad-chinese-informal;
  list-style-type: kannada;
}

/* <string> value */
selector {
  list-style-type: "-";
}

/* Identifier matching an @counter-style rule */
selector {
  list-style-type: custom-counter-style;
}

/* Keyword value */
selector {
  list-style-type: none;
}

/* Global values */
selector {
  list-style-type: inherit;
  list-style-type: initial;
  list-style-type: revert;
  list-style-type: revert-layer;
  list-style-type: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
ul.a {
  list-style-type: circle;
}
ol.c {
  list-style-type: upper-roman;
}
```

&nbsp;

&nbsp;

|                    |                                     |
| ------------------ | ----------------------------------- |
| Inherited:         | yes                                 |
| Animation type     | discrete                            |
| Applies to         | list items                          |
| JavaScript syntax: | object.style.listStyleType="square" |
|                    |                                     |

&nbsp;

&nbsp;

# Property Values

| Value                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| disc                 | The marker is a filled circle                                |
| armenian             | The marker is traditional Armenian numbering                 |
| circle               | The marker is a circle                                       |
| cjk-ideographic      | The marker is plain ideographic numbers                      |
| decimal              | The marker is a number                                       |
| decimal-leading-zero | The marker is a number with leading zeros (01, 02, 03, etc.) |
| georgian             | The marker is traditional Georgian numbering                 |
| hebrew               | The marker is traditional Hebrew numbering                   |
| hiragana             | The marker is traditional Hiragana numbering                 |
| hiragana-iroha       | The marker is traditional Hiragana iroha numbering           |
| katakana             | The marker is traditional Katakana numbering                 |
| katakana-iroha       | The marker is traditional Katakana iroha numbering           |
| lower-alpha          | The marker is lower-alpha (a, b, c, d, e, etc.)              |
| lower-greek          | The marker is lower-greek                                    |
| lower-latin          | The marker is lower-latin (a, b, c, d, e, etc.)              |
| lower-roman          | The marker is lower-roman (i, ii, iii, iv, v, etc.)          |
| none                 | No marker is shown                                           |
| square               | The marker is a square                                       |
| upper-alpha          | The marker is upper-alpha (A, B, C, D, E, etc.)              |
| upper-greek          | The marker is upper-greek                                    |
| upper-latin          | The marker is upper-latin (A, B, C, D, E, etc.)              |
| upper-roman          | The marker is upper-roman (I, II, III, IV, V, etc.)          |
| initial              | Sets this property to its default value.                     |
| inherit              | Inherits this property from its parent element.              |
