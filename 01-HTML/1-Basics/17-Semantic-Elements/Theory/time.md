- The `<time>` tag defines a **specific time** (or datetime).

- The `datetime` attribute of this element is used translate the time into a machine-readable format so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results.

&nbsp;

&nbsp;

# Example

```html
<p>We open our shop at <time>09:00</time> am.</p>
<p>
  The business meeting is scheduled on
  <time datetime="2009-02-18">next wednesday</time>.
</p>
<p>
  The wedding of Salman's sister was scheduled at
  <time datetime="2014-11-19 T0 7:00-09:00">7pm last wednesday </time>.
</p>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
section {
  display: block;
}
```

&nbsp;

&nbsp;

# Tag-Specific Attributes

| Attribute | Value    | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| datetime  | datetime | Represent a machine-readable format of the `<time>` element |
