# Overview



| Tag      | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| `<link>` | Defines the relationship between a document and an external resource |

&nbsp;

Link tag is used to import any external file.

&nbsp;

- rel = relationship
- href = hypertext reference
- src = source

&nbsp;

&nbsp;

## import HTML file

- In order to load an HTML file, add a `<link>` tag with an `import` in the `rel` attribute and an `href` that contains a path to the HTML file.

&nbsp;

```html
<link rel="import" href="component.html" />
```

&nbsp;

## import CSS file

- `link` in html allows for easy embedding of stylesheets and JavaScripts needed in multiple documents.

```html
<link rel="stylesheet" href="css/style.css" />
```

&nbsp;

## import JS file

```html
<script src="js/script.js"></script>
```
