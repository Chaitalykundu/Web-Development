# `box-shadow` Property

The `box-shadow` CSS property adds shadow effects around an element's frame.

&nbsp;

&nbsp;

# Syntax

```css
/* Keyword values */
box-shadow: none;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
box-shadow: 5px 10px;

/* offset-x | offset-y | color */
box-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
box-shadow: white 2px 5px;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 1px 1px 2px black;

/* color | offset-x | offset-y | blur-radius */
box-shadow: #fc0 1px 0 10px;

/* offset-x | offset-y | blur-radius | spread-radius |color */
box-shadow: 2px 2px 2px 10px green;

/* <inset> | <length> | <length> | <color> */
box-shadow: inset 50px 20px rgb(33, 222, 146);

/* `inset` Changes the shadow from an outer box-shadow to an inner box-shadow  */

/* Global values */
box-shadow: inherit;
box-shadow: initial;
box-shadow: revert;
box-shadow: revert-layer;
box-shadow: unset;
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

|                |                                                                                |
| -------------- | ------------------------------------------------------------------------------ |
| Initial value  | none                                                                           |
| Applies to     | all elements. It also applies to `::first-letter`.                             |
| Inherited      | no                                                                             |
| Computed value | any length made absolute; any specified color computed; otherwise as specified |
| Animation type | a shadow list                                                                  |

&nbsp;

&nbsp;

# Multiple Shadows

- When more than one shadow is given, shadows are applied front-to-back, with the first-specified shadow on top.

- To add more than one shadow to the box, you can add a comma-separated list of shadows.

&nbsp;

# Syntax :

```css
selector {
  box-shadow:
    value value blur_value color,
    value value blur_value color,
    ......;
}
```

&nbsp;

## Example 1:

The following example shows a red and blue neon glow shadow:

```css
h1 {
  box-shadow:
    0 0 3px #ff0000,
    0 0 5px #0000ff;
}
```

&nbsp;

## Example 2:

The following example shows a white box with black, blue, and darkblue shadow:

```css
h1 {
  color: white;
  box-shadow:
    1px 1px 2px black,
    0 0 25px blue,
    0 0 5px darkblue;
}
```

&nbsp;

&nbsp;

# box-shadow property to create a plain border

- You can also use the box-shadow property to create a plain border around some box (without shadows):

```css
h1 {
  color: coral;
  box-shadow:
    -1px 0 black,
    0 1px black,
    1px 0 black,
    0 -1px black;
}
```
