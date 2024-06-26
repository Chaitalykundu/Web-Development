# Overview

- Definition and Usage
- Note
- Tips
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

| Tag / Attribute / Property | Description                           |
| -------------------------- | ------------------------------------- |
| `<select>` tag             | used to create a **_drop-down list_** |
| Tag                        | Container                             |
| Display / Element          | inline                                |
| Usage                      | Input                                 |
|                            |                                       |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

- The `<select>` element is used to create a **_drop-down list_**.

- The `<select>` element is most often used in a form, to collect user input.

- The `name` attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the drop-down list will be submitted).

- The `id` attribute is needed to associate the drop-down list with a label.

- The `<option>` tags inside the `<select>` element define the available options in the drop-down list.

- The `<optgroup>` element can be used for grouping related options in a list.

&nbsp;

&nbsp;

# Syntax

```html
<select>
  <option></option>
</select>
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

|                   |           |
| ----------------- | --------- |
| Tag               | Container |
| Display / Element | inline    |
| Usage             | Input     |
|                   |           |

&nbsp;

&nbsp;

# Tag-specific attributes

| Attribute | Value     | Description                                                                         |
| --------- | --------- | ----------------------------------------------------------------------------------- |
| autofocus | autofocus | This attribute let automatically focused the drop-down list on page load.           |
| disabled  | disabled  | It is used to disable the control and user cannot interact with the drop-down list. |
| form      | form-id   | It specifies one or more forms, to which select belong to.                          |
| multiple  | multiple  | If it sets then a user can select multiple options from the list.                   |
| name      | name      | It determines the name for the drop-down list.                                      |
| required  | required  | If it specified, user must select that field before submitting the form.            |
| size      | number    | It specifies the visible number of options in the list.                             |
|           |           |                                                                                     |

&nbsp;

&nbsp;

# Global Attributes

The `<select>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

The `<select>` tag also supports the Event Attributes in HTML.
