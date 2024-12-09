# All CSS Attribute Selectors

| Selector               | Example                | Example description                                                                       |
| ---------------------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| `[attribute]`          | `[target]`             | Selects all elements with a target attribute                                              |
| `[attribute=value]`    | `[target="_blank"]`    | Selects all elements with target="\_blank"                                                |
| `[attribute~=value]`   | `[title~="flower"]`    | Selects all elements with a title attribute containing the word "flower"                  |
| `[attribute\| =value]` | `[lang\| ="en"]`       | Selects all elements with a lang attribute value starting with "en"                       |
| `[attribute^=value]`   | `a[href^="https"]`     | Selects every `<a>` element whose href attribute value begins with "https"                |
| `[attribute$=value]`   | `a[href$=".pdf"]`      | Selects every `<a>` element whose href attribute value ends with ".pdf"                   |
| `[attribute*=value]`   | `a[href*="w3schools"]` | Selects every `<a>` element whose href attribute value contains the substring "w3schools" |

&nbsp;

&nbsp;

# [attribute=value]

Selects all elements with the given attribute and value pair

&nbsp;

## Example

```css
input[type="text"] {
  color: green;
}
```
