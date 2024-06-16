# Overview

- Styling Input Fields
  - All input field
  - Specific input field
- Padded Inputs
- Bordered Inputs
- Colored Inputs
- Focused Inputs
- Input with icon/image
- Animated Search Input
- Styling Textareas
- Styling Select Menus
- Styling Input Buttons
- Responsive Form

&nbsp;

&nbsp;

# Chapter Summary

- We use **input[type="type_value"]** as selector to style specific input field

&nbsp;

&nbsp;

&nbsp;

# Styling Input Fields

## All input field

To apply css in **all input** field, just use `input` as selector

Use the `width` property to determine the **width** of the all `<input>` elements

&nbsp;

```css
input {
  width: 100%;
}
```

&nbsp;

## Specific input field

If you only want to style a specific input type, you can use attribute selectors:

- **input[type="text"]** - will only select text fields
- **input[type="password"]** - will only select password fields
- **input[type="number"]** - will only select number fields

&nbsp;

## Example

```css
input[type="password"] {
  background-color: antiquewhite;
}
```

&nbsp;

&nbsp;

# Padded Inputs

Use the `padding` property to add space inside the text field.

&nbsp;

When you have many inputs after each other, you might also want to add some `margin`, to add more space outside of them

&nbsp;

&nbsp;

# Bordered Inputs

Use the `border` property to change the **border size and color**, and use the `border-radius` property to add rounded corners

&nbsp;

## Example

```css
input[type="text"] {
  border: 2px solid red;
  border-radius: 4px;
}
```

&nbsp;

&nbsp;

# Colored Inputs

Use the `background-color` property to add a background color to the input, and the `color` property to change the text color

&nbsp;

## Example

```css
input[type="text"] {
  background-color: #3cbc8d;
  color: white;
}
```

&nbsp;

&nbsp;

# Focused Inputs

By default, some browsers will add a blue outline around the input when it gets focus (clicked on). You can remove this behavior by adding `outline: none;` to the input.

Use the `:focus` selector to do something with the input field when it gets focus

&nbsp;

## Example

```css
input[type="text"]:focus {
  background-color: lightblue;
}
```

&nbsp;

&nbsp;

# Input with icon/image

If you want an icon inside the input, use the `background-image` property and position it with the `background-position` property.

Also notice that we add a large left padding to reserve the space of the icon

&nbsp;

## Example

```css
input[type="text"] {
  background-color: white;
  background-image: url("https://picsum.photos/200");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}
```

&nbsp;

&nbsp;

# Animated Search Input

In this example we use the CSS `transition` property to animate the width of the search input when it gets focus.

## Example

```css
input[type="text"] {
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  width: 100%;
}
```

&nbsp;

&nbsp;

# Styling Textareas

Use the `resize` property to prevent textareas from being resized (disable the "grabber" in the bottom right corner)

&nbsp;

## Example

```css
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
```

&nbsp;

&nbsp;

# Styling Select Menus

## Example

```css
select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}
```

&nbsp;

&nbsp;

# Styling Input Buttons

## Example

```css
input[type="button"],
input[type="submit"],
input[type="reset"] {
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
```

**Tip: use width: 100% for full-width buttons**

&nbsp;

&nbsp;

# Responsive Form

Resize the browser window to see the effect. When the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other.
