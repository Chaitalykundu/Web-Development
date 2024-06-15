# Overview

- Definition and Usage
- Syntax
- Default CSS Settings
- Specifications
- Tag-specific attribute
- Global attribute
- Event attribute

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

| Tag / Attribute / Property | Description                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| `<fieldset>` tag           | used to group the logically related fields/labels contained within an HTML form. |
| Tag                        | Container                                                                        |
| Display / Element          | Block                                                                            |
| Usage                      | Structural (Within HTML Form)                                                    |
|                            |                                                                                  |

&nbsp;

&nbsp;

# Definition and Usage

- HTML `<fieldset>` tag is used to group the logically related fields/labels contained within an HTML form.

- The use of this tag is optional while creating an HTML form but using `<fieldset>`, it is easy to understand the purpose of grouped elements of form.

- The `<legend>` tag is used with the `<fieldset>` element as a first child to **define the caption** for the grouped related fields.

&nbsp;

&nbsp;

# Syntax

```html
<fieldset>.....</fieldset>
```

&nbsp;

&nbsp;

# Specifications

|         |                               |
| ------- | ----------------------------- |
| Tag     | Container                     |
| Display | Block                         |
| Usage   | Structural (Within HTML Form) |
|         |                               |

&nbsp;

&nbsp;

# Default CSS Settings

```css
fieldset {
  display: block;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 0.35em;
  padding-bottom: 0.625em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border: 2px groove (internal value);
}
```

&nbsp;

&nbsp;

# Tag-specific attribute

| Attribute | Value    | Description                                                                                            |
| --------- | -------- | ------------------------------------------------------------------------------------------------------ |
| disabled  | disabled | It specifies that all form controls within the fieldset element are disabled.                          |
| form      | form_id  | It specifies the one or more form(s) to which fieldset controls belongs.                               |
| name      | text     | It specifies the name associated with fieldset. It will not display at the browser and useful with JS. |
|           |          |                                                                                                        |

&nbsp;

&nbsp;

# Global attribute

HTML `<fieldset>` tag supports the global attributes in HTML

&nbsp;

# Event attribute

HTML `<fieldset>` tag supports the event attributes in HTML.
