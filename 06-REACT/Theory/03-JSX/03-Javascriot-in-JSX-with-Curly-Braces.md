# Overview

- Where to use curly braces
- Passing strings with quotes

&nbsp;

&nbsp;

&nbsp;

JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place.

Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

&nbsp;

&nbsp;

# Where to use curly braces

You can only use curly braces in two ways inside JSX:

- **_As text directly inside a JSX tag_**: `<h1>{name}'s To Do List</h1>` works, `but <{tag}>Gregorio Y. Zara's To Do List</{tag}>` will not.

- **_As attributes immediately following the = sign_**: `src={avatar}` will read the avatar variable, but `src="{avatar}"` will pass the string `"{avatar}"`.

&nbsp;

&nbsp;

# Embedding Expressions in JSX

## Passing strings with quotes

When you want to pass a string attribute to JSX, you put it in single or double quotes:

```js
export default function App() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

Here, `"https://i.imgur.com/7vQD0fPs.jpg"` and `"Gregorio Y. Zara"` are being passed as strings.

But what if you want to dynamically specify the src or alt text? You could use a value from JavaScript by replacing `" "` with `{ }`

&nbsp;

```js
const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
const description = "Gregorio Y. Zara";

export default function App() {
  return (
    <img className="avatar" 
    src={avatar} 
    alt={description} />
  );
}
```

&nbsp;

&nbsp;

# Using curly braces: A window into the JavaScript world

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
