# Overview

- The src Attribute
- The alt Attribute
- Image Size - Width and Height
- Animated Images
- Image as a Link
- Image Floating

&nbsp;

&nbsp;

&nbsp;

# The src Attribute

The required `src` attribute specifies the **_path (URL) of the image_**.

&nbsp;

## Note

When a web page loads, the browser gets the image from a web server and inserts it into the page. Therefore, make sure that the image actually stays in the same spot in relation to the web page, otherwise your visitors will get a broken link icon.

The broken link icon and the alt text are shown if the browser cannot find the image.

&nbsp;

## Example

```html
<img src="img_chania.jpg" alt="Flowers in Chania" />
```

&nbsp;

&nbsp;

# The alt Attribute

- The required `alt` attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

- The value of the `alt` attribute should describe the image.

&nbsp;

## Example

```html
<img src="img_chania.jpg" alt="Flowers in Chania" />
```

&nbsp;

&nbsp;

# Image Size - Width and Height

You can use the `style` attribute to specify the `width` and `height` of an image.

## Example

```html
<img
  src="img_girl.jpg"
  alt="Girl in a jacket"
  style="width:500px;height:600px;"
/>
```

&nbsp;

Alternatively, you can use the `width` and `height` attributes:

## Example

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
```

- The `width` and `height` attributes always define the width and height of the image in `pixels`.

&nbsp;

&nbsp;

# Animated Images

- The extension of animated images is .gif

```html
<img src="programming.gif" alt="Computer Man" style="width:48px;height:48px;" />
```

&nbsp;

&nbsp;

# Image as a Link

- To use an image as a link, put the `<img>` tag inside the `<a>` tag:

&nbsp;

## Example

```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;" />
</a>
```

&nbsp;

&nbsp;

# Image Floating

- Use the CSS `float` property to let the image float to the right or to the left of a text:

&nbsp;

## Example

The image will float to the right of the text.

```html
<img src="smiley.gif" alt="Smiley face" style="float:right;" />
```

&nbsp;

The image will float to the left of the text.

```html
<img src="smiley.gif" alt="Smiley face" style="float:left;" />
```

&nbsp;

&nbsp;

&nbsp;

# Attributes

| Attribute      | Value                      | Description                                                                                                              |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| src            | URL                        | Specifies the path to the image                                                                                          |
| alt            | text                       | Specifies an alternate text for the image                                                                                |
| height         | pixels                     | Specifies the height of an image                                                                                         |
| width          | pixels                     | Specifies the width of an image                                                                                          |
| crossorigin    | anonymous                  | Allow images from third-party sites that allow cross-origin access to be used with canvas                                |
|                | use-credentials            |                                                                                                                          |
| ismap          | ismap                      | Specifies an image as a server-side image map                                                                            |
| loading        | eager                      | Specifies whether a browser should load an image immediately or to defer loading of images until some conditions are met |
|                | lazy                       |                                                                                                                          |
| longdesc       | URL                        | Specifies a URL to a detailed description of an image                                                                    |
| referrerpolicy | no-referrer                | Specifies which referrer information to use when fetching an image                                                       |
|                | no-referrer-when-downgrade |                                                                                                                          |
|                | origin                     |                                                                                                                          |
|                | origin-when-cross-origin   |                                                                                                                          |
|                | unsafe-url                 |                                                                                                                          |
| sizes          | sizes                      | Specifies image sizes for different page layouts                                                                         |
| srcset         | URL-list                   | Specifies a list of image files to use in different situations                                                           |
| usemap         | #mapname                   | Specifies an image as a client-side image map                                                                            |
|                |                            |                                                                                                                          |
