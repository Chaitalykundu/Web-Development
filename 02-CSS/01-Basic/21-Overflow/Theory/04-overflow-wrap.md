# Properties

| Value         | Description                                                                                          | Default value |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------------- |
| overflow-wrap | Specifies whether or not the browser can break lines with long words, if they overflow its container | visible       |

&nbsp;

&nbsp;

# Definition and Usage

The `overflow-wrap` property specifies whether or not the browser can break lines with long words, if they overflow the container.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  overflow-wrap: normal|anywhere|break-word|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  overflow-wrap: normal;
  overflow-wrap: break-word;
  overflow-wrap: anywhere;
}

/* Global values */
selector {
  overflow-wrap: inherit;
  overflow-wrap: initial;
  overflow-wrap: revert;
  overflow-wrap: revert-layer;
  overflow-wrap: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div {
  overflow-wrap: break-word;
}
```

&nbsp;

&nbsp;

|                    |                                    |
| ------------------ | ---------------------------------- |
| Inherited:         | yes                                |
| Animation type     | discrete                           |
| Applies to         | non-replaced inline elements       |
| JavaScript syntax: | object.style.overflowWrap="normal" |
|                    |

&nbsp;

&nbsp;

# Property Values

| Value      | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| normal     | Long words will not break, even if they overflow the container |
| anywhere   | Long words will break if they overflow the container           |
| break-word | Long words will break if they overflow the container           |
| initial    | Sets this property to its default value.                       |
| inherit    | Inherits this property from its parent element.                |
|            |                                                                |

&nbsp;

&nbsp;
