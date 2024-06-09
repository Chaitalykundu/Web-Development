# Overview

- Definition and Usage
- Note
- Syntax
- Formal Definition
- Property Values

&nbsp;

&nbsp;

# Chapter Summary

- `Box model` describes the layout of the elements. The HTML elements are considered as boxes.

&nbsp;

&nbsp;

# Definition and Usage

`Box model` describes the layout of the elements. The HTML elements are considered as boxes.

The CSS **box model** is essentially a box that wraps around every HTML element.

It consists of: **margins**, **borders**, **padding**, and the actual **content**.

&nbsp;

# Note

When you set the `height` and `width` properties of an element with CSS, you just set the height and width of the content area. To calculate the full size of an element, you must also add padding, borders and margins.

&nbsp;

**Total element height** = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin

&nbsp;

**Total element width** = width + left padding + right padding + left border + right border + left margin + right margin

&nbsp;

<img src="../assets/box-model.png">

&nbsp;

&nbsp;

# Explanation of the different parts

- <u>Content</u> - The content of the box, where text and images appear
- <u>Padding </u> - Clears an area around the content. The padding is transparent
- <u>Border</u> - A border that goes around the padding and content
- <u>Margin</u> - Clears an area outside the border. The margin is transparent

&nbsp;

The box model allows us to add a border around elements, and to define space between elements.

&nbsp;

&nbsp;

# Content area

Material such as text, photographs, or other digital media is included in this area.

It is constrained by the information edge, and its proportions are dictated by the width and height of the content enclosure.

&nbsp;

# Padding area

This field requires the padding of the component. In essence, this area is the space around the subject area and inside the border-box. The height and the width of the padding box decide its proportions.

&nbsp;

# Margin Field

This segment consists of the area between **the boundary and the edge of the border**.

The proportion of the margin region is equal to the margin-box width and height. It is better to separate the product from its neighbor nodes.

&nbsp;

# Border Field

It is a region between the **padding-box and the margin**.

Its proportions are determined by the `width` and `height` of the boundary.
