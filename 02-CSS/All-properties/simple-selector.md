# All CSS Simple Selectors

| Selector Name          | Syntax             | Example    | Example description                            |
| ---------------------- | ------------------ | ---------- | ---------------------------------------------- |
| id selector            | #id                | #firstname | Selects the element with id="firstname"        |
| class selector         | . class            | .intro     | Selects all elements with class="intro"        |
| element.class selector | element.class      | p.intro    | Selects only `<p>` elements with class="intro" |
| Universal selector     | \*                 | \*         | Selects all elements                           |
| Element selector       | element            | p          | Selects all `<p>` elements                     |
| Grouping Selector      | element,element,.. | div, p     | Selects all `<div>` and `<p>` elements         |

&nbsp;

&nbsp;

# The CSS id Selector

- The id selector uses the id attribute of an HTML element to select a specific element.

- The id of an element is **unique within a page**, so the id selector is used to select one unique element!

- To select an element with a specific id, write a **hash** (#) character, followed by the id of the element.

- **Note**: An id name cannot start with a number!

## Example

```css
#para1 {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;

# The CSS class Selector

- The class selector selects HTML elements with a specific class attribute.

- To select elements with a specific class, write a **period** (.) character, followed by the class name.

## Example

```css
.center {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;

# The CSS Universal Selector

- The universal selector (\*) selects all HTML elements on the page.

## Example

```css
* {
  text-align: center;
  color: blue;
}
```

&nbsp;

&nbsp;

# The CSS element Selector

- The element selector selects HTML elements based on the element name.

## Example

```css
p {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;

# The CSS Grouping Selector

- The grouping selector selects all the HTML elements with the same style definitions.

```css
h1,
h2,
p {
  text-align: center;
  color: red;
}
```

&nbsp;

&nbsp;
