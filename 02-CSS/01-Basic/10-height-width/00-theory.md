# Overview

- Properties
- Definition & usage
- Syntax
- Example
- Formal Definition
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `height` property is used to set the **_height_** of an element.

- The `width` property is used to set the **_width_** of an element.

- If `box-sizing` is set to `border-box`, Height and width determines the height and width of the **border area** instead of **content area**

- Height and width applies to all elements but non-replaced inline elements, table columns, and column groups

&nbsp;

&nbsp;

# Properties

| Value      | Description                           | Default value |
| ---------- | ------------------------------------- | ------------- |
| height     | Sets the height of an element         | auto          |
| min-height | Sets the minimum height of an element | 0             |
| max-height | Sets the maximum height of an element | none          |
| width      | Sets the width of an element          | auto          |
| min-width  | Sets the minimum width of an element  | 0             |
| max-width  | Sets the maximum width of an element  | none          |
|            |                                       |               |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `height` property is used to set the **_height_** of an element.

The `width` property is used to set the **_width_** of an element.

&nbsp;

&nbsp;

# Note

The `height` and `width` properties do not include **padding, borders, or margins**. It sets the height/width of the area inside the padding, border, and margin of the element.

&nbsp;

If we set the height to a numeric value (like in px, %, etc.), the content can be `overflow` if it does not fit in the given height. We can manage the overflowing content by defining the `overflow` property.

&nbsp;

By default, these property define the `height` and `width` of the **content area**.

&nbsp;

If `box-sizing` is set to `border-box`, however, it instead determines the height and width of the **border area**.

&nbsp;

The `min-height` and `max-height` properties override `height`.

The `min-width` and `max-width` properties override `width`.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  height: auto | length | percentage | initial | inherit;
}

selector {
  width: auto | length | percentage | initial | inherit;
}
```

&nbsp;

&nbsp;

# Formal Definition

|                    |                                                                                 |
| ------------------ | ------------------------------------------------------------------------------- |
| Inherited:         | no                                                                              |
| Animation type     | a length, percentage or calc();                                                 |
| Applies to         | all elements but non-replaced inline elements, table columns, and column groups |
| JavaScript syntax: | object.style.height="500px"                                                     |
|                    |                                                                                 |

&nbsp;

&nbsp;

# Property Values

| Value      | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| auto       | The browser calculates the height and width                 |
| length     | Defines the height/width in px, cm, etc.                    |
| percentage | Defines the height/width in percent of the containing block |
| initial    | Sets the height/width to its default value                  |
| inherit    | The height/width will be inherited from its parent value    |
|            |                                                             |

&nbsp;
