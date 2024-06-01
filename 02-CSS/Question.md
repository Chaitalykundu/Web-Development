# Introduction

1. What is CSS
2. Why do we use CSS
3. What is Selector
4. What is Declaration Block
5. What is Property and Value
6. How many types of selectors are there in CSS
7. What are the ways of inserting CSS
8. What is Inline CSS
9. What is Internal CSS
10. What is External CSS
11. What is comment
12. What is Cascading
13. Which one will get more preference between internal and external CSS

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# 1. What is cascade

```md
The cascade is the `algorithm` for solving conflicts where multiple CSS rules apply to an HTML element.
```

&nbsp;

&nbsp;

# 2. What is Margin Collapse

```md
**Top** and **bottom** margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

This does not happen on left and right margins! Only top and bottom margins!
```

&nbsp;

&nbsp;

# 3. What are the hover feature

```md
Change the color of the background and font.
Modify the opacity of the image.
Text embedding.
Create image rollover effects.
Swapping of images.
```

&nbsp;

&nbsp;

# 4. What is the difference between PX, EM and Percent?

```md
Pixel is a static measurement, while percent and EM are relative measurements. Percent depends on its parent font size. EM is relative to the current font size of the element (2em means 2 times the size of the current font). So, If the font size of body is 16 pixels, then 150% will be 24 pixels (1.5 _ 16), and 2em will be 32 pixels (16 _ 2).
```

&nbsp;

&nbsp;

# 5. What are Web Safe Fonts?

```md
Web safe fonts are fonts that are universally installed across all browsers and devices.

The following list are the best web safe fonts for HTML and CSS:

    Arial (sans-serif)
    Verdana (sans-serif)
    Tahoma (sans-serif)
    Trebuchet MS (sans-serif)
    Times New Roman (serif)
    Georgia (serif)
    Garamond (serif)
    Courier New (monospace)
    Brush Script MT (cursive)
```

&nbsp;

&nbsp;

# 6. what is scroll anchoring

```md
Scroll anchoring is a feature in the browser that prevents a viewable area that is scrolled into focus to move when new content is loaded above. This is typically a problem on a slow connection if the user scrolls down and starts reading before the page is fully loaded.
```

&nbsp;

&nbsp;

# 7. What is VH/VW (viewport height/ viewport width) in CSS?

```md
It’s a CSS unit used to measure the height and width in percentage with respect to the viewport. It is used mainly in responsive design techniques. The measure VH is equal to 1/100 of the height of the viewport. If the height of the browser is 1000px, 1vh is equal to 10px. Similarly, if the width is 1000px, then 1 vw is equal to 10px.
```

&nbsp;

&nbsp;

# 8. Difference between margin and padding?

| Margin                                                                       | Padding                                                                          |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| The outer space of an element, i.e. margin, is the space outside the border. | The inner space of an element, i.e.padding is space inside the element’s border. |
| It can be negative or any float number.                                      | It does not allow negative values                                                |
| We can set the margin to auto.                                               | We cannot set the padding to auto.                                               |
| Styling of an element such as background color does not affect the margin.   | Padding is affected by the styling of an element, such as background color.      |

&nbsp;

&nbsp;

# What are the different Box Sizing Properties?

The box-sizing CSS property sets how the total width and height of an element are calculated.

- `Content-box`: The default width and height values applyto the element's content only. The padding and border are added to the outside of the box.

- `Padding-box`: Width and height values apply to the element's content and its padding. The border is added to the outside of the box. Currently, only Firefox supports the padding-box value.

- `Border-box`: Width and height values apply to the content,padding and border
