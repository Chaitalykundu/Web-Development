| Property     | Description | Default value |
| ------------ | ----------- | ------------- |
| border-block |             |               |

&nbsp;

&nbsp;

# Definition and Usage

The `border-block` property can be used to set the values for one or more of border-block-width, border-block-style, and border-block-color setting both the start and end in the block dimension at once.

It corresponds to the `border-top` and `border-bottom` or `border-right`, and `border-left` properties depending on the values defined for **writing-mode, direction, and text-orientation**
&nbsp;

&nbsp;

# Constituent properties

`border-block` property is a shorthand for the following CSS properties:

- border-block-color
- border-block-style
- border-block-width

&nbsp;

&nbsp;

# Syntax

```css
border-block: border-width border-style;
```

&nbsp;

&nbsp;

# Example

```css
border-block: dashed red;
writing-mode: vertical-rl;
```

&nbsp;

&nbsp;

|                    |                                                    |
| ------------------ | -------------------------------------------------- |
| Inherited:         | no                                                 |
| Animation type     | discrete                                           |
| Applies to         | all elements. It also applies to `::first-letter`. |
| JavaScript syntax: |                                                    |
|                    |                                                    |

&nbsp;

&nbsp;
