# Overview

Media queries allow you to apply CSS styles depending on a device's media type (such as print vs. screen) or other features or characteristics such as screen resolution or orientation, aspect ratio, browser viewport width or height, user preferences such as preferring reduced motion, data usage, or transparency.

It is a CSS technique introduced in CSS3.

It uses the `@media` rule to include a block of CSS properties only if a certain condition is true.

`@media` is the starting of writing media query

&nbsp;

&nbsp;

# Use of media queries

Media queries can be used to check many things, such as:

- width and height of the viewport
- orientation of the viewport (landscape or portrait)
- resolution

### N.B:

- If height > width = portrait
- If height < width = landscape

&nbsp;

Media queries are used for the following:

- To conditionally apply styles with the CSS `@media` and `@import at-rules`.

- To target specific media for the `<style>`, `<link>`, `<source>`, and other HTML elements with the media= or sizes=" attributes.

- To test and monitor media states using the `Window.matchMedia()` and `EventTarget.addEventListener()` methods.

&nbsp;

&nbsp;

# Media Query Syntax

A media query consists of a media type(optional) and can contain one or more media features, which resolve to either true or false.

```css
@media not|only mediatype and (media feature) and (media feature) {
  CSS-Code;
}
```

The mediatype is optional (if omitted, it will be set to all). However, if you use not or only, you must also specify a mediatype.

&nbsp;

&nbsp;

# Example:

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

&nbsp;

&nbsp;

# CSS Media Types

| Value  | Description                                           |
| ------ | ----------------------------------------------------- |
| all    | Used for all media type devices                       |
| print  | Used for print preview mode                           |
| screen | Used for computer screens, tablets, smart-phones etc. |

&nbsp;

&nbsp;

# Common Media Features

Here are some commonly used media features:

| Value       | Description                                        |
| ----------- | -------------------------------------------------- |
| orientation | Orientation of the viewport. Landscape or portrait |
| height      | Height of the viewport (including scrollbar)       |
| max -height | Maximum height of the viewport                     |
| min -height | Minimum height of the viewport                     |
| width       | Width of the viewport (including scrollbar)        |
| max -width  | Maximum width of the viewport                      |
| min -width  | Minimum width of the viewport                      |

&nbsp;

## Other media features are:

| Other Features                            |
| ----------------------------------------- |
| any-hover                                 |
| any-pointer                               |
| aspect-ratio                              |
| color                                     |
| color-gamut                               |
| color-index                               |
| device-aspect-ratio Deprecated            |
| device-height Deprecated                  |
| device-width Deprecated                   |
| display-mode                              |
| dynamic-range                             |
| forced-colors                             |
| grid                                      |
| height                                    |
| hover                                     |
| inverted-colors                           |
| monochrome                                |
| orientation                               |
| overflow-block                            |
| overflow-inline                           |
| pointer                                   |
| prefers-color-scheme                      |
| prefers-contrast                          |
| prefers-reduced-motion                    |
| prefers-reduced-transparency Experimental |
| resolution                                |
| scripting                                 |
| update                                    |
| video-dynamic-range                       |
| width                                     |

&nbsp;

&nbsp;

# Meaning of the `not`, `only`, and `and` keywords:

- **_not_**: This keyword inverts the meaning of an entire media query.

- **_only_**: This keyword prevents older browsers that do not support media queries from applying the specified styles. It has no effect on modern browsers.

- **_and_**: This keyword combines a media type and one or more media features.

&nbsp;

&nbsp;
