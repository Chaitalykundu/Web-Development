# Overview

- Introduction
- Syntax
- Example
- Default CSS Settings
- Specifications
- Tag-specific attribute
- Common Image Formats
- Global attribute
- Event attribute

&nbsp;

&nbsp;

&nbsp;

# Summary

| Tag / Attribute / Property | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| `<img>` tag                | display image on the web page                                         |
| `src` attribute            | to define the `URL` of the image                                      |
| `alt` attribute            | to define an `alternate text` for an image, if it cannot be displayed |
| `width` attribute          | defines the width of the image                                        |
| `height` attribute         | defines the height of the image                                       |
| `float` property           | let the image float to the left or to the right                       |
|                            |                                                                       |

&nbsp;

&nbsp;

# Introduction

- HTML `<img>` tag is used to display image on the web page.

- Images are not technically inserted into a web page; they are linked to web pages.

- HTML `<img>` tag is an empty tag that contains attributes only.

&nbsp;

&nbsp;

# Syntax

```html
<img src="url" alt="alternateText" />
```

&nbsp;

&nbsp;

# Example

```html
<img src="good_morning.jpg" alt="Good Morning Friends" />
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
img {
  display: inline-block;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |              |
| ----------------- | ------------ |
| Tag               | Empty        |
| Display / Element | Inline-block |
| Usage             | Image        |
|                   |              |

&nbsp;

&nbsp;

# Tag-specific attribute

| Attribute      | Value                      | Description                                                                                                              |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| src            | URL                        | Specifies the path to the image                                                                                          |
| alt            | text                       | Specifies an alternate text for the image                                                                                |
| height         | pixels                     | Specifies the height of an image                                                                                         |
| width          | pixels                     | Specifies the width of an image                                                                                          |
| crossorigin    | anonymous                  | Allow images from third-party sites that allow cross-origin access to be used with canvas                                |
|                | use-credentials            |
| ismap          | ismap                      | Specifies an image as a server-side image map                                                                            |
| loading        | eager                      | Specifies whether a browser should load an image immediately or to defer loading of images until some conditions are met |
|                | lazy                       |
| longdesc       | URL                        | Specifies a URL to a detailed description of an image                                                                    |
| referrerpolicy | no-referrer                | Specifies which referrer information to use when fetching an image                                                       |
|                | no-referrer-when-downgrade |                                                                                                                          |
|                | origin                     |                                                                                                                          |
|                | origin-when-cross-origin   |                                                                                                                          |
|                | unsafe-url                 |                                                                                                                          |
| sizes          | sizes                      | Specifies image sizes for different page layouts                                                                         |
| srcset         | URL-list                   | Specifies a list of image files to use in different situations                                                           |
| usemap         | #mapname                   | Specifies an image as a client-side image map                                                                            |
|                |                            |

&nbsp;

&nbsp;

# Common Image Formats

Here are the most common image file types :

| Abbreviation | File Format                           | File Extension                   |
| ------------ | ------------------------------------- | -------------------------------- |
| APNG         | Animated Portable Network Graphics    | .apng                            |
| GIF          | Graphics Interchange Format           | .gif                             |
| ICO          | Microsoft Icon                        | .ico, .cur                       |
| JPEG         | Joint Photographic Expert Group image | .jpg, .jpeg, .jfif, .pjpeg, .pjp |
| PNG          | Portable Network Graphics             | .png                             |
| SVG          | Scalable Vector Graphics              | .svg                             |
|              |                                       |

&nbsp;

&nbsp;

# Global attribute

The `<img>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event attribute

The `<img>` tag also supports the Event Attributes in HTML.

&nbsp;
