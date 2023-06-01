# CSS height Properties

| Property   | Description                           | Default value |
| ---------- | ------------------------------------- | ------------- |
| min-height | Sets the minimum height of an element | 0             |

&nbsp;

&nbsp;

# Definition and Usage

The `min-height` property defines the **_minimum height_** of an element.

It sets the **lower bound** on the element's height.

&nbsp;

# Note

If the content is smaller than the minimum height, the `min-height` will be applied.

&nbsp;

If the content is larger than the minimum height, the `min-height` property has no effect.

&nbsp;

This prevents the value of the **height** property from becoming smaller than `min-height`.

&nbsp;

It does not allow **negative** values.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  min-height: length |percentage| initial | inherit;
}
```

&nbsp;

## Keyword values

```css
selector {
  min-height: max-content;
  min-height: min-content;
  min-height: fit-content(20em);
}
```

## Global values

```css
selector {
  min-height: inherit;
  min-height: initial;
  min-height: revert;
  min-height: revert-layer;
  min-height: unset;
}
```

&nbsp;

&nbsp;

|                    |                                                                                 |
| ------------------ | ------------------------------------------------------------------------------- |
| Inherited:         | no                                                                              |
| Animation type     | a length, percentage or calc();                                                 |
| Applies to         | all elements but non-replaced inline elements, table columns, and column groups |
| JavaScript syntax: | object.style.minHeight="400px"                                                  |
|                    |                                                                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                   |
| ------- | ------------------------------------------------------------- |
| length  | Defines the minimum height in px, cm, etc.                    |
| %       | Defines the minimum height in percent of the containing block |
| initial | Sets this property to its default value                       |
| inherit | Inherits this property from its parent element.               |

&nbsp;
