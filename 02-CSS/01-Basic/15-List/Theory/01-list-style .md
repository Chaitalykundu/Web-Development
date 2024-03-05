# Overview

| Property   | Description                                           | Default value     |
| ---------- | ----------------------------------------------------- | ----------------- |
| list-style | Sets all the properties for a list in one declaration | disc outside none |

&nbsp;

&nbsp;

# Definition & usage

The `list-style` property sets all the properties for a list in one declaration

&nbsp;

This is a shorthand for the following properties:

- list-style-type
- list-style-position
- list-style-image

&nbsp;

# Note

If one of the values are missing, the default value for that property will be used.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  list-style: list-style-type list-style-position
    list-style-image|initial|inherit;
}
```

&nbsp;

```css
/* type */
selector {
  list-style: square;
}

/* image */
selector {
  list-style: url("../img/shape.png");
}

/* position */
selector {
  list-style: inside;
}

/* type | position */
selector {
  list-style: georgian inside;
}

/* type | image | position */
selector {
  list-style: lower-roman url("../img/shape.png") outside;
}

/* Keyword value */
selector {
  list-style: none;
}

/* Global values */
selector {
  list-style: inherit;
  list-style: initial;
  list-style: revert;
  list-style: revert-layer;
  list-style: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
ul {
  list-style: square inside url("sqpurple.gif");
}
```

&nbsp;

&nbsp;

|                    |                                         |
| ------------------ | --------------------------------------- |
| Inherited:         | yes                                     |
| Animation type     | discrete                                |
| Applies to         | all elements                            |
| JavaScript syntax: | object.style.listStyle="decimal inside" |
|                    |                                         |

&nbsp;

&nbsp;

# Property value

| Property            | Values                                          | Default value |
| ------------------- | ----------------------------------------------- | ------------- |
| list-style-type     | Specifies the type of list-item marker.         | disc          |
| list-style-position | Specifies where to place the list-item marker.  | outside       |
| list-style-image    | Specifies the type of list-item marker.         | none          |
| initial             | Sets this property to its default value.        |
| inherit             | Inherits this property from its parent element. |
