# Overview

- Definition and Usage
- Tips and Notes
- Syntax
- Example
- Default CSS Settings
- Specifications
- Global attribute
- Event attribute

&nbsp;

&nbsp;

&nbsp;

# Summary

| Tag / Attribute / Property | Description                             |
| -------------------------- | --------------------------------------- |
| `<label>` tag              | defines a label for many form elements. |
| Tag                        | Container                               |
| Display / Element          | Inline                                  |
| Usage                      | User input                              |
|                            |                                         |

&nbsp;

&nbsp;

# Definition and Usage

The `<label>` tag defines a label for many form elements.

The `<label>` element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focuses on the input element.

The `<label>` element also helps users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the `<label>` element, it toggles the radio button/checkbox.

&nbsp;

&nbsp;

# Tips and Notes

- The `for` attribute of the `<label>` tag should be equal to the `id` attribute of the `<input>` element to bind them together.

- A label can also be bound to an element by placing the element inside the `<label>` element.

- We should use the label element with _each input tag_.

&nbsp;

&nbsp;

# Syntax

```html
<form>
  <label for="value">Label_name</label>
  <input type="" id="value" name="" />
</form>
```

&nbsp;

&nbsp;

# Example

```html
<form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" />
</form>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
label {
  cursor: default;
}
```

&nbsp;

&nbsp;

# Specification

|                   |            |
| ----------------- | ---------- |
| Tag               | Container  |
| Display / Element | Inline     |
| Usage             | User input |
|                   |            |

&nbsp;

&nbsp;

# Tag-Specific Attributes

| Attributes | Value      | Description                                             |
| ---------- | ---------- | ------------------------------------------------------- |
| for        | element_id | It defines the form element that a label is describing. |
| form       | form_id    | It defines a form to which a label belongs.             |
|            |            |                                                         |

&nbsp;

&nbsp;

# Global Attributes

The `<label>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

The `<label>` tag also supports the Event Attributes in HTML.
