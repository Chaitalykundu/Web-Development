# Introduction

When an element or a component changes it's style from one to another, this process is called animation.

An animation lets an element gradually change from one style to another.

You can change as many CSS properties you want, as many times as you want.

To use CSS animation, you must first specify some **keyframes** for the animation.

Keyframes hold what styles the element will have at certain times.

&nbsp;

Animations consist of **two** components:

- a style describing the CSS animation
- a set of keyframes that indicate the start and end states of the animation's style, as well as possible intermediate waypoints.

&nbsp;

&nbsp;

# The @keyframes Rule

When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

&nbsp;

&nbsp;

# Example

```css
/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}

/* The animation code */
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
```

&nbsp;

In the example above we have specified when the style will change by using the keywords "from" and "to" (which represents 0% (start) and 100% (complete)).

&nbsp;

&nbsp;

&nbsp;

&nbsp;

| Property           | Description                                           | Default Value |
| ------------------ | ----------------------------------------------------- | ------------- |
| animation-duration | defines how long an animation should take to complete | 0s            |

&nbsp;

&nbsp;

&nbsp;

&nbsp;
