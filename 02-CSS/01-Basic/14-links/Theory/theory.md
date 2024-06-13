# Overview

- Definition and Usage
- States
- Note
- Example

&nbsp;

&nbsp;

# Chapter Summary

- Links are used to **connect one page to other web pages**.

- `a:hover` must come after `a:link` and `a:visited`

- `a:active` must come after the `a:hover` in order to be effective.

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

Links are used to **connect one page to other web pages**.

Links can be styled with any CSS property (e.g. **color**, **font-family**, **background**, etc.).

&nbsp;

&nbsp;

# States

We can set some **states** of the hyperlink that are as follows:

| State     | Description                         | Default color       |
| --------- | ----------------------------------- | ------------------- |
| a:link    | a normal, unvisited link            | underlined & blue   |
| a:visited | a link the user has visited         | underlined & purple |
| a:hover   | a link when the user mouses over it | none                |
| a:active  | a link the moment it is clicked     | underlined & red    |
|           |                                     |                     |

&nbsp;

&nbsp;

# Note

`a:hover` must come after `a:link` and `a:visited`

`a:active` must come after the `a:hover` in order to be effective.

&nbsp;

To remove the underline from link, we can use the `text-decoration` property and set its value to **none**.

&nbsp;
&nbsp;

# Example

example of how to create link boxes/buttons:

```css
a:link,
a:visited {
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background-color: green;
  color: white;
}
```

&nbsp;
