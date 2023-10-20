# input tag

- The `<input>` tag specifies an input field where the user can enter data.

- The `<input>` element is the most important form element.

- The `<input>` element can be displayed in several ways, depending on the type attribute.

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

# Specifications

|                   |            |
| ----------------- | ---------- |
| Display / Element | Inline     |
| Tag               | Empty      |
| Usage             | User input |
|                   |            |

&nbsp;

&nbsp;

# Types of input type attribute

HTML provides different types of input that you can use for different kinds of entries. By default, the value of type is `text`, which specifies that we want single-line text input.

NOTE : `type` attribute is mandatory
&nbsp;

Some more values for the type attribute are :

- submit
- email
- password
- date
- number
- range
- URL
- checkbox
- radio
- hidden
- time

&nbsp;

The different input types are referred in [input_types.html](input_types.html) file

For other attribute refer [w3school](https://www.w3schools.com/tags/tag_input.asp)

&nbsp;

&nbsp;

# Tip

- Always use the `<label>` tag to define labels for `<input type="text">`, `<input type="checkbox">`, `<input type="radio">`, `<input type="file">`, and `<input type="password">`.

- use the label element with _each input tag_.

&nbsp;

&nbsp;

# VS-code short-cut

```
input:type_name
```
