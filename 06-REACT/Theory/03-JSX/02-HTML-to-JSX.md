# Overview

- HTML code
- JSX Code
- he Rules of JSX

&nbsp;

&nbsp;

&nbsp;

[HTML to JSX converter](https://transform.tools/html-to-jsx)

&nbsp;

# HTML

```html
<h1>Hedy Lamarr's Todos</h1>
<img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" class="photo" />
<ul>
  <li>Invent new traffic lights</li>
  <li>Rehearse a movie scene</li>
  <li>Improve the spectrum technology</li>
</ul>
```

&nbsp;

&nbsp;

# JSX

We will convert the above HTML code to JSX inside TodoList component

```js
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
```

&nbsp;

&nbsp;

# The Rules of JSX

1. Return a single root element

   - To return multiple elements from a component, wrap them with a single parent tag for example `<div>` or use **_Fragment_** (`<>` and `</>`)

2. Close all the tags

3. camelCase in most of the things!
   - JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words. So camelCase should be used.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
