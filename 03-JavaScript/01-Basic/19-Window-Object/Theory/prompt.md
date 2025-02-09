# Overview

- [Overview](#overview)
- [Description](#description)
- [Note](#note)
- [Syntax](#syntax)
- [Parameters](#parameters)
- [Return Value](#return-value)
- [Example](#example)
- [Browser Support](#browser-support)

&nbsp;

&nbsp;

&nbsp;

# Description

The `prompt()` method displays a dialog box that prompts the user for input.

The `prompt()` method returns the input value if the user clicks "OK", otherwise it returns null.

&nbsp;

&nbsp;

# Note

A prompt box is used if you want the user to input a value.

When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.

Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.

&nbsp;

&nbsp;

# Syntax

```js
prompt(text, defaultText);
```

&nbsp;

&nbsp;

# Parameters

| Parameter   | Description                            |
| ----------- | -------------------------------------- |
| text        | Optional.                              |
|             | The text to display in the dialog box. |
| defaultText | Optional.                              |
|             | The default input text.                |

&nbsp;

&nbsp;

# Return Value

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| A string  | If the user clicks "OK", the input value is returned. |
|           | Otherwise null is returned.                           |

&nbsp;

&nbsp;

# Example

Prompt for a user name and output a message:

```js
let person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
  document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}
```

&nbsp;

```js
let text;
let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
switch (favDrink) {
  case "Coca-Cola":
    text = "Excellent choice. Coca-Cola is good for your soul.";
    break;
  case "Pepsi":
    text = "Pepsi is my favorite too!";
    break;
  case "Sprite":
    text = "Really? Are you sure the Sprite is your favorite?";
    break;
  default:
    text = "I have never heard of that one..";
}
```

&nbsp;

&nbsp;

# Browser Support

`prompt()` is supported in all browsers

&nbsp;

&nbsp;
