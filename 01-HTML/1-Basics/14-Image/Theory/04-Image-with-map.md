# Overview

- Introduction
- Syntax
- Example
- Default CSS Settings
- Specifications
- Tag-specific attribute
- Global attribute
- Event attribute

&nbsp;

&nbsp;

&nbsp;

# Summary

| Tag / Attribute / Property | Description                                  |
| -------------------------- | -------------------------------------------- |
| `<map>` tag                | used to define an image map                  |
| `<area>` tag               | defines the clickable areas in the image map |
| `name` attribute           | Specifies the name of the image map          |
|                            |                                              |

&nbsp;

&nbsp;

# Introduction

- The `<map>` tag is used to define an image map.

- An image map is an **image with clickable areas**.

- The required name attribute of the `<map>` element is associated with the `<img>`'s usemap attribute and creates a relationship between the image and the map.

- The `<map>` element contains a number of `<area>` elements, that defines the clickable areas in the image map.

&nbsp;

&nbsp;

# Syntax

```html
<img
  src="image_file"
  alt="alternative_text"
  usemap="#same_value_as_name_attribute"
/>

<map name="same_value_as_usemap_attribute">
  <area shape="" coords="" alt="alternative_text" href="target_link" />
  <area shape="" coords="" alt="alternative_text" href="target_link" />
  <area shape="" coords="" alt="alternative_text" href="target_link" />
</map>
```

&nbsp;

&nbsp;

# Example

```html
<img
  src="workplace.jpg"
  alt="Workplace"
  usemap="#workmap"
  width="400"
  height="379"
/>

<map name="workmap">
  <area
    shape="rect"
    coords="34,44,270,350"
    alt="Computer"
    href="computer.htm"
  />
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
  <area
    shape="circle"
    coords="337,300,44"
    alt="Cup of coffee"
    href="coffee.htm"
  />
</map>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
img {
  display: inline;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Tag               | Container |
| Display / Element | Inline    |
| Usage             | Image     |
|                   |           |

&nbsp;

&nbsp;

# Tag-specific attribute

| Attribute | Value   | Description                         |
| --------- | ------- | ----------------------------------- |
| name      | mapname | Required                            |
|           |         | Specifies the name of the image map |
|           |         |                                     |

&nbsp;

&nbsp;

# Global attribute

The `<map>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event attribute

The `<map>` tag also supports the Event Attributes in HTML.

&nbsp;
