# Overview

- Definition and Usage
- Constituent properties
- Syntax
- Example
- Formal Definition
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- The `border-radius` property sets the rounded borders and provides the rounded corners around an element, tags, or div.

&nbsp;

&nbsp;

| Property      | Description                       | Default value |
| ------------- | --------------------------------- | ------------- |
| border-radius | add rounded borders to an element | 0             |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `border-radius` property sets the rounded borders and provides the rounded corners around an element, tags, or div.

&nbsp;

&nbsp;

# Constituent properties

`border-radius` property is a shorthand for the following CSS properties:

- border-top-left-radius
- border-top-right-radius
- border-bottom-right-radius
- border-bottom-left-radius

&nbsp;

&nbsp;

# Syntax

```css
border-radius: length | percentage;
```

There are **four** different syntaxes you can use with this property:

- <u>**the one-value syntax**</u>

  ```css
  /* all four sides */

  selector {
    border-radius: 10px;
  }
  ```

&nbsp;

- <u>**The two-value syntax**</u>

  ```css
  /* top-left-and-bottom-right | top-right-and-bottom-left */
  selector {
    border-radius: 10px 5%;
  }
  ```

&nbsp;

- <u>**The three-value syntax**</u>

  ```css
  /* top-left | top-right-and-bottom-left | bottom-right */
  selector {
    border-radius: 2px 4px 2px;
  }
  ```

&nbsp;

- <u>**The four-value syntax**</u>

  ```css
  /* top-left | top-right | bottom-right | bottom-left */
  border-radius: 1px 0 3px 4px;
  ```

- <u> **Global values**</u>

  ```css
  selector {
    border-radius: inherit;
    border-radius: initial;
    border-radius: revert;
    border-radius: revert-layer;
    border-radius: unset;
  }
  ```

&nbsp;

&nbsp;

# Formal definition

|                    |                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inherited:         | no                                                                                                                                                                |
| Animation type     | a length, percentage or calc();                                                                                                                                   |
| Applies to         | all elements. but User Agents are not required to apply to table and inline-table elements when border-collapse is collapse. It also applies to `::first-letter`. |
| JavaScript syntax: | object.style.borderRadius="5px"                                                                                                                                   |
|                    |                                                                                                                                                                   |

&nbsp;

&nbsp;

# Property Values

| Value   | Description                                     |
| ------- | ----------------------------------------------- |
| length  | Defines the shape of the corners.               |
| %       | Defines the shape of the corners in %           |
| initial | Sets this property to its default value.        |
| inherit | Inherits this property from its parent element. |
|         |                                                 |
