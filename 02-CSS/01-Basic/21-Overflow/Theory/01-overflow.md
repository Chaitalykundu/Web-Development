# Overview

- [Overview](#overview)
- [Properties](#properties)
- [Definition and Usage](#definition-and-usage)
- [Note](#note)
- [Constituent properties](#constituent-properties)
- [Syntax](#syntax)
- [Example](#example)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Properties

| Value    | Description                                                  | Default value |
| -------- | ------------------------------------------------------------ | ------------- |
| overflow | Specifies what happens if content overflows an element's box | visible       |

&nbsp;

&nbsp;

# Definition and Usage

The `overflow` property specifies whether to clip the content or to add scrollbar when the content of an element is too big to fit in the specified area.

&nbsp;

# Note

The `overflow` property only works for **block elements with a specified height**.

&nbsp;

&nbsp;

# Constituent properties

This property is a shorthand for :

- overflow-x
- overflow-y

&nbsp;

&nbsp;

# Syntax

```css
selector {
  overflow: visible|hidden|clip|scroll|auto|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  overflow: visible;
  overflow: hidden;
  overflow: clip;
  overflow: scroll;
  overflow: auto;
  overflow: hidden visible;
}

/* Global values */
selector {
  overflow: inherit;
  overflow: initial;
  overflow: revert;
  overflow: revert-layer;
  overflow: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.ex1 {
  overflow: scroll;
}

div.ex2 {
  overflow: hidden;
}
```

&nbsp;

&nbsp;

|                    |                                                        |
| ------------------ | ------------------------------------------------------ |
| Inherited:         | no                                                     |
| Animation type     | discrete                                               |
| Applies to         | Block-containers, flex containers, and grid containers |
| JavaScript syntax: | object.style.overflow="scroll"                         |
|                    |                                                        |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                                                                                 |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visible | The overflow is not clipped. It renders outside the element's box. This is default                                                                          |
| hidden  | The overflow is clipped, and the rest of the content will be invisible. Content can be scrolled programmatically (e.g. by setting scrollLeft or scrollTo()) |
| clip    | The overflow is clipped, and the rest of the content will be invisible. Forbids scrolling, including programmatic scrolling.                                |
| scroll  | The overflow is clipped, but a scroll-bar is added to see the rest of the content                                                                           |
| auto    | If overflow is clipped, a scroll-bar should be added to see the rest of the content                                                                         |
| initial | Sets this property to its default value.                                                                                                                    |
| inherit | Inherits this property from its parent element.                                                                                                             |
|         |                                                                                                                                                             |

&nbsp;

&nbsp;
