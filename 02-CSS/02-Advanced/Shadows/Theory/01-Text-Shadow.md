# text-shadow Property

The CSS `text-shadow` property applies shadow to text.

&nbsp;

&nbsp;

# Syntax

```css
/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: revert;
text-shadow: revert-layer;
text-shadow: unset;
```

&nbsp;

&nbsp;

# Values

| value       | required / optional |
| ----------- | ------------------- |
| offset-x    | required            |
| offset-y    | required            |
| blur-radius | optional            |
| color       | optional            |

&nbsp;

&nbsp;

# Formal definition

|                |                                                                       |
| -------------- | --------------------------------------------------------------------- |
| Initial value  | none                                                                  |
| Applies to     | all elements. It also applies to `::first-letter` and `::first-line`. |
| Inherited      | yes                                                                   |
| Computed value | a color plus three absolute lengths                                   |
| Animation type | a shadow list                                                         |

&nbsp;

&nbsp;

# Multiple Shadows

- When more than one shadow is given, shadows are applied front-to-back, with the first-specified shadow on top.

- To add more than one shadow to the text, you can add a comma-separated list of shadows.

&nbsp;

# Syntax

```css
selector {
  text-shadow: value value blur_value color, value value blur_value color,
    ......;
}
```

&nbsp;

## Example 1:

The following example shows a red and blue neon glow shadow:

```css
h1 {
  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
}
```

&nbsp;

## Example 2:

The following example shows a white text with black, blue, and darkblue shadow:

```css
h1 {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
```

&nbsp;

&nbsp;

# text-shadow property to create a plain border

- You can also use the text-shadow property to create a plain border around some text (without shadows):

```css
h1 {
  color: coral;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
```
