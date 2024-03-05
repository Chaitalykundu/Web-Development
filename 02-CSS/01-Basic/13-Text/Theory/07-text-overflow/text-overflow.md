| Property      | Description                                                                           | Default value |
| ------------- | ------------------------------------------------------------------------------------- | ------------- |
| text-overflow | specifies how overflowed content that is not displayed should be signaled to the user | clip          |

&nbsp;

&nbsp;

# Definition & usage

The `text-overflow` property specifies how overflowed content that is not displayed should be signaled to the user.

It can be clipped, display an ellipsis (...), or display a custom string.

&nbsp;

# Note

Both of the following properties are required for `text-overflow`:

- white-space: nowrap;
- overflow: hidden;

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-overflow: clip|ellipsis|string|initial|inherit;
}
```

&nbsp;

```css
/* Keyword */
selector {
  text-overflow: clip;
  text-overflow: ellipsis ellipsis;
  text-overflow: ellipsis " [..]";
}

/* Global values */
selector {
  text-overflow: inherit;
  text-overflow: initial;
  text-overflow: revert;
  text-overflow: revert-layer;
  text-overflow: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

&nbsp;

&nbsp;

|                    |                                      |
| ------------------ | ------------------------------------ |
| Inherited:         | yes                                  |
| Animation type     | discrete                             |
| Applies to         | block container elements             |
| JavaScript syntax: | object.style.textOverflow="ellipsis" |
|                    |                                      |

&nbsp;

&nbsp;

# Property values

| Value    | Description                                              |
| -------- | -------------------------------------------------------- |
| clip     | The text is clipped and not accessible                   |
| ellipsis | Render an ellipsis ("...") to represent the clipped text |
| string   | Render the given string to represent the clipped text    |
| initial  | Sets this property to its default value.                 |
| inherit  | Inherits this property from its parent element           |
