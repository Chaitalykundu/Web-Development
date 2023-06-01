| Property       | Description                                      | Default value |
| -------------- | ------------------------------------------------ | ------------- |
| letter-spacing | Specifies the space between characters in a text | normal        |

&nbsp;

&nbsp;

# Definition & usage

The `letter-spacing` property increases or decreases the space between characters in a text.

It modifies the space between the adjacent characters.

&nbsp;

&nbsp;

# Syntax

```css
letter-spacing: normal|length|initial|inherit;
```

&nbsp;

```css
/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

&nbsp;

&nbsp;

# Example

```css
h1 {
  letter-spacing: 3px;
}
```

&nbsp;

&nbsp;

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type     | a length                                                              |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.letterSpacing="3px"                                      |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property values

| Value   | Description                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------- |
| normal  | Defines normal space between characters.                                                                                  |
| length  | Defines a length that is used as the space between characters (negative values are also allowed). Read about length units |
| initial | Sets this property to its default value.                                                                                  |
| inherit | Inherits this property from its parent element                                                                            |
|         |
