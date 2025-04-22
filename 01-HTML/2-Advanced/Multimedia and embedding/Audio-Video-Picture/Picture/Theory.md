# Overview

- `<picture>` : The Picture element
- Syntax
- Example
- When to use the Picture Element
- Global attribute
- Event attribute

&nbsp;

&nbsp;

&nbsp;

# `<picture>` : The Picture element

- The HTML `<picture>` element allows you to display different pictures for different devices or screen sizes.

- The `<picture>` element contains **zero or more `<source>` elements and one `<img>` element**, each referring to different images through the `srcset` attribute.

- Each `<source>` element has a `media` attribute that defines when the image is the most suitable.

- Instead of having one image that is scaled up or down based on the viewport width, multiple images can be designed to more nicely fill the browser viewport.

- The browser will consider each child `<source>` element and choose the best match among them. If no matches are found or the browser doesn't support the `<picture>` element, the URL of the `<img>` element's **src** attribute is selected.

&nbsp;

&nbsp;

# Note

Always specify an `<img>` element as the last child element of the `<picture>` element. The `<img>` element is used by browsers that do not support the `<picture>` element, or if none of the `<source>` tags match.

&nbsp;

&nbsp;

# Syntax

```html
<picture>
  <source media="" srcset="image_path" />
  <source media="" srcset="image_path" />
  <img src="image_path" alt="" />
</picture>
```

&nbsp;

&nbsp;

# Example

```html
<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg" />
  <source media="(min-width:465px)" srcset="img_white_flower.jpg" />
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;" />
</picture>
```

&nbsp;

&nbsp;

# When to use the **Picture** Element

There are two main purposes for the `<picture>` element:

1. **<u>Bandwidth</u>**: If you have a small screen or device, it is not necessary to load a large image file. The browser will use the first `<source>` element with matching attribute values, and ignore any of the following elements.

2. **<u>Format Support</u>**: Some browsers or devices may not support all image formats. By using the `<picture>` element, you can add images of all formats, and the browser will use the first format it recognizes, and ignore any of the following elements.

&nbsp;

&nbsp;

# Global attribute

> The `<picture>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<picture>` tag supports the Event attributes in HTML.
