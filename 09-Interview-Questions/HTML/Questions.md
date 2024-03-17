# 1. What does HTML stands for, What is HTML and what is its purpose?

```md
HTML stands for Hypertext Markup Language. 

It provides a way of displaying the web-pages with texts, images and other multimedia contents. It describes the structure of web pages.
```

### Purpose 

```md
HTML is used to create Web pages and tells the browser how to display them.

It designs the basic layout and formatting of Web pages. 

It provides a standard set of tags and attributes that web browsers interpret to display text, images, multimedia, forms and other elements on webpages.
```

&nbsp;

&nbsp;

# 2. Describe the basic structure of HTML document

The basic structure of HTML consists of `<!DOCTYPE html>`, `<html>`, `<head>` and `<body>` tags.

```html
<!DOCTYPE html>
<html >
  <head>
  </head>

  <body>
  </body>
</html>
```

- ***!DOCTYPE html***: This specifies the document type and version of HTML. It helps the browser to interprete and display the page correctly.

- ***html*** : This is the root element of a webpage, which contains all other webpages.

- ***head*** : It contains meta information of the webpage like title, character encoding, links to external stylesheets and scripts and other metadata.

- ***body*** : It contains the content of HTML document including text, images, links, forms, tables and other elements that will be displayed in the browser window.

&nbsp;

&nbsp;

# 1. Why do we use html5?

```md
HTML5 enables to create more interactive websites by embedding audio, video and graphics on the webpage.

The purpose of HTML5 is primarily to make it easier for web developers
```

&nbsp;

# 2. Why headings are so important?

```md
Because Search engines use the headings to index the structure and content of your web pages.

Users often skim a page by its headings. It is important to use headings to show the document structure.
```

&nbsp;

# 3. Difference between HTML `<br>` and `<br/>`

```md
In the original versions of HTML (up to HTML4), only `<br/>` is correct.

In XHTML (which is based on XML), only `<br/>` is correct.

In HTML5, both are allowed although `<br/>` is preferred.
```

&nbsp;

# 4. What is Nesting?

```md
HTML elements can be nested inside one another, which means an element can contain other elements.

This allows to create complex structure on a a web page
```

&nbsp;

# 5. What is the purpose of using `<div></div>` tag?

```md
The <div> tag is generally used by web developers to group HTML elements together and apply CSS styles to many elements at once.
```

&nbsp;

# 6. What is the difference between `<hr>` tag in HTML 4.01 and HTML5

- In HTML 4.01, the `<hr>` tag represents a **horizontal rule** while in HTML 5, it defines a **thematic break**. CSS is used in HTML5 instead of layout attributes.

&nbsp;

# 7. What is the difference between `<hr>` tag in HTML and XHTML

- In HTML `<hr>` tag need not to be closed whereas `<hr>` tag must be properly closed in XHTML.

&nbsp;

# 8. Difference between HTML **div** tag and **span** tag

| div tag                                                      | span tag                                                             |
| ------------------------------------------------------------ | -------------------------------------------------------------------- |
| HTML div is a block element.                                 | HTML span is an inline element                                       |
| HTML div element is used to wrap large sections of elements. | HTML span element is used to wrap small portion of texts, image etc. |

&nbsp;

# 9. What are the purpose of using `<span></span>` tag?

```md
1. To change the language of a part of the text.

2. To change the color, font, background of a part of text using CSS

3. To apply the scripts to the particular part of the text.
```

&nbsp;

# 10. What is the usefulness of address tag

```md
The `<address>` tag is useful for various contexts such as business contact information in the header of the page, or author related contact information, etc.
```

&nbsp;

# 11. How many types of cells in HTML?

```md
In an HTML table there are two types of cells:

1. Header cell - It contains the header information (created using <th> element)

2. Data Cells - It contains the main data of the table (created using <td> element).
```

&nbsp;

# 12. Differentiate `input` tag between HTML4.01 and HTML5

```md
HTML5 does not support "align" attribute. There are several new attributes for `<input>` tag in HTML5, and the type attribute has several new values.
```

&nbsp;

# 13. Differentiate `input` tag between HTML and XHTML

```md
In HTML, `<input>` tag is used without an end tag. In XHTML, the `<input>` tag must be properly closed.
```

&nbsp;

# 14. What is aspect ratio

```md
Aspect ratio of an image is the ratio of its height and width.

If we set one of height or width, the another will be set automatically & aspect ratio will be maintained.
```

&nbsp;

# 15. How to specify the starting number for list item?

Using `start` attribute we can specify the starting number for list item.

```html
<ol start="15">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
```

&nbsp;

# 16. How to specify the types of files user can upload?

Using `accept` attribute we can specify the types of files user can upload.

```html
<input type="file" accept=".jpg , .png">
```

&nbsp;

# 17. Are the HTML tags and elements the same thing?

```md
No. 
```

&nbsp;

# 18. What attributes are used to set the dimension of an image?

```md
height and width
```

&nbsp;

# 19. What is HTML form validation ? 

HTML form validation is a process of examining the HTML form page’s contents to avoid errored-out data being sent to the server. This process is a significant step in developing HTML-based web applications, as it can easily improve the quality of the web page or the web application. There are two ways to perform the HTML form Validation, and they are by Using HTML5 built-in functionality and by Using JavaScript.

&nbsp;

# 20. What is the usage of a novalidate attribute for the form tag that is introduced in HTML5? 
Its value is a boolean type that indicateswhether or not the data being submitted by the form will be validated beforehand. By making this false, forms can be submitted without validation which helps users to resume later also.

```html
<form action = "" method = "get"novalidate> 
  Name:<br>
  <input type="name" name="sname"><br> 
  Doubt:<br>
  <input type="number" name="doubt"><br> 
  <input type="submit" value="Submit"> 
</form>
```

&nbsp;

# 21. What are the different new form element types in HTML 5?

Following is a list of 10 frequently used new elements in HTML 5

- Color
- Date
- Datetime-local
- Email
- Time
- Url
- Number
- Search
- Range
- Telephone


&nbsp;

# 22. What is the use of the required attribute in HTML5?

```md
It forces a user to fill in text on the textfield or text area before submitting the form. It is used for form validation.
```

&nbsp;

# 23. What is a button tag?

```md
The button tag is used in HTML 5. It is used to create a clickable button within the HTML form on the web page. It is generally used to create a "submit" or "reset" button. Let's see the code to display the button.
```

&nbsp;

&nbsp;

&nbsp;
