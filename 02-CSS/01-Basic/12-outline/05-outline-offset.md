| Value          | Description                                                                 | Default value |
| -------------- | --------------------------------------------------------------------------- | ------------- |
| outline-offset | Specifies the space between an outline and the edge or border of an element | 0             |

&nbsp;

&nbsp;

# Definition and Usage

The `outline-offset` property adds space between an outline and the edge/border of an element.

The space between an element and its outline is **transparent**.

&nbsp;

Outlines differ from borders in three ways:

- An outline is a line drawn around elements, outside the border edge
- An outline does not take up space
- An outline may be non-rectangular

&nbsp;

&nbsp;

# Syntax

```css
selector {
  outline-offset: length|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
div {
  outline: 4px solid red;
  outline-offset: 15px;
}
```

&nbsp;

&nbsp;

|                    |                                   |
| ------------------ | --------------------------------- |
| Inherited:         | no                                |
| Animation type     | a length                          |
| Applies to         | all elements                      |
| JavaScript syntax: | object.style.outlineOffset="15px" |
|                    |                                   |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                              |
| ------- | -------------------------------------------------------- |
| length  | The distance the outline is outset from the border edge. |
| initial | Sets this property to its default value.                 |
| inherit | Inherits this property from its parent element.          |
