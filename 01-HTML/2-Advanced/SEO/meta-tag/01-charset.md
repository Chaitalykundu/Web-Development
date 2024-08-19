# Overview

- Definition and Usage
- Syntax
- Example
- Attribute Values
- Note
- Applies to

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `charset` attribute specifies the **character encoding** for the HTML document.

The HTML5 specification encourages web developers to use the **UTF-8** character set, which covers almost all of the characters and symbols in the world!

Many other language does not support `UTF-8` for emojis. That time we have to use `UTF-16`.

&nbsp;

&nbsp;

# Syntax

```html
<meta charset="character_set" />
```

&nbsp;

&nbsp;

# Example

```html
<head>
  <meta charset="UTF-8" />
</head>
```

&nbsp;

&nbsp;

# Attribute Values

| Value         | Description                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| character_set | Specifies the character encoding for the HTML document. The HTML5 specification encourages web developers to use the UTF-8 character set! |
|               |                                                                                                                                           |

&nbsp;

&nbsp;

# Note

When used by the `<script>` element, the `charset` attribute specifies the character encoding used in an external script file

&nbsp;

# Applies to

The charset attribute can be used on the following elements:

| Elements   | Attribute | Example                                               |
| ---------- | --------- | ----------------------------------------------------- |
| `<meta>`   | charset   | `<meta charset="UTF-8">`                              |
| `<script>` | charset   | `<script src="js_filename" charset="UTF-8"></script>` |
|            |           |                                                       |
