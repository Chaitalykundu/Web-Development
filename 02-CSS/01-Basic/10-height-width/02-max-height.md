# CSS height Properties

| Property   | Description                           | Default value |
| ---------- | ------------------------------------- | ------------- |
| max-height | Sets the maximum height of an element | none          |

&nbsp;

&nbsp;

# Definition and Usage

The `max-height` property defines the **_maximum height_** of an element.

&nbsp;

# Note

This prevents the value of the `height` property from becoming larger than `max-height`.

&nbsp;

If the content is smaller than the maximum height, the `max-height` property has no effect.

&nbsp;

If the content is larger than the maximum height, it will overflow. How the container will handle the overflowing content is defined by the `overflow` property.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  max-height: none |length| percentage | initial |inherit;
}
```

&nbsp;

&nbsp;

|                    |                                                                                 |
| ------------------ | ------------------------------------------------------------------------------- |
| Inherited:         | no                                                                              |
| Animation type     | a length, percentage or calc();                                                 |
| Applies to         | all elements but non-replaced inline elements, table columns, and column groups |
| JavaScript syntax: | object.style.maxHeight="100px"                                                  |
|                    |                                                                                 |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                   |
| ------- | ------------------------------------------------------------- |
| none    | No maximum height                                             |
| length  | Defines the maximum height in px, cm, etc.                    |
| %       | Defines the maximum height in percent of the containing block |
| initial | Sets this property to its default value                       |
| inherit | Inherits this property from its parent element                |
