# HTML `<form>` element

- The HTML `<form>` tag used to create an HTML form for user input.

* It provides various interactive controls for submitting information to web server such as text field, text area, password field, etc.

* The `<form>` element does not itself create a form but it is container to contain all required form elements, such as `<input>`, `<label>`, etc.

&nbsp;

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Display / Element |           |
| Tag               | Container |
| Usage             | Form      |
|                   |           |

&nbsp;

&nbsp;

# List of form elements

- Textbox input
- checkbox
- radio box
- Select box
- File select
- Hidden
- Click table buttons
- Submit & Reset
- textarea

&nbsp;

&nbsp;

# Default CSS Settings

```css
form {
  display: block;
  margin-top: 0em;
}
```

&nbsp;

&nbsp;

# Attributes

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
            <td>accept-charset </td>
            <td>character_set </td>
            <td>Specifies the character encodings that are to be used for the form submission</td>
        </tr>
        <tr>
            <td> action </td>
            <td> URL </td>
            <td> Specifies where to send the form-data when a form is submitted</td>
        </tr>
        <tr>
            <td rowspan="2">autocomplete</td>
            <td>on</td>
            <td rowspan="2">Specifies whether a form should have autocomplete on or off</td>
        </tr>
        <tr>
            <td>off</td>
        </tr>
        <tr>
            <td rowspan="3"> enctype</td>
            <td>application/x-www-form-urlencoded</td>
            <td rowspan="3">Specifies how the form-data should be encoded when submitting it to the (only for
                method="post")</td>
        </tr>
        <tr>
            <td>multipart/form-data</td>
        </tr>
        <tr>
            <td>text/plain</td>
        </tr>
        <tr>
            <td rowspan="2">method</td>
            <td>get</td>
            <td rowspan="2">Specifies the HTTP method to use when sending form-data</td>
        </tr>
        <tr>
            <td>post </td>
        </tr>
        <tr>
            <td>name </td>
            <td>text </td>
            <td>Specifies the name of a form</td>
        </tr>
        <tr>
            <td>novalidate </td>
            <td>novalidate </td>
            <td>Specifies that the form should not be validated when submitted</td>
        </tr>
        <tr>
            <td rowspan="10">rel</td>
            <td>external</td>
            <td rowspan="10">Specifies the relationship between a linked resource and the current document</td>
        </tr>
        <tr>
            <td>help</td>
        </tr>
        <tr>
            <td>license</td>
        </tr>
        <tr>
            <td>next</td>
        </tr>
        <tr>
            <td>nofollow</td>
        </tr>
        <tr>
            <td>noopener</td>
        </tr>
        <tr>
            <td>noreferrer</td>
        </tr>
        <tr>
            <td>opener</td>
        </tr>
        <tr>
            <td>prev</td>
        </tr>
        <tr>
            <td>search</td>
        </tr>
        <tr>
            <td rowspan="4">target</td>
            <td>_blank</td>
            <td rowspan="4">Specifies where to display the response that is received after submitting the form</td>
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
    </tbody>
</table>

&nbsp;

&nbsp;

# Global Attributes

- The `<form>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

- The `<form>` tag also supports the Event Attributes in HTML.
