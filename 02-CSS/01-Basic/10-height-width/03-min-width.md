# CSS height Properties

| Property   | Description                           | Default value |
| ---------- | ------------------------------------- | ------------- |
| min-height | Sets the minimum height of an element | 0             |

&nbsp;

&nbsp;

# Definition and Usage

The `min-width` property defines the **minimum width** of an element.

&nbsp;

# Note

If the content is smaller than the minimum width, the `min-width` will be applied.

&nbsp;

If the content is larger than the minimum width, the `min-width` property has no effect.

&nbsp;

This prevents the value of the **width** property from becoming smaller than `min-width`.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  min-width: length|percentage|initial|inherit;
}
```

&nbsp;

&nbsp;

|                    |                                                                                 |
| ------------------ | ------------------------------------------------------------------------------- |
| Inherited:         | no                                                                              |
| Animation type     | a length, percentage or calc();                                                 |
| Applies to         | all elements but non-replaced inline elements, table columns, and column groups |
| JavaScript syntax: | object.style.minWidth="400px"                                                   |
|                    |                                                                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| length  | Defines the minimum width in px, cm, etc.                    |
| %       | Defines the minimum width in percent of the containing block |
| initial | Sets this property to its default value                      |
| inherit | Inherits this property from its parent element.              |

&nbsp;

&nbsp;
