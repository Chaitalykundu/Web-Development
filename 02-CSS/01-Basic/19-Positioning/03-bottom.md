# Properties

| Value  | Description                                      | Default value |
| ------ | ------------------------------------------------ | ------------- |
| bottom | Sets the bottom margin edge for a positioned box | auto          |
|        |                                                  |

&nbsp;

&nbsp;

# Definition and Usage

The `bottom` property sets the bottom margin edge for a positioned box.

It affects the **vertical** position of a positioned element.

This property has no effect on non-positioned elements.

&nbsp;

# Note

- If `position: absolute;` or `position: fixed;` - the bottom property sets the bottom edge of an element to a unit above/below the bottom edge of its nearest positioned ancestor.

- If `position: relative;` - the bottom property makes the element's bottom edge to move above/below its normal position.

- If `position: sticky;` - the bottom property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.

- If `position: static;` - the bottom property has no effect.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  bottom: auto|length| percentage|initial|inherit;
}
```

&nbsp;

```css
/* <length> values */
selector {
  bottom: 3px;
  bottom: 2.4em;
}

/* <percentage>s of the height of the containing block */
selector {
  bottom: 10%;
}

/* Keyword value */

selector {
  bottom: auto;
}

/* Global values */
selector {
  bottom: inherit;
  bottom: initial;
  bottom: revert;
  bottom: revert-layer;
  bottom: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.absolute {
  position: absolute;
  bottom: 10px;
  width: 50%;
  border: 3px solid #8ac007;
}
```

&nbsp;

&nbsp;

|                    |                                 |
| ------------------ | ------------------------------- |
| Inherited:         | no                              |
| Animation type     | a length, percentage or calc(); |
| Applies to         | positioned elements             |
| JavaScript syntax: | object.style.bottom="10px"      |
|                    |                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                        |
| ------- | -------------------------------------------------------------------------------------------------- |
| auto    | Lets the browser calculate the bottom edge position.                                               |
| length  | Sets the bottom edge position in px, cm, etc. Negative values are allowed. Read about length units |
| %       | Sets the bottom edge position in % of containing element. Negative values are allowed              |
| initial | Sets this property to its default value.                                                           |
| inherit | Inherits this property from its parent element.                                                    |
|         |                                                                                                    |

&nbsp;
&nbsp;

&nbsp;
