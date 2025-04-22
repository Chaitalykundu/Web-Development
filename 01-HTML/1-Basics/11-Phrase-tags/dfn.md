# `<dfn></dfn>` tag

- HTML `<dfn>` tag also called as HTML definition tag.

- It is used to represent the term which is defined within context of definition phrase or sentence in an HTML document.

&nbsp;

# Syntax

```html
<dfn>text..</dfn>content
```

&nbsp;

# Example

```html
<!-- 1. Just as the content of the <dfn> element:

 -->
<p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>

<!-- 2. Or, with the title attribute added:

 -->
<p>
  <dfn title="HyperText Markup Language">HTML</dfn> is the standard markup
  language for creating web pages.
</p>

<!-- 3. Or, with an <abbr> tag inside the <dfn> element:

 -->
<p>
  <dfn><abbr title="HyperText Markup Language">HTML</abbr></dfn> is the standard
  markup language for creating web pages.
</p>

<!-- 4. Or, with the id attribute added. Then, whenever a term is used, it can refer back to the definition with an <a> tag: -->
<p>
  <dfn id="html-def">HTML</dfn> is the standard markup language for creating web
  pages.
</p>

<p>This is some text...</p>
<p>This is some text...</p>
<p>Learn <a href="#html-def">HTML</a> now.</p>
```

&nbsp;

# Default CSS Settings

```css
dfn {
  font-style: italic;
}
```

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Display / Element | Inline    |
| Tag               | Container |
| Usage             | Textual   |
|                   |           |

&nbsp;

# Tag-specific attribute

| Attribute | Value | Description                                                                   |
| --------- | ----- | ----------------------------------------------------------------------------- |
| title     |       | It specifies the definition of the term, and it shows when mouse hover on it. |

&nbsp;

# Global attribute

> The `<dfn>` tag supports the Global attributes in HTML.

&nbsp;

# Event attribute

> The `<dfn>` tag supports the Event attributes in HTML.
