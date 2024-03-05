# Overview

| Property | Description                              | Default value  |
| -------- | ---------------------------------------- | -------------- |
| display  | specifies if/how an element is displayed | inline / block |

&nbsp;

&nbsp;

# Definition & usage

The `display` property specifies if/how an element is displayed.

It specifies the display behavior (**the type of rendering box**) of an element.

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is **block** or **inline**.

&nbsp;

There are following CSS display values which are commonly used.

- display: inline;
- display: inline-block;
- display: block;
- display: flex;
- display: run-in;
- display: none;

&nbsp;

&nbsp;

# Note:

- div is a block element.

- span in an inline element

- If we set display:inline to it's css, it'll be inline element.

- We can't set height & width to display:inline css. To set height and width we have to use display:inline-block.

- If we do **display: none** then then content and spaced will be removed.

- But if we do **visibility: hidden** then the content will be hidden but the space will be there

&nbsp;

&nbsp;

# Syntax

```css
selector {
  display: value;
}
```

&nbsp;

```css
/* precomposed values */
selector {
  display: block;
  display: inline;
  display: inline-block;
  display: flex;
  display: inline-flex;
  display: grid;
  display: inline-grid;
  display: flow-root;
}

/* box generation */
selector {
  display: none;
  display: contents;
}

/* multi-keyword syntax */
selector {
  display: block flow;
  display: inline flow;
  display: inline flow-root;
  display: block flex;
  display: inline flex;
  display: block grid;
  display: inline grid;
  display: block flow-root;
}

/* other values */
selector {
  display: table;
  display: table-row; /* all table elements have an equivalent CSS display value */
  display: list-item;
}
/*Global values */

selector {
  display: inherit;
  display: initial;
  display: revert;
  display: revert-layer;
  display: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div {
  display: flex;
  flex-direction: row-reverse;
}
```

&nbsp;

&nbsp;

|                    |                             |
| ------------------ | --------------------------- |
| Inherited:         | no                          |
| Animation type :   | Not animatable              |
| Applies to         | all elements                |
| JavaScript syntax: | object.style.display="none" |
|                    |                             |

&nbsp;

&nbsp;

# Property values

| value              | Description                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inline             | Displays an element as an inline element (like `<span>`). **Any height and width properties will have no effect**                                           |
| block              | Displays an element as a block element (like `<p>`). It starts on a new line, and **takes up the whole width**                                              |
| inline-block       | Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can **apply height and width values** |
| flex               | Displays an element as a block-level flex container                                                                                                         |
| grid               | Displays an element as a block-level grid container                                                                                                         |
| contents           | Makes the container disappear, making the child elements children of the element the next level up in the DOM                                               |
| inline-flex        | Displays an element as an inline-level flex container                                                                                                       |
| inline-grid        | Displays an element as an inline-level grid container                                                                                                       |
| inline-table       | The element is displayed as an inline-level table                                                                                                           |
| list-item          | Let the element behave like a `<li>` element                                                                                                                |
| run-in             | Displays an element as either block or inline, depending on context                                                                                         |
| table              | It makes the element behave like a `<table>` element.                                                                                                       |
| table-caption      | It makes the element behave like a `<caption>` element.                                                                                                     |
| table-column-group | It makes the element behave like a `<colgroup>` element.                                                                                                    |
| table-header-group | It makes the element behave like a `<thead>` element.                                                                                                       |
| table-footer-group | It makes the element behave like a `<tfoot>` element.                                                                                                       |
| table-row-group    | It makes the element behave like a `<tbody>` element.                                                                                                       |
| table-cell         | It makes the element behave like a `<td>` element.                                                                                                          |
| table-row          | It makes the element behave like a `<tr>` element.                                                                                                          |
| table-column       | It makes the element behave like a `<col>` element.                                                                                                         |
| none               | The element is completely removed                                                                                                                           |
| initial            | Sets this property to its default value.                                                                                                                    |
| inherit            | Inherits this property from its parent element.                                                                                                             |

&nbsp;

&nbsp;
