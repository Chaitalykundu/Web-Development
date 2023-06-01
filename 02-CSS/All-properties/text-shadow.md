| Property    | Description         | Default value |
| ----------- | ------------------- | ------------- |
| text-shadow | adds shadow to text | none          |

&nbsp;

&nbsp;

# Definition & usage

The `text-shadow` property adds shadow to text.

&nbsp;

# Note

It accepts the comma-separated list of shadows that applied to the text.

It applies one or more than one `text-shadow` effect on the element's text content.

&nbsp;

Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.

&nbsp;

&nbsp;

# Syntax

```css
text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;
```

&nbsp;

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: revert;
text-shadow: revert-layer;
text-shadow: unset;
```

&nbsp;

&nbsp;

# Example

```css
h1 {
  text-shadow: 2px 2px #ff0000;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type     | a shadow list                                                         |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.textShadow="2px 5px 5px red"                             |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value       | Description                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| h-shadow    | Required. The position of the horizontal shadow. Negative values are allowed                             |
| v-shadow    | Required. The position of the vertical shadow. Negative values are allowed                               |
| blur-radius | Optional. The blur radius. Default value is 0                                                            |
| color       | Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values |
| none        | No shadow                                                                                                |
| initial     | Sets this property to its default value.                                                                 |
| inherit     | Inherits this property from its parent element                                                           |
