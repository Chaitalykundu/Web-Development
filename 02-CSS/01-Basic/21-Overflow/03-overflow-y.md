# Properties

| Value      | Description                                                                                              | Default value |
| ---------- | -------------------------------------------------------------------------------------------------------- | ------------- |
| overflow-y | Specifies what to do with the top/bottom edges of the content if it overflows the element's content area | visible       |

&nbsp;

&nbsp;

# Definition and Usage

The `overflow-y` property specifies what to do with the top/bottom edges of the content if it overflows the element's content area.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  overflow-y: visible|hidden|scroll|clip|auto|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  overflow-y: visible;
  overflow-y: hidden;
  overflow-y: scroll;
  overflow-y: clip;
  overflow-y: auto;
}

/* Global values */
selector {
  overflow-y: inherit;
  overflow-y: initial;
  overflow-y: revert;
  overflow-y: revert-layer;
  overflow-y: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.ex1 {
  overflow-y: scroll;
}

div.ex2 {
  overflow-y: hidden;
}
```

&nbsp;

&nbsp;

|                    |                                                        |
| ------------------ | ------------------------------------------------------ |
| Inherited:         | no                                                     |
| Animation type     | discrete                                               |
| Applies to         | Block-containers, flex containers, and grid containers |
| JavaScript syntax: | object.style.overflowY="scroll"                        |
|                    |                                                        |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| visible | The content is not clipped, and it may be rendered outside the content box                                                   |
| hidden  | TThe content is clipped - and no scrolling mechanism is provided                                                             |
| scroll  | The content is clipped and a scrolling mechanism is provided                                                                 |
| clip    | The overflow is clipped, and the rest of the content will be invisible. Forbids scrolling, including programmatic scrolling. |
| auto    | Should cause a scrolling mechanism to be provided for overflowing boxes                                                      |
| initial | Sets this property to its default value.                                                                                     |
| inherit | Inherits this property from its parent element.                                                                              |
|         |                                                                                                                              |

&nbsp;

&nbsp;
