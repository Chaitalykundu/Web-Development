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

- HTML `<output>` tag is used to display the result of some calculation (performed by JavaScript) or the outcome of a user action (such as Input data into a form element).

&nbsp;

&nbsp;

| Tag / Attribute / Property | Description                                                                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<output>` tag             | used to display the result of some calculation (performed by JavaScript) or the outcome of a user action (such as Input data into a form element). |
| Tag                        | Container                                                                                                                                          |
| Display / Element          | inline                                                                                                                                             |
| Usage                      | Forms and Inputs                                                                                                                                   |
|                            |                                                                                                                                                    |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

- HTML `<output>` tag is used to display the result of some calculation (performed by JavaScript) or the outcome of a user action (such as Input data into a form element).

- The `<output>` tag is a newly added tag and was introduced in HTML5.

&nbsp;

&nbsp;

# Syntax

```html
<output>......</output>
```

&nbsp;

&nbsp;

# Example

```html
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50" />
  +<input type="number" id="b" value="25" /> =<output
    name="x"
    for="a b"
  ></output>
</form>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
output {
  display: inline;
}
```

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

# Tag-specific attributes

| Attribute | Value      | Description                                                                                                                                 |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| for       | element_id | It specifies the list of other element's ids which indicates the relationship between the result of the calculation and the input elements. |
| form      | form_id    | It specifies the form element to which this element is associated with.                                                                     |
| name      | name       | It defines the name for the output element.                                                                                                 |

&nbsp;

&nbsp;

# Global Attributes

- The `<output>` tag supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

- The `<output>` tag supports the Event Attributes in HTML.

&nbsp;

&nbsp;
