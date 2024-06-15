# Definition and Usage

The `action` attribute specifies where to send the form-data when a form is submitted.

&nbsp;

&nbsp;

# Syntax

```html
<form action="URL"></form>
```

&nbsp;

&nbsp;

# Attribute Values

| Value | Description                                                                                                                                                                                                                                                            |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| URL   | Where to send the form-data when the form is submitted. Possible values: **An absolute URL** - points to another web site (like `action="http://www.example.com/example.htm`") , **A relative URL** - points to a file within a web site (like `action="example.htm"`) |

&nbsp;

&nbsp;

# Example

On submit, send the form-data to a file named "`action_page.php`" (to process the input):

```html
<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="Submit" />
</form>
```

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
