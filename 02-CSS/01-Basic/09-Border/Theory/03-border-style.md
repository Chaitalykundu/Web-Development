# Overview

- Definition and Usage
- Note
- Constituent properties
- Syntax
- Example
- Formal Definition
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `border-style` property specifies what kind of border to display.

- There are **four** different syntaxes you can use with this property

&nbsp;

&nbsp;

| Property | Description | Default value |
| ------------ | ------------------------------------------------- | ------------- |
| border-style | property specifies what kind of border to display | none |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `border-style` property specifies what kind of border to display.

&nbsp;

# Note

It is a **required** property

None of the other border properties will have any effect unless the `border-style` property is set.

&nbsp;

&nbsp;

# Constituent properties

`border-style` property is a shorthand for the following CSS properties:

- border-top-style: none;
- border-right-style: none;
- border-bottom-style: none;
- border-left-style: none;

&nbsp;

&nbsp;

# Syntax

There are **four** different syntaxes you can use with this property:

- <u>**the one-value syntax**</u>

  ```css
  /* all four sides */
  selector {
    border-style: none | dotted |dashed | solid | double | groove | ridge |
      inset | outset | hidden;
  }
  ```

&nbsp;

- <u>**The two-value syntax**</u>

  ```css
  /* top and bottom | left and right */
  selector {
    border-style: dotted solid;
  }
  ```

&nbsp;

- <u>**The three-value syntax**</u>

  ```css
  /* top | left and right | bottom */
  selector {
    border-style: hidden double dashed;
  }
  ```

&nbsp;

- <u>**The four-value syntax**</u>

  ```css
  /* top | right | bottom | left */
  selector {
    border-style: none solid dotted dashed;
  }
  ```

- <u> **Global values**</u>

  ```css
  selector {
    border-style: inherit;
    border-style: initial;
    border-style: revert;
    border-style: revert-layer;
    border-style: unset;
  }
  ```

&nbsp;

&nbsp;

# Formal Definition

|                    |                                          |
| ------------------ | ---------------------------------------- |
| Inherited:         | no                                       |
| Animation type:    | discrete                                 |
| Applies to         | all elements.                            |
| JavaScript syntax: | object.style.borderStyle="dotted double" |
|                    |                                          |

&nbsp;

&nbsp;

# Property Values

| Value  | Description                                                                          |
| ------ | ------------------------------------------------------------------------------------ |
| none   | It doesn't define any border.                                                        |
| dotted | It is used to define a dotted border.                                                |
| dashed | It is used to define a dashed border.                                                |
| solid  | It is used to define a solid border.                                                 |
| double | It defines two borders wIth the same border-width value.                             |
| groove | It defines a 3d grooved border. effect is generated according to border-color value. |
| ridge  | It defines a 3d ridged border. effect is generated according to border-color value.  |
| inset  | It defines a 3d inset border. effect is generated according to border-color value.   |
| outset | It defines a 3d outset border. effect is generated according to border-color value.  |
| hidden | Defines a hidden border                                                              |
|        |                                                                                      |
