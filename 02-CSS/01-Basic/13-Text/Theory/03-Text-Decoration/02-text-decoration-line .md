| Property             | Description                                                                      | Default value |
| -------------------- | -------------------------------------------------------------------------------- | ------------- |
| text-decoration-line | Sets the kind of text decoration to use (like underline, overline, line-through) | none          |

&nbsp;

&nbsp;

# Definition & usage

The `text-decoration-line` property sets the kind of text decoration to use (like underline, overline, line-through).

&nbsp;

# Note

We can combine more than one value, like underline and overline to display lines both under and over the text.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-decoration-line: none|underline|overline|line-through|initial|inherit;
}
```

```css
/* Single keyword */
selector {
  text-decoration-line: none;
  text-decoration-line: underline;
  text-decoration-line: overline;
  text-decoration-line: line-through;
  text-decoration-line: blink;
}

/* Multiple keywords */
selector {
  text-decoration-line: underline overline; /* Two decoration lines */
  text-decoration-line: overline underline line-through; /* Multiple decoration lines */
}

/* Global values */
selector {
  text-decoration-line: inherit;
  text-decoration-line: initial;
  text-decoration-line: revert;
  text-decoration-line: revert-layer;
  text-decoration-line: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.a {
  text-decoration-line: overline;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | no                                                                    |
| Animation type :   | discrete                                                              |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.textDecorationLine="overline"                            |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value         | Description                                              |
| ------------- | -------------------------------------------------------- |
| none          | Specifies no line for the text-decoration                |
| underline     | Specifies that a line will be displayed under the text   |
| overline      | Specifies that a line will be displayed over the text    |
| line -through | Specifies that a line will be displayed through the text |
| initial       | Sets this property to its default value.                 |
| inherit       | Inherits this property from its parent element.          |
