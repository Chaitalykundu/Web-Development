# Overview

- Definition and Usage
- Syntax
- Example
- Attribute Values

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The `http-equiv` attribute provides an **HTTP header** for the information/value of the `content` attribute.

The `http-equiv` attribute can be used to simulate an HTTP response header.

&nbsp;

&nbsp;

# Syntax

```html
<meta http-equiv="content-security-policy|content-type|default-style|refresh" />
```

&nbsp;

&nbsp;

# Example

Refresh document every 30 seconds:

```html
<head>
  <meta http-equiv="refresh" content="30" />
</head>
```

&nbsp;

&nbsp;

# Attribute Values

| Value                   | Description                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| content-security-policy | Specifies a content policy for the document. Example: `<meta http-equiv="content-security-policy" content="default-src 'self'">`                                                                                                                                                                                                                                     |
| content-type            | Specifies the character encoding for the document. Example: `<meta http-equiv="content-type" content="text/html; charset=UTF-8">`                                                                                                                                                                                                                                    |
| default-style           | Specified the preferred style sheet to use. Example: `<meta http-equiv="default-style" content="the document's preferred stylesheet">` Note: The value of the content attribute above must match the value of the title attribute on a link element in the same document, or it must match the value of the title attribute on a style element in the same document. |
| refresh                 | Defines a time interval for the document to refresh itself.Example: `<meta http-equiv="refresh" content="300">` Note: The value `"refresh"` should be used carefully, as it takes the control of a page away from the user. Using "refresh" will cause a failure in W3C's Web Content Accessibility Guidelines.                                                      |
|                         |                                                                                                                                                                                                                                                                                                                                                                      |
