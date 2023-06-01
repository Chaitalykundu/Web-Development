- The `<datalist>` tag specifies a list of pre-defined options for an `<input>` element.

- The `<datalist>` tag is used to provide an "autocomplete" feature for `<input>` elements. Users will see a drop-down list of pre-defined options as they input data.

- The `<datalist>` element's `id` attribute must be equal to the `<input>` element's `list` attribute (this binds them together).

&nbsp;

&nbsp;

# Example

```html
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser" />

<datalist id="browsers">
  <option value="Edge"></option>
  <option value="Firefox"></option>
  <option value="Chrome"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
</datalist>
```

&nbsp;

&nbsp;

# Specifications

|                   |           |
| ----------------- | --------- |
| Display / Element |           |
| Tag               | Container |
| Usage             |           |
|                   |           |

&nbsp;

&nbsp;

# Default CSS Settings

```css
datalist {
  display: none;
}
```

&nbsp;

&nbsp;

# Global Attributes

- The `<datalist>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

- The `<datalist>` tag also supports the Event Attributes in HTML.
