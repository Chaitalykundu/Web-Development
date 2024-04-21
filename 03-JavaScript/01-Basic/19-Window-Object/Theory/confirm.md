# Description

The `confirm()` method displays a dialog box with a message, an `OK` button, and a `Cancel` button.

The `confirm()` method returns true if the user clicked "OK", otherwise false.

&nbsp;

&nbsp;

# Note

A `confirm` box is often used if you want the user to verify or accept something.

A `confirm` box takes the focus away from the current window, and forces the user to read the message.

Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.

&nbsp;

&nbsp;

# Syntax

```js
confirm(message);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                            |
| ----------- | -------------------------------------- |
| message        | Optional.                              |
|             | The text to display in the confirm box.|

&nbsp;

&nbsp;

# Return Value

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| A boolean  | true if the user clicked OK, otherwise false.  |

&nbsp;

&nbsp;

# Example

Prompt for a user name and output a message:

```js
let text;
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}
document.write(text)
```

&nbsp;

&nbsp;

# Browser Support

`confirm()` is supported in all browsers

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
