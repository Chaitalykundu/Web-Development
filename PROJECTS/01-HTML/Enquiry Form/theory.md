# Action

- The **_action_** attribute indicates where form data should be sent.

### Example :

```HTML
<form action="/submit-url"></form>
```

This tells the browser that the form data should be sent to the path `/submit-url`.

&nbsp;

&nbsp;

# legend

- The `<legend>` element acts as a caption for the content in the fieldset element. It gives users context about what they should enter into that part of the form.

### Example :

```html
<fieldset>
  <legend>Is your cat an indoor or outdoor cat?</legend>
  <label>
    <input id="indoor" type="radio" name="indoor-outdoor" value="indoor" />
    Indoor
  </label>
  <label>
    <input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor" />
    Outdoor
  </label>
</fieldset>
```

&nbsp;

&nbsp;

# `<input>` tag

- The `<input>` element allows you several ways to collect data from a web form.

- There are many kinds of inputs you can create using the **_type_** attribute. You can easily create a password field, reset button, or a control to let users select a file from their computer.

- In order for a form's data to be accessed by the location specified in the action attribute, you must give the text field a name attribute and assign it a value to represent the data being submitted. For example, you could use the following syntax for an email address text field:

  ```html
  <input type="text" name="email" />.
  ```

&nbsp;

&nbsp;

# `<label></label>` tag

- label elements are used to help associate the text for an input element with the input element itself (especially for assistive technologies like screen readers).

- Example:

```md
<label>
<input type="radio" /> cat
</label> makes it so clicking the word cat also
selects the corresponding radio button.
```

&nbsp;

&nbsp;

# checked attribute

In order to make a checkbox checked or radio button selected by default, you need to add the checked attribute to it.

There's no need to set a value to the checked attribute. Instead, just add the word checked to the input element, making sure there is space between it and other attributes.
