| Property     | Description                           | Default value         |
| ------------ | ------------------------------------- | --------------------- |
| border-image | draws an image around a given element | none 100% 1 0 stretch |

&nbsp;

&nbsp;

# Definition and Usage

The `border-image` CSS property specifies an image to be used as the border around an element.

It replaces the element's regular border.

&nbsp;

&nbsp;

# Constituent properties

`border-image` property is a shorthand for the following CSS properties:

- border-image-source: none
- border-image-slice: 100%
- border-image-width: 1
- border-image-outset: 0
- border-image-repeat: stretch

&nbsp;

&nbsp;

# Syntax

```css
border-image: source slice width outset repeat|initial|inherit;
```

&nbsp;

&nbsp;

# Example

```css
#borderimg1 {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 50 round;
}
```

&nbsp;

&nbsp;

|                    |                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| Inherited:         | no                                                                                                                        |
| Animation type     | discrete                                                                                                                  |
| Applies to         | all elements, except internal table elements when `border-collapse` is **collapse**. It also applies to `::first-letter`. |
| JavaScript syntax: | object.style.borderImage="url(border.png) 30 round"                                                                       |
|                    |                                                                                                                           |

&nbsp;

&nbsp;

# Property Values

| Value               | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| border-image-source | The path to the image to be used as a border                            |
| border-image-slice  | How to slice the border image                                           |
| border-image-width  | The width of the border image                                           |
| border-image-outset | The amount by which the border image area extends beyond the border box |
| border-image-repeat | Whether the border image should be repeated, rounded or stretched       |
| initial             | Sets this property to its default value.                                |
| inherit             | Inherits this property from its parent element.                         |
