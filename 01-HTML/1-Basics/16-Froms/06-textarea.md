# Overview

- Introduction
- Use of textarea
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

| Tag / Attribute / Property | Description                            |
| -------------------------- | -------------------------------------- |
| `<textarea>` tag           | define a multi-line text input control |
| Tag                        | Container                              |
| Display / Element          | Inline                                 |
| Usage                      | User input                             |
|                            |                                        |

&nbsp;

&nbsp;

# `<textarea>..</textarea>` tag

- The HTML `<textarea>` tag is used to define a multi-line text input control.

- It can hold unlimited number of characters and the texts are displayed in a fixed-width font (usually courier).

- The size of the HTML textarea is defined by `<cols>` and `<rows>` attribute, or it can also be defined through CSS height and width properties.

- The `name` attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted).

- The `id` attribute is needed to associate the textarea with a label.

&nbsp;

&nbsp;

# Use

The `<textarea>` element is often used in a form, to collect user inputs like comments or reviews.

&nbsp;

&nbsp;

# Syntax

```html
<textarea rows="no_of_rows" cols="no_of_columns">Texts</textarea>
```

&nbsp;

&nbsp;

# Example

```html
<textarea rows="9" cols="70">
textarea tag example with rows and columns.  
</textarea>
```

&nbsp;

&nbsp;

# Default CSS Settings

None

&nbsp;

&nbsp;

# Tag-Specific Attributes

| Attributes  | Value            | Description                                                                     |
| ----------- | ---------------- | ------------------------------------------------------------------------------- |
| autofocus   | autofocus        | Specifies that a text area should automatically get focus when the page loads   |
| cols        | number           | Specifies the visible width of a text area                                      |
| dirname     | textareaname.dir | Specifies that the text direction of the textarea will be submitted             |
| disabled    | disabled         | Specifies that a text area should be disabled                                   |
| form        | form_id          | Specifies which form the text area belongs to                                   |
| maxlength   | number           | Specifies the maximum number of characters allowed in the text area             |
| name        | text             | Specifies a name for a text area                                                |
| placeholder | text             | Specifies a short hint that describes the expected value of a text area         |
| readonly    | readonly         | Specifies that a text area should be read-only                                  |
| required    | required         | Specifies that a text area is required/must be filled out                       |
| rows        | number           | Specifies the visible number of lines in a text area                            |
| wrap        | hard             | Specifies how the text in a text area is to be wrapped when submitted in a form |
| wrap        | Soft             | Specifies how the text in a text area is to be wrapped when submitted in a form |

&nbsp;

&nbsp;

# Global Attributes

- The `<textarea>` tag supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

- The `<textarea>` tag supports the Event Attributes in HTML.

&nbsp;

&nbsp;
