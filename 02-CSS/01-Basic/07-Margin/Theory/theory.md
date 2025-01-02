# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [CSS Margin Properties](#css-margin-properties)
- [Definition and Usage](#definition-and-usage)
- [Syntax](#syntax)
- [Margin: Shorthand Property](#margin-shorthand-property)
- [CSS Margin Values](#css-margin-values)
- [The `auto` Value](#the-auto-value)
- [Margin Collapse](#margin-collapse)
  - [Example](#example)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- CSS **Margin** property is used to define the space around elements.

- The margin property is a shorthand property for the following individual **margin** properties:

  - margin-top
  - margin-right
  - margin-bottom
  - margin-left

- You can set the margin property to **auto** to **horizontally center** the element within its container.

- Negative values are allowed in margin property

&nbsp;

&nbsp;

# CSS Margin Properties

| Property       | Description                                                                | Default value |
| -------------- | -------------------------------------------------------------------------- | ------------- |
| margin         | This property is used to set all the margin properties in one declaration. | 0             |
| margin- top    | Sets the top margin of an element                                          | 0             |
| margin- right  | Sets the right margin of an element                                        | 0             |
| margin- bottom | Sets the bottom margin of an element                                       | 0             |
| margin- left   | Sets the left margin of an element                                         | 0             |
|                |                                                                            |               |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

CSS **Margin** property is used to define the space around elements.

It is completely **transparent** and doesn't have any background color. It clears an area around the element.

Top, bottom, left and right margin can be changed independently using separate properties. You can also change all properties at once by using shorthand margin property.

&nbsp;

**_Tip: Negative values are allowed._**

&nbsp;

&nbsp;

# Syntax

```css
margin: length|auto|percentage|initial|inherit;
```

&nbsp;

&nbsp;

# Margin: Shorthand Property

The margin property is a shorthand property for the following individual **margin** properties:

- margin-top
- margin-right
- margin-bottom
- margin-left

&nbsp;

There are four ways to specify the margin property. You can use one of them.

- margin: 50px 100px 150px 200px;
- margin: 50px 100px 150px;
- margin: 50px 100px;
- margin 50px;

&nbsp;

&nbsp;

- margin: 50px 100px 150px 200px;

  - **top** margin value is 50px
  - **right** margin value is 100px
  - **bottom** margin value is 150px
  - **left** margin value is 200px

&nbsp;

- margin: 50px 100px 150px;

  - **top** margin value is 50px
  - **left** and **right** margin values are 100px
  - **bottom** margin value is 150px

&nbsp;

- **_margin_**: 50px 100px;

  - **top** and **bottom** margin values are 50px
  - **left** and **right** margin values are 100px

&nbsp;

- **_margin_**: 50px;

  - **top right bottom** and **left** margin values are 50px

&nbsp;

&nbsp;

# CSS Margin Values

| Value   | Description                                                                  |
| ------- | ---------------------------------------------------------------------------- |
| length  | It is used to specify a margin pt, px, cm, etc. its default value is 0px.    |
| auto    | This is used to let the browser calculate a margin.                          |
| %       | It is used to define a margin in percent of the width of containing element. |
| inherit | It is used to inherit margin from parent element.                            |

&nbsp;

&nbsp;

&nbsp;

# The `auto` Value

You can set the margin property to **auto** to **horizontally center** the element within its container.

The element will then take up the **specified width**, and the remaining space will be split equally between the left and right margins.

&nbsp;

&nbsp;

# Margin Collapse

**Top** and **bottom** margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

This does not happen on left and right margins! But only top and bottom margins!

&nbsp;

## Example

Demonstration of margin collapse:

```css
h1 {
  margin: 0 0 50px 0;
}
h2 {
  margin: 20px 0 0 0;
}
```

In the example above, the `<h1>` element has a bottom margin of 50px and the `<h2>` element has a top margin set to 20px.

Common sense would seem to suggest that the vertical margin between the `<h1>` and the `<h2>` would be a total of 70px (50px + 20px). But due to margin collapse, the actual margin ends up being 50px.

&nbsp;
