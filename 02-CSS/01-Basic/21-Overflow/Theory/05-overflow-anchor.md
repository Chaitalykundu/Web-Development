# Overview

- [Overview](#overview)
- [Properties](#properties)
- [Definition and Usage](#definition-and-usage)
- [Syntax](#syntax)
- [Example](#example)
- [Property Values](#property-values)

&nbsp;

&nbsp;

&nbsp;

# Properties

| Value           | Description                                     | Default value |
| --------------- | ----------------------------------------------- | ------------- |
| overflow-anchor | makes it possible to turn off scroll anchoring. | auto          |

&nbsp;

&nbsp;

# Definition and Usage

The `overflow-anchor` property makes it possible to turn off scroll anchoring.

&nbsp;

Scroll anchoring is a feature in the browser that prevents a viewable area that is scrolled into focus to move when new content is loaded above. This is typically a problem on a slow connection if the user scrolls down and starts reading before the page is fully loaded.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  overflow-anchor: auto|none|initial|inherit;
}
```

&nbsp;

```css
/* Keyword value */
selector {
  overflow-anchor: auto;
  overflow-anchor: none;
}

/* Global values */
selector {
  overflow-anchor: inherit;
  overflow-anchor: initial;
  overflow-anchor: revert;
  overflow-anchor: revert-layer;
  overflow-anchor: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div {
  overflow-anchor: none;
}
```

&nbsp;

&nbsp;

|                    |                                    |
| ------------------ | ---------------------------------- |
| Inherited:         | no                                 |
| Animation type     | discrete                           |
| Applies to         | all elements                       |
| JavaScript syntax: | object.style.overflowAnchor="none" |
|                    |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| auto    | Scroll anchoring is enabled                     |
| none    | Scroll anchoring is disabled                    |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
|         |                                                 |

&nbsp;

&nbsp;
