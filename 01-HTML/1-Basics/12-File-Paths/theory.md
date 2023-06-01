# File path / URL

- URL = Uniform Resource Locator

- A file path describes the location of a file in a web site's folder structure.

* File paths are used when linking to external files, like:

  - Web pages
  - Images
  - Style sheets
  - JavaScripts
  - Favicon

&nbsp;

&nbsp;

# Types of File Paths

There are two types of File Paths

- Absolute File Paths
- Relative File Paths

&nbsp;

# Absolute File Paths

- An absolute file path is the full address of a file.

* Example :

```html
<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain" />
```

&nbsp;

&nbsp;

# Relative File Paths

- A relative file path points to a file relative to the current page.

- In the following example, the file path points to a file in the images folder located at the root of the current web.

- Example

```html
<img src="/images/picture.jpg" alt="Mountain" />
```

&nbsp;

&nbsp;

| Path                              | Description                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| `<img src="picture.jpg">`         | The "picture.jpg" file is located in the same folder as the current page              |
| `<img src="images/picture.jpg">`  | The "picture.jpg" file is located in the images folder in the current folder          |
| `<img src="/images/picture.jpg">` | The "picture.jpg" file is located in the images folder at the root of the current web |
| `<img src="../picture.jpg">`      | The "picture.jpg" file is located in the folder one level up from the current folder  |
