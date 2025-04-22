# Inheritance in CSS

CSS rule sets cascade down the CSS hierarchy from parent selectors to their children selectors. These CSS rule sets are inherited from their parent selectors. If the CSS property is not specified, the child element will naturally inherit a CSS property with its value from the parent element.

&nbsp;

```html
<div id="Parent">
  Parent Div
  <div id="Child1">Child Div-I</div>
  <div id="Child2">Child Div-II</div>
</div>
```

```css
#Parent {
  color: red;
}
```

- Whole text will be red in color.

&nbsp;

&nbsp;

CSS Properties which can be inherited

- font-size
- font-family
- font-weight
- color

&nbsp;

CSS Properties that can’t be inherited

- height
- width
- border
- margin
- padding etc.

There is a way by which these properties can also be inherited. For that, we need to use the inherit keyword.

&nbsp;

&nbsp;

# inherit keyword

The inherit keyword specifies that a property should inherit its value from its parent element. The inherit keyword can be used for any CSS property and on any HTML element.

&nbsp;

```html
<div id="Parent">
  Parent Div
  <div id="Child1">Child Div-I</div>
  <div id="Child2">Child Div-II</div>
</div>
```

```css
#Parent {
  height: 100px;
  color: red;
}

#Child1 {
  height: inherit;
}
```

## NOTE

Only direct child elements can inherit a CSS property from its parent element using the `inherit` value if the CSS property is set by its parent element. This is to ensure that the CSS property to be inherited is inheritable.
