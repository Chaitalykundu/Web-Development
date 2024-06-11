# Overview

- What is !important?
- Syntax
- Example
- Important About !important
- Fair Uses of !important

&nbsp;

&nbsp;

# Chapter Summary

- The `!important` rule in CSS is used to add more importance to a property/value than normal.

&nbsp;

&nbsp;

&nbsp;

# What is !important?

The `!important` rule in CSS is used to add more importance to a property/value than normal.

&nbsp;

If you use the `!important` rule, it will override all previous styling rules for that specific property on that element!

&nbsp;

&nbsp;

# Syntax

```css
selector {
  property: value !important;
}
```

&nbsp;

&nbsp;

# Example

```css
p {
  background-color: gray;
}

p {
  background-color: red !important;
}
```

red will be executed.

&nbsp;

&nbsp;

# Important About !important

The only way to override an `!important` rule is to include another `!important` rule on a declaration with the same (or higher) specificity in the source code - and here the problem starts

&nbsp;

&nbsp;

# Fair Uses of !important

- One way to use `!important` is if you have to **override a style that cannot be overridden in any other way**. This could be if you are working on a Content Management System (CMS) and cannot edit the CSS code. Then you can set some custom styles to override some of the CMS styles.

- Another way to use `!important` is: Assume you want a special look for all buttons on a page. And it will be different from other pages
