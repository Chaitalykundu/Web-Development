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

The `alert()` method displays an alert box with a message and an OK button.

The `alert()` method is used when you want information to come through to the user.

&nbsp;

&nbsp;

# Note

The alert box takes the focus away from the current window, and forces the user to read the message.

Do not overuse this method. It prevents the user from accessing other parts of the page until the alert box is closed.

&nbsp;

&nbsp;

# Syntax

```js
alert(message);
```

&nbsp;

&nbsp;

# Parameters

| Parameter | Description                           |
| --------- | ------------------------------------- |
| message   | Optional.                             |
|           | The text to display in the alert box. |

&nbsp;

&nbsp;

# Return Value

NONE

&nbsp;

&nbsp;

# Example

Display an alert box:

```js
alert("Hello! I am an alert box!!");
```

&nbsp;

Alert the hostname of the current URL:

```js
alert(location.hostname);
```

&nbsp;

&nbsp;

# Browser Support

`alert()` is supported in all browsers

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
