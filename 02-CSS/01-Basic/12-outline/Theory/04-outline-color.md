| Value         | Description                  | Default value                               |
| ------------- | ---------------------------- | ------------------------------------------- |
| outline-color | set the color of the outline | invert if supported, otherwise currentcolor |

&nbsp;

&nbsp;

# Definition and Usage

The `outline-color` property is used to set the color of the outline.

If `outline-color` is omitted, the color applied will be the color of the text.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  outline-color: invert|color|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

```css
p.ex1 {
  border: 2px solid black;
  outline-style: solid;
  outline-color: red;
}
```

&nbsp;

&nbsp;

|                    |                                     |
| ------------------ | ----------------------------------- |
| Inherited:         | no                                  |
| Animation type     | a color                             |
| Applies to         | all elements                        |
| JavaScript syntax: | object.style.outlineColor="#FF0000" |
|                    |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                                                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| invert  | Performs a color inversion. This ensures that the outline is visible, regardless of color background. Note: Browsers are not required to support this value. |
| color   | Specifies the color of the outline. Look at CSS Color Values for a complete list of possible color values.                                                   |
| initial | Sets this property to its default value.                                                                                                                     |
| inherit | Inherits this property from its parent element.                                                                                                              |
