# Overview

- Definition and Usage
- Note
- Syntax
- Formal Definition
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `max-width` property defines the **maximum width** of an element.
- It does not allow **negative** values.

&nbsp;

&nbsp;

# CSS height Properties

| Property  | Description                          | Default value |
| --------- | ------------------------------------ | ------------- |
| max-width | Sets the maximum width of an element | none          |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `max-width` property defines the **maximum width** of an element.

&nbsp;

&nbsp;

# Note

If the content is larger than the maximum width, it will automatically change the height of the element.

&nbsp;

If the content is smaller than the maximum width, the `max-width` property has no effect.

&nbsp;

This prevents the value of the width property from becoming larger than `max-width`.

&nbsp;

It does not allow **negative** values.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  max-width: none | length | percentage | initial | inherit;
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
| JavaScript syntax: | object.style.maxWidth="600px"                                                   |
|                    |                                                                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| none    | No maximum width.                                            |
| length  | Defines the maximum width in px, cm, etc.                    |
| %       | Defines the maximum width in percent of the containing block |
| initial | Sets this property to its default value                      |
| inherit | Inherits this property from its parent element               |
|         |                                                              |
