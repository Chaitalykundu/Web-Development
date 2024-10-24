# Overview

- [Overview](#overview)
- [Attributes](#attributes)
- [Syntax](#syntax)
- [Example](#example)
  - [Some points to remember](#some-points-to-remember)
- [Summary](#summary)

&nbsp;

&nbsp;

&nbsp;

# Attributes

- Attributes provide additional information about the contents of an element and control their behavior.

- Attributes are always specified in the opening tag

- Attributes usually come in name/value pairs like: `name="value"`

&nbsp;

&nbsp;

# Syntax

```html
<tag_name attribute_name="value">Content</tag_name>
```

&nbsp;

&nbsp;

# Example

```html
<img src="img_girl.jpg" width="500px" height="600px" alt="girl-image" />
```

here src, width, height and alt are attributes

&nbsp;

&nbsp;

## Some points to remember

- Attributes always come in name/value pairs like this: `attribute_name="value"`.

- Attributes are always added to the start tag of an HTML element.

- Attribute values should always be enclosed in quotes.Double style quotes (“ ”) are the most common, but single style quotes (‘ ’) are also allowed.

- In some rare situations, like when the attribute value itself contains quotes, it is necessary to use single quotes: `name='John "ShotGun"Nelson'and vice-versa`.

&nbsp;

&nbsp;

# Summary

- The `href` attribute of `<a>` specifies the URL of the page the link goes to

  ```html
  <a href="https://www.w3schools.com">Visit W3Schools</a>
  ```

&nbsp;

- The `src` attribute of `<img>` specifies the path to the image to be displayed

  ```html
  <img src="img_girl.jpg" />
  ```

&nbsp;

- The `width` and `height` attributes of `<img>` provide size information for images

  ```html
  <img src="img_girl.jpg" width="500" height="600" />
  ```

&nbsp;

- The `alt` attribute of `<img>` provides an alternate text for an image

  ```html
  <img src="img_girl.jpg" alt="Girl with a jacket" />
  ```

&nbsp;

- The `style` attribute is used to add styles to an element, such as color, font, size, and more

  ```html
  <p style="color:red;">This is a red paragraph.</p>
  ```

&nbsp;

- The `lang` attribute of the `<html>` tag declares the language of the Web page

  ```html
  <html lang="en"></html>
  ```

&nbsp;

- The `title` attribute defines some extra information about an element

  ```html
  <p title="I'm a tooltip">This is a paragraph.</p>
  ```

&nbsp;
