| Value         | Description                        | Default value |
| ------------- | ---------------------------------- | ------------- |
| outline-width | specifies the width of the outline | medium        |

&nbsp;

&nbsp;

# Definition and Usage

The `outline-width` property specifies the width of the outline.

&nbsp;

# Note

Always declare the `outline-style` property before the `outline-width` property.

An element must have an outline before you change the width of it.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  outline-width: thin |medium| thick| length|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
p.ex1 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thin;
}
```

&nbsp;

&nbsp;

|                    |                                  |
| ------------------ | -------------------------------- |
| Inherited:         | no                               |
| Animation type     | a length                         |
| Applies to         | all elements                     |
| JavaScript syntax: | object.style.outlineWidth="12px" |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| thin    | typically 1px                                   |
| medium  | typically 3px                                   |
| thick   | typically 5px                                   |
| length  | specific size (in px, pt, cm, em, etc)          |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
