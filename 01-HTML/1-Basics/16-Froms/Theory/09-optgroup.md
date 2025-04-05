# Overview

- Definition and Usage
- Syntax
- Example
- Default CSS Settings
- Specifications
- Tag-specific attributes
- Global attribute
- Event attribute

&nbsp;

&nbsp;

# Chapter Summary

| Tag / Attribute / Property | Description                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| `<optgroup>` tag           | used to group related `<options>` in a drop down list within `<select>` element. |
| Tag                        | Container                                                                        |
| Display / Element          | inline                                                                           |
| Usage                      | Forms and Inputs                                                                 |
|                            |                                                                                  |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

- HTML `<optgroup>` tag is used to group related `<options>` in a drop down list within `<select>` element.

- Using `<optgroup>` tag with `<select>` makes easier to access the dropdown list especially if list has large number of options.

&nbsp;

&nbsp;

# Syntax

```html
<optgroup label=" ">........</optgroup>
```

&nbsp;

&nbsp;

# Example

```html
<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>

  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
```

&nbsp;

&nbsp;

# Default CSS Settings

None

&nbsp;

&nbsp;

# Specifications

|                   |                  |
| ----------------- | ---------------- |
| Tag               | Container        |
| Display / Element | inline           |
| Usage             | Forms and Inputs |
|                   |                  |

&nbsp;

&nbsp;

# Tag-specific attributes:

| Attribute | Value    | Description                                                                                                 |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| disabled  | disabled | If it is set then options of that optgroup will be disabled.                                                |
| label     | text     | It defines the label for the group which will be displayed in the drop-down list. It is required attribute. |

&nbsp;

&nbsp;

# Global Attributes

The `<optgroup>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

The `<optgroup>` tag also supports the Event Attributes in HTML.

&nbsp;

&nbsp;
