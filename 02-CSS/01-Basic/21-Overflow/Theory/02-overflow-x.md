# Properties

| Value      | Description                                                                                              | Default value |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------------- |
| overflow-x | Specifies what to do with the left/right edges of the content if it overflows the element's content area | visible       |

&nbsp;

&nbsp;

# Definition and Usage

The `overflow-x` property specifies what to do with the left/right edges of the content if it overflows the element's content area .

&nbsp;

&nbsp;

# Syntax

```css
selector {
  overflow-x: visible|hidden|scroll|clip|auto|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  overflow-x: visible;
  overflow-x: hidden;
  overflow-x: scroll;
  overflow-x: clip;
  overflow-x: auto;
}

/* Global values */
selector {
  overflow-x: inherit;
  overflow-x: initial;
  overflow-x: revert;
  overflow-x: revert-layer;
  overflow-x: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.ex1 {
  overflow-x: scroll;
}

div.ex2 {
  overflow-x: hidden;
}
```

&nbsp;

&nbsp;

|                    |                                                        |
| ------------------ | ------------------------------------------------------ |
| Inherited:         | no                                                     |
| Animation type     | discrete                                               |
| Applies to         | Block-containers, flex containers, and grid containers |
| JavaScript syntax: | object.style.overflowX="scroll"                        |
|                    |                                                        |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| visible | The overflow is not clipped. it may be rendered outside the left and right edges                                             |
| hidden  | TThe content is clipped - and no scrolling mechanism is provided                                                             |
| scroll  | The content is clipped and a scrolling mechanism is provided                                                                 |
| clip    | The overflow is clipped, and the rest of the content will be invisible. Forbids scrolling, including programmatic scrolling. |
| auto    | Should cause a scrolling mechanism to be provided for overflowing boxes                                                      |
| initial | Sets this property to its default value.                                                                                     |
| inherit | Inherits this property from its parent element.                                                                              |
|         |                                                                                                                              |

&nbsp;

&nbsp;
