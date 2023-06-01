# Outline - Shorthand property

- outline-width
- outline-style (required)
- outline-color

&nbsp;

&nbsp;

The **outline** property is specified as one, two, or three values from the list above. The order of the values does not matter.

&nbsp;

# Note

None of the other outline properties (which you will learn more about in the next chapters) will have ANY effect unless the `outline-style` property is set!

&nbsp;

&nbsp;

# Syntax

```css
outline: outline-width outline-style outline-color | initial | inherit;
```

&nbsp;

&nbsp;

|                    |                                           |
| ------------------ | ----------------------------------------- |
| Inherited:         | no                                        |
| Animation type     | a length                                  |
| Applies to         | all elements                              |
| JavaScript syntax: | object.style.outline="#0000FF dotted 5px" |
|                    |
|                    |                                           |

&nbsp;

&nbsp;

# CSS outline Values

| Value         | Description                                     | Default value |
| ------------- | ----------------------------------------------- | ------------- |
| outline-width | Specifies the width of outline                  | medium        |
| outline-style | Specifies the style of the outline              | none          |
| outline-color | Specifies the color of the outline              | currentcolor  |
| initial       | Sets this property to its default value.        |
| inherit       | Inherits this property from its parent element. |
