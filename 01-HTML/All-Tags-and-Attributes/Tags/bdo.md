# `<bdo></bdo>` tag

- BDO stands for **_Bi-Directional Override_**.

* The `<bdo>` tag is used to overrides the current/default text direction.

* This tag sets the direction of content within it to render on browser from left to right or right to left

* This tag is useful for the languages which are written from right to left such as Arabic and Hebrew.

&nbsp;

# Syntax :

```html
<bdo dir=" "> Content......</bdo>
```

&nbsp;

# Example :

```html
<bdo dir="rtl"> This text will go right-to-left. </bdo>
```

&nbsp;

# Default CSS Settings

```css
bdo {
  unicode-bidi: bidi-override;
}
```

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Display / Element | Inline    |
| Tag               | Container |
| Usage             | textual   |
|                   |           |

&nbsp;

# Tag-specific attribute

| Attribute | Value | Description                                                                       |
| --------- | ----- | --------------------------------------------------------------------------------- |
| dir       | ltr   | rtl Required. Specifies the text direction of the text inside the `<bdo>` element |

&nbsp;

# Global attribute:

> The `<bdo>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute:

> The `<bdo>` tag supports the Event attributes in HTML.
