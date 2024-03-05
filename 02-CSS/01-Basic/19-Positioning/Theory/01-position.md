# Properties

| Value    | Description                                      | Default value |
| -------- | ------------------------------------------------ | ------------- |
| position | sets how an element is positioned in a document. | static        |
|          |                                                  |

&nbsp;

&nbsp;

# Definition and Usage

The `position` property sets how an element is positioned in a document. (static, relative, absolute, fixed, or sticky).

&nbsp;

# Note

The `sticky` value is not supported in Internet Explorer or Edge 15 and earlier versions.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  position: static | absolute | fixed | relative | sticky | initial | inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
#parent1 {
  position: static;
  border: 1px solid blue;
  width: 300px;
  height: 100px;
}
```

&nbsp;

&nbsp;

|                    |                                  |
| ------------------ | -------------------------------- |
| Inherited:         | no                               |
| Animation type     | discrete                         |
| Applies to         | all elements                     |
| JavaScript syntax: | object.style.position="absolute" |
|                    |                                  |

&nbsp;

&nbsp;

# Property Values

| Value    | Description                                                                                                                                                                                                                                                                            |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| static   | Elements render in order, as they appear in the document flow                                                                                                                                                                                                                          |
| absolute | The element is positioned relative to its first positioned (not static) ancestor element                                                                                                                                                                                               |
| fixed    | The element is positioned relative to the browser window                                                                                                                                                                                                                               |
| relative | The element is positioned relative to its normal position, so "left:20px" adds 20 pixels to the element's LEFT position                                                                                                                                                                |
| sticky   | The element is positioned based on the user's scroll position A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). |
| initial  | Sets this property to its default value.                                                                                                                                                                                                                                               |
| inherit  | Inherits this property from its parent element.                                                                                                                                                                                                                                        |
|          |                                                                                                                                                                                                                                                                                        |

&nbsp;

&nbsp;
