# Overview

- [Overview](#overview)
- [Nesting](#nesting)
- [Example](#example)
  - [What the browser sees](#what-the-browser-sees)
- [Don't](#dont)
- [Note](#note)

&nbsp;

&nbsp;

&nbsp;

# Nesting

Components are regular JavaScript functions, so you can keep multiple components in the same file. If any component is used inside another component then it is called nesting.

&nbsp;

<u>**_Parent component_**</u>: The component in which we nest another component is called parent component.

<u>**_Child component_**</u>: The component which is nested in parent component is called child component.

&nbsp;

# Example

In the following example we are nesting `Button` component to `App` component

```js
function Button() {
  return <button>I am button</button>;
}

function App() {
  return (
    <div>
      Hello World
      <Button />
    </div>
  );
}

export default App;
```

&nbsp;

The `Button` component is rendered inside `App`. So we can say that `App` is a **parent component**, and `Button` is a **child component**.

&nbsp;

&nbsp;

## What the browser sees

Notice the difference in casing:

- `<div></div>` is lowercase, so React knows we refer to an HTML tag.

- `<Button />` starts with a capital B, so React knows that we want to use our component called Button.

&nbsp;

&nbsp;

# Don't

Components can render other components, but you must never nest their definitions:

```js
function App() {
  // Never define a component inside another component!
  function Button() {
    // ...
  }
  // ...
}
```

&nbsp;

&nbsp;

# Note

When a child component needs some data from a parent, pass it by props instead of nesting definitions.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
