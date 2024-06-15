# Overview

- Definition and Usage
- Syntax
- Example
- Default CSS Settings
- Specifications
- Global attribute
- Event attribute

&nbsp;

&nbsp;

# Chapter Summary

- The `<datalist>` tag specifies a list of pre-defined options for an `<input>` element.

- `list` is the required attribute for `<datalist>`

- The `<datalist>` element's `id` attribute must be equal to the `<input>` element's `list` attribute (this binds them together).

&nbsp;

&nbsp;

| Tag / Attribute / Property | Description                                                       |
| -------------------------- | ----------------------------------------------------------------- |
| `<datalist>` tag           | specifies a list of pre-defined options for an `<input>` element. |
| Tag                        | Container                                                         |
| Display / Element          | Inline                                                            |
| Usage                      | Input                                                             |
|                            |                                                                   |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

- The `<datalist>` tag specifies a list of pre-defined options for an `<input>` element.

- `list` is the required attribute for `<datalist>`

- The `<datalist>` tag is used to provide an "autocomplete" feature for `<input>` elements. Users will see a drop-down list of pre-defined options as they input data.

- The `<datalist>` element's `id` attribute must be equal to the `<input>` element's `list` attribute (this binds them together).

&nbsp;

&nbsp;

# Syntax

```html
<label for="for_value"></label>

<input list="id_name" name="" id="for_value" />

<datalist id="id_name">
  <option value=""></option>
  <option value=""></option>
</datalist>
```

&nbsp;

&nbsp;

# Example

```html
<label for="browser">Choose your browser from the list:</label>

<input list="browsers" name="browser" id="browser" />

<datalist id="browsers">
  <option value="Edge"></option>
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
datalist {
  display: none;
}
```

&nbsp;

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Tag               | Container |
| Display / Element | Inline    |
| Usage             | Input     |
|                   |           |

&nbsp;

&nbsp;

# Global Attributes

The `<datalist>` tag supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

The `<datalist>` tag supports the Event Attributes in HTML.
