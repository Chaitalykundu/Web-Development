# `<q></q>` tag

- The `<q>` tag defines a short quotation.

* Browsers normally insert quotation marks around the quotation.

* This is a **container tag and inline element**

&nbsp;

# Syntax :

```html
<p>Content<q>Quoted text</q></p>
```

&nbsp;

# Example :

```html
<p>Dr. Seuss once said : <q>Reality is finally better than your dreams.</q></p>
```

&nbsp;

# Default CSS Settings

```css
q {
  display: inline;
}

q:before {
  content: open-quote;
}

q:after {
  content: close-quote;
}
```

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Display / Element | Inline    |
| Tag               | Container |
| Usage             | -----     |
|                   |           |

&nbsp;

# Tag-specific attribute

| Attribute | Value | Description                           |
| --------- | ----- | ------------------------------------- |
| cite      | URL   | Specifies the source URL of the quote |
|           |       |                                       |

&nbsp;

# Global attribute:

> The `<q>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute:

> The `<q>` tag supports the Event attributes in HTML.
