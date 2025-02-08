# Overview

- [Overview](#overview)
- [Introduction](#introduction)
  - [Note](#note)
- [Syntax](#syntax)
- [Example](#example)
  - [Step 1: Define the function](#step-1-define-the-function)
  - [Step 2: Add markup](#step-2-add-markup)
    - [TIP](#tip)
  - [Step 3: Export the component](#step-3-export-the-component)
- [Types of components](#types-of-components)
- [Naming Rule](#naming-rule)

&nbsp;

&nbsp;

&nbsp;

# Introduction

A component is a piece of the UI (user interface) that has its own logic and appearance.

React component is a JavaScript function where we can embed markup or return markup.

A component can be as small as a button, or as large as an entire page.

React component is mainly used to reuse UI elements for your app.

&nbsp;

## Note

React application begins at a `“root”` component. Usually, it is created automatically in `index.js` when we start a new project.

&nbsp;

&nbsp;

# Syntax

```js
function Component_name() {
  return (

  );
}

export default Component_name;
```

# Example

```js
function App() {
  return <div>Hello World</div>;
}

export default App;
```

&nbsp;

## Step 1: Define the function

With `function App() { }` you define a JavaScript function with the name `App`.

## Step 2: Add markup

The component returns an `<div></div>` tag. `<div></div>` is written like HTML, but it is actually JavaScript under the hood! This syntax is called **_JSX_**, and it lets you embed markup inside JavaScript.

### TIP

The `return` statement must be wrapped in a pair of parentheses. Without parentheses, any code on the lines after return will be ignored!

## Step 3: Export the component

The `export default` prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files.

&nbsp;

&nbsp;

# Types of components

There are two types of components in react

1. Class based components
2. Function Based components

&nbsp;

&nbsp;

# Naming Rule

React components are regular JavaScript functions, but their names must start with a **capital letter** or they won’t work!

&nbsp;
&nbsp;

&nbsp;
&nbsp;

&nbsp;
