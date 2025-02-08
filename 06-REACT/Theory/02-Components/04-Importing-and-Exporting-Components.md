# Overview

- [Overview](#overview)
- [Root component file](#root-component-file)
- [Exporting and importing a component](#exporting-and-importing-a-component)
    - [Note](#note)
- [Default vs named exports](#default-vs-named-exports)
  - [Example](#example)
- [Ways of importing and exporting default and named component](#ways-of-importing-and-exporting-default-and-named-component)
- [Exporting and importing multiple components from the same file](#exporting-and-importing-multiple-components-from-the-same-file)

&nbsp;

&nbsp;

&nbsp;

# Root component file

React application begins at a `“root”` component. Usually, it is created automatically in `index.js` when we start a new project.

If you use a framework with file-based routing, such as `Next.js`, your root component will be different for every page.

&nbsp;

&nbsp;

# Exporting and importing a component

If we have multiple js file then we can `import` or `export` them for reusing.

```js
// Import component
import {Component_name} from 'file_name';

function Component_name() {
  return (
    .
    .
    .
  );
}

// Export component
export default Component_name;
```

### Note

We can skip file extension while importing.

&nbsp;

&nbsp;

# Default vs named exports

There are two primary ways to export values with JavaScript:

- default exports and
- named exports.

A file can have only one **default export**, but it can have as many **named exports** as you like.

&nbsp;

## Example

In the following example, I have defined one default function `App` and two named function `Button` and `Paragraph`

```js
function Button() {
  return <button>I am button</button>;
}

function Paragraph() {
  return <p>I am button</p>;
}

export default function App() {
  return (
    <div>
      Hello World
      <Button />
      <Paragraph />
    </div>
  );
}
```

&nbsp;

&nbsp;

# Ways of importing and exporting default and named component

| Syntax  | Export statement                            | Import statement                                 |
| ------- | ------------------------------------------- | ------------------------------------------------ |
| Default | export default function Component_name() {} | import Component_name from './file_name.js';     |
| Named   | export function Component_name() {}         | import { Component_name } from './file_name.js'; |
|         |                                             |

&nbsp;

&nbsp;

# Exporting and importing multiple components from the same file

If you want to show just one `Button` instead of a Multiple button, You can export the `Button` component, too. But App.js already has a default export, and you can’t have two default exports. You could create a new file with a default export, or you could add a named export for Button. A file can only have one default export, but it can have numerous named exports!

&nbsp;

&nbsp;

&nbsp;
