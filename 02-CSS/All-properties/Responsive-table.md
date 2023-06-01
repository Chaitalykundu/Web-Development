A responsive table will display a **_horizontal scroll bar_** if the screen is too small to display the full content

&nbsp;

Add a container element (like `<div>`) with `overflow-x:auto` around the `<table>` element to make it responsive

&nbsp;

## Example

```html
<div style="overflow-x:auto;">
  <table>
    ... table content ...
  </table>
</div>
```

&nbsp;

# Note

In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).

&nbsp;
&nbsp;
&nbsp;
&nbsp;
