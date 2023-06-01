- The `<details>` tag specifies additional details that the user can open and close on demand.

- The `<details>` tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.

- Any sort of content can be put inside the `<details>` tag.

&nbsp;

&nbsp;

# Tip

- The `<summary>` tag is used in conjunction with `<details>` to specify a visible heading for the details.

* The `<details>` tag wraps all the content which you want to show or hide and the `<summary>` tag contains the summary and the title of the section.

&nbsp;

&nbsp;

# Example

```html
<details>
  <summary>Copyright 2011-2014.</summary>
  <p>- by JavaTpoint. All Rights Reserved.</p>
  <p>
    All content and graphics on this web site are the property of the
    javatpoint.com
  </p>
</details>
<p>
  <b>Note:</b> The details tag is currently only supported in Opera, Chrome, and
  in Safari 6.
</p>
```

&nbsp;

&nbsp;

# Tag-Specific Attributes

| Attribute | Value | Description                                                     |
| --------- | ----- | --------------------------------------------------------------- |
| open      | open  | Specifies that the details should be visible (open) to the user |

&nbsp;

&nbsp;

# Default CSS Settings

```css
details {
  display: block;
}
```
