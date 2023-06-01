| Property   | Description                                    | Default value |
| ---------- | ---------------------------------------------- | ------------- |
| visibility | specifies whether an element is visible or not | visible       |

&nbsp;

&nbsp;

# Definition & usage

The `visibility` property specifies whether an element is visible or not

&nbsp;

# Tip

Hidden elements take up space on the page. Use the display property to both hide and remove an element from the document layout!

&nbsp;

&nbsp;

# Syntax

```css
selector {
  visibility: visible|hidden|collapse|initial|inherit;
}
```

&nbsp;

```css
/* keyword syntax */
selector {
  visibility: visible;
  visibility: hidden;
  visibility: collapse;
}

/*Global values */

selector {
  visibility: inherit;
  visibility: initial;
  visibility: revert;
  visibility: revert-layer;
  visibility: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
h2.a {
  visibility: visible;
}

h2.b {
  visibility: hidden;
}
```

&nbsp;

&nbsp;

|                    |                                  |
| ------------------ | -------------------------------- |
| Inherited:         | yes                              |
| Animation type :   | a visibility                     |
| Applies to         | all elements                     |
| JavaScript syntax: | object.style.visibility="hidden" |
|                    |                                  |

&nbsp;

&nbsp;

# Property values

| value    | Description                                                                                                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| visible  | Default value. The element is visible                                                                                                                                                                                                                                                                                          |
| hidden   | The element is hidden (but still takes up space)                                                                                                                                                                                                                                                                               |
| collapse | Only for table rows (`<tr>`), row groups (`<tbody>`), columns (`<col>`), column groups (`<colgroup>`). This value removes a row or column, but it does not affect the table layout. The space taken up by the row or column will be available for other content. If collapse is used on other elements, it renders as "hidden" |
| initial  | Sets this property to its default value.                                                                                                                                                                                                                                                                                       |
| inherit  | Inherits this property from its parent element.                                                                                                                                                                                                                                                                                |

&nbsp;

&nbsp;
