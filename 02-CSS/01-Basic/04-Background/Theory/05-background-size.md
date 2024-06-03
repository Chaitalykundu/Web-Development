# Overview

- Definition and Usage
- Tip
- Syntax
- Example
- Specification
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `background-size` property specifies the size of the background images.

- There are **four** different syntaxes we can use with this property

- In **two-value syntax**, the first value: **width** of the image, and the second value: **height**

&nbsp;

&nbsp;

| Property        | Description                                 | Default value |
| --------------- | ------------------------------------------- | ------------- |
| background-size | Specifies the size of the background images | auto          |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `background-size` property specifies the size of the background images.

&nbsp;

# Tip

- When using a background image, use an image that does not disturb the text.

- Always set a `background-color` to be used if the image is unavailable.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  background-size: auto|length|percentage|cover|contain|initial|inherit;
}
```

&nbsp;

There are **four** different syntaxes you can use with this property:

- **The keyword syntax** ("auto", "cover" and "contain"),

- **the one-value syntax** (sets the width of the image (height becomes "auto")),

- **The two-value syntax** (first value: width of the image, second value: height)

- **The multiple background syntax** (separated with comma).

&nbsp;

&nbsp;

# Example

Specify the size of a `background-image` with "auto" :

```css
#example1 {
  background: url(mountain.jpg);
  background-repeat: no-repeat;
  background-size: auto;
}
```

&nbsp;

Specify the size of a `background-image` in pixels:

```css
#example2 {
  background: url(mountain.jpg);
  background-repeat: no-repeat;
  background-size: 300px 100px;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Default value:     | auto                                                                  |
| Inherited:         | no                                                                    |
| Animation type:    | yes                                                                   |
| Version:           | CSS1 + new values in CSS3                                             |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.backgroundSize="60px 120px""                             |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value      | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| auto       | The background image is displayed in its original size                                                                                  |
| length     | Sets the width and height of the background image.                                                                                      |
| percentage | Sets the width and height of the background image in percent of the parent element.                                                     |
| cover      | Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges |
| contain    | Resize the background image to make sure the image is fully visible                                                                     |
| initial    | Sets this property to its default value.                                                                                                |
| inherit    | Inherits this property from its parent element.                                                                                         |
|            |                                                                                                                                         |
