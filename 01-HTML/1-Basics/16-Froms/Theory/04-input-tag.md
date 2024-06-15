# Overview

- Definition and Usage
- Syntax
- Example
- Default CSS Settings
- Specifications
- Values of `type` attribute in input tag
- VS-code short-cut
- Global attribute
- Event attribute
- Input attributes

&nbsp;

&nbsp;

# Chapter Summary

| Tag / Attribute / Property | Description                                             |
| -------------------------- | ------------------------------------------------------- |
| `<input/>` tag             | specifies an input field where the user can enter data. |
| Tag                        | Empty                                                   |
| Display / Element          | Inline                                                  |
| Usage                      | User input                                              |
|                            |                                                         |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `<input>` tag specifies an input field where the user can enter data.

The `<input>` element is the most important form element.

The `<input>` element can be displayed in several ways, depending on the type attribute.

**`type` attribute is mandatory** in `<input>` tag.

&nbsp;

&nbsp;

# Tip

- Always use the `<label>` tag to define labels for `<input type="text">`, `<input type="checkbox">`, `<input type="radio">`, `<input type="file">`, and `<input type="password">`.

- use the `label` element with _each input tag_.

&nbsp;

&nbsp;

# Syntax

```html
<input type="" name="" placeholder="" .. other_attributes />
```

&nbsp;

&nbsp;

# Example

```html
<form action="#">
  First name:
  <input type="text" name="FirstName" placeholder="enter firstname..." /><br />
  Last name:
  <input type="text" name="LastName" placeholder="enter lastname..." /><br />
  <input type="submit" value="Submit" />
</form>
```

&nbsp;

&nbsp;

# Default CSS Settings

None

&nbsp;

&nbsp;

# Specifications

|                   |            |
| ----------------- | ---------- |
| Tag               | Empty      |
| Display / Element | Inline     |
| Usage             | User input |
|                   |            |

&nbsp;

&nbsp;

# Values of `type` attribute in `<input>` tag

HTML provides different types of input that you can use for different kinds of entries. By default, the value of type is `text`, which specifies that we want single-line text input.

**NOTE : `type` attribute is mandatory**

&nbsp;

Some more values for the type attribute are :

- password
- number
- radio
- checkbox
- email
- submit
- date
- range
- URL
- hidden
- time
- submit
- reset

&nbsp;

The different input types are referred in [input_type-attributes.html](./Attributes/input_type-attributes.md) file

For other attribute refer [w3school](https://www.w3schools.com/tags/tag_input.asp)

&nbsp;

&nbsp;

# VS-code short-cut

```md
input:type_name
```

&nbsp;

# Global Attributes

The `<input>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

The `<input>` tag also supports the Event Attributes in HTML.

&nbsp;

&nbsp;

# Input attributes

Refer the [input-attribute.html file](input-attribute.html)

&nbsp;

<table>
    <thead>
        <tr>
            <th>Attribute </th>
            <th>Value </th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="5">accept </td>
            <td>file_extension </td>
            <td rowspan="5">Specifies a filter for what file types the user can pick from the file input dialog box
                (only for
                type="file")</td>
        </tr>
        <tr>
            <td>audio/*</td>
        </tr>
        <tr>
            <td>video/*</td>
        </tr>
        <tr>
            <td>image/*</td>
        </tr>
        <tr>
            <td>media_type</td>
        </tr>
        <tr>
            <td> alt </td>
            <td> text </td>
            <td>Specifies an alternate text for images (only for type="image") </td>
        </tr>
        <tr>
            <td rowspan="2">autocomplete</td>
            <td>on</td>
            <td rowspan="2">Specifies whether an `input` element should have autocomplete enabled</td>
        </tr>
        <tr>
            <td>off</td>
        </tr>
        <tr>
            <td>autofocus</td>
            <td>autofocus</td>
            <td> Specifies that an input element should automatically get focus when the page loads</td>
        </tr>
        <tr>
            <td>checked</td>
            <td>checked</td>
            <td>Specifies that an input element should be pre-selected when the page loads (for type="checkbox" or
                type="radio")</td>
        </tr>
        <tr>
            <td>dirname </td>
            <td>inputname.dir </td>
            <td> Specifies that the text direction will be submitted</td>
        </tr>
        <tr>
            <td>disabled </td>
            <td>disabled </td>
            <td> Specifies that an input element should be disabled</td>
        </tr>
        <tr>
            <td>form</td>
            <td>form_id</td>
            <td> Specifies the form the input element belongs to</td>
        </tr>
        <tr>
            <td>formaction</td>
            <td>URL</td>
            <td> Specifies the URL of the file that will process the input control when the form is submitted (for
                type="submit" and type="image")</td>
        </tr>
        <tr>
            <td rowspan="3"> formenctype</td>
            <td>application/x-www-form-urlencoded</td>
            <td rowspan="3">Specifies how the form-data should be encoded when submitting it to the server (for
                type="submit" and type="image")</td>
        </tr>
        <tr>
            <td>multipart/form-data</td>
        </tr>
        <tr>
            <td>text/plain</td>
        </tr>
        <tr>
            <td rowspan="2">formmethod</td>
            <td>get</td>
            <td rowspan="2">Defines the HTTP method for sending data to the action URL (for type="submit" and
                type="image")</td>
        </tr>
        <tr>
            <td>post </td>
        </tr>
        <tr>
            <td>formnovalidate </td>
            <td>formnovalidate </td>
            <td>Defines that form elements should not be validated when submitted</td>
        </tr>
        <tr>
            <td rowspan="5">formtarget</td>
            <td>_blank</td>
            <td rowspan="5">Specifies where to display the response that is received after submitting the form (for
                type="submit" and type="image")</td>
        </tr>
        <tr>
            <td> _self </td>
        </tr>
        <tr>
            <td> _parent</td>
        </tr>
        <tr>
            <td> _top</td>
        </tr>
        <tr>
            <td>framename</td>
        </tr>
        <tr>
            <td>height </td>
            <td>pixels </td>
            <td>Specifies the height of an input element (only for type="image")</td>
        </tr>
        <tr>
            <td>type</td>
            <td>button</td>
            <td>Specifies the type input element to display</td>
        </tr>
    </tbody>

</table>
