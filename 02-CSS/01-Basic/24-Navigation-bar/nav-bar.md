**_Navigation Bar = List of Links_**

A navigation bar needs standard HTML as a base.

&nbsp;

A navigation bar is basically a list of links, so using the `<ul>` and `<li>` elements makes perfect sense:

&nbsp;

## Example

```html
<ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
```

&nbsp;

Now let's remove the bullets and the margins and padding from the list:

```css
Example ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

&nbsp;

### Example explained:

`list-style-type: none;` - Removes the bullets.

A navigation bar does not need list markers
Set `margin: 0;` and `padding: 0;` to remove browser default settings

&nbsp;
