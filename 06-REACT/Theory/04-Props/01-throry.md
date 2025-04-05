# Overview

[Free code camp documents](https://www.freecodecamp.org/news/how-to-use-props-in-reactjs/)

&nbsp;
&nbsp;

&nbsp;

# Introduction

`Props` stands for **Properties**

`Props` are objects.

`Props` are arguments passed into React components HTML attributes.

`Props` is a special keyword in React that is used for passing data from one component to another.

The important part here is that data with props are being passed in a unidirectional flow. This means it’s passed one way from parent to child.

&nbsp;

# Example

Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions. It uses the same syntax as HTML attributes

Add a "brand" attribute to the `Car` element:

```js
const myElement = <Car brand="Ford" />;
```

&nbsp;

&nbsp;

# How to Use Props

There are **two** steps to using React props:

1. Define an attribute and its value (data).
2. Pass it to the child component(s) by using props.

&nbsp;

## 1. Defining Attribute & Data

Here I’m declaring a `text` attribute to the `ChildComponent` and then assign a string value: `'I am the first child component'`.

```js
<ChildComponent text="I am the first child component" />
```

Now, the `ChildComponent` has a property and a value. Next, we need to pass it via props.

&nbsp;

## 2. Pass Data Using Props

```js
function ChildComponent(props) {
    return (
      <div>
        <p>Hello There! {props.text}</p>
      </div>
    )

export default ChildComponent;
```

&nbsp;

&nbsp;
&nbsp;
&nbsp;

# Familiar with props

Props are the information that you pass to a `JSX` tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an `<img>`:

&nbsp;

&nbsp;
&nbsp;

# Props are Read-Only

All React components must act like pure functions with respect to their props.

Whether you declare a component as a function or a class, it must never modify its own props.

Consider this sum function:

```js
function sum(a, b) {
  return a + b;
}
```

Such functions are called **“pure”** because they do not attempt to change their inputs, and always return the same result for the same inputs.

&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
