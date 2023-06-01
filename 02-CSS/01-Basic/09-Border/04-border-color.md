| Property     | Description                  | Default value |
| ------------ | ---------------------------- | ------------- |
| border-color | set the color of the borders | currentcolor  |

&nbsp;

&nbsp;

# Definition and Usage

The `border-color` property is used to set the color of the four borders.

&nbsp;

# Note

If `border-color` is not set, it inherits the color of the element.

&nbsp;

&nbsp;

# Constituent properties

`border-color` property is a shorthand for the following CSS properties:

- border-bottom-color : currentcolor
- border-left-color : currentcolor
- border-right-color : currentcolor
- border-top-color : currentcolor

&nbsp;

&nbsp;

# Syntax

```css
selector {
  border-color: color | rgb | rgba | hex | hsl | hsla;
}
```

There are **four** different syntaxes you can use with this property:

- <u>**the one-value syntax**</u>

  ```css
  /* all four sides */
  selector {
    border-color: red;
  }
  ```

&nbsp;

- <u>**The two-value syntax**</u>

  ```css
  /* top and bottom | left and right */
  selector {
    border-color: red #f015ca;
  }
  ```

&nbsp;

- <u>**The three-value syntax**</u>

  ```css
  /* top | left and right | bottom */
  selector {
    border-color: red rgb(240, 30, 50, 0.7) green;
  }
  ```

&nbsp;

- <u>**The four-value syntax**</u>

  ```css
  /* top | right | bottom | left */
  selector {
    border-color: red yellow green blue;
  }
  ```

- <u> **Global values**</u>

  ```css
  selector {
    border-color: inherit;
    border-color: initial;
    border-color: revert;
    border-color: revert-layer;
    border-color: unset;
  }
  ```

&nbsp;

&nbsp;

# Formal definition

|                    |                                                    |
| ------------------ | -------------------------------------------------- |
| Inherited:         | no                                                 |
| Animation type:    | a color                                            |
| Applies to         | all elements. It also applies to `::first-letter`. |
| JavaScript syntax: | object.style.borderColor="#FF0000 blue";           |
|                    |                                                    |

&nbsp;

&nbsp;

# Property Values

See [Color](../03-Colors/00-theory.md) for values
