# DOM Document

The `HTML DOM document object` is the owner of all other objects in your web page.

The document object represents your web page.

Whole document is a javascript object.

If you want to access any element in an HTML page, you always start with accessing the document object. (i.g : document.)

&nbsp;

&nbsp;

DOM provides several methods to find & manipulate the behavior of the HTML element:

# Finding HTML Elements

| Methods                               | Description                                                                                                                                   |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| document.getElementById(id)           | Find an element by element id                                                                                                                 |
| document.getElementsByTagName(name)   | Find elements by tag name                                                                                                                     |
| document.getElementsByClassName(name) | Find elements by class name                                                                                                                   |
| document.getElementsByName(name)      | Find elements by name                                                                                                                         |
| querySelector()                       | This method is used to return the first element that matches a specified CSS selector(s) in the document                                      |
| querySelectorAll()                    | This method is used to return a collection of an element’s child elements that match a specified CSS selector(s), as a static NodeList object |
|                                       |                                                                                                                                               |

&nbsp;

&nbsp;

# Changing HTML Elements

| Property                             | Description                                   |
| ------------------------------------ | --------------------------------------------- |
| element.innerHTML = new html content | Change the inner HTML of an element           |
| element.attribute = new value        | Change the attribute value of an HTML element |
| element.style.property = new style   | Change the style of an HTML element           |
|                                      |                                               |

&nbsp;

| Method                                 | Description                                   |
| -------------------------------------- | --------------------------------------------- |
| element.setAttribute(attribute, value) | Change the attribute value of an HTML element |
|                                        |                                               |

&nbsp;

&nbsp;

# Adding and Deleting Elements

| Method                          | Description                       |
| ------------------------------- | --------------------------------- |
| document.createElement(element) | Create an HTML element            |
| document.removeChild(element)   | Remove an HTML element            |
| document.appendChild(element)   | Add an HTML element               |
| document.replaceChild(new, old) | Replace an HTML element           |
| document.write(text)            | Write into the HTML output stream |
|                                 |                                   |

&nbsp;

&nbsp;

# Adding Events Handlers

| Method                                                 | Description                                   |
| ------------------------------------------------------ | --------------------------------------------- |
| document.getElementById(id).onclick = function(){code} | Adding event handler code to an onclick event |

&nbsp;

&nbsp;

# Finding HTML Objects

The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.

Later, in HTML DOM Level 3, more objects, collections, and properties were added.

| Property                     | Description                                                        | DOM |
| ---------------------------- | ------------------------------------------------------------------ | --- |
| document.anchors             | Returns all `<a>` elements that have a name attribute              | 1   |
| document.applets             | Deprecated                                                         | 1   |
| document.baseURI             | Returns the absolute base URI of the document                      | 3   |
| document.body                | Returns the `<body>` element                                       | 1   |
| document.cookie              | Returns the document's cookie                                      | 1   |
| document.doctype             | Returns the document's doctype                                     | 3   |
| document.documentElement     | Returns the `<html>` element                                       | 3   |
| document.documentMode        | Returns the mode used by the browser                               | 3   |
| document.documentURI         | Returns the URI of the document                                    | 3   |
| document.domain              | Returns the domain name of the document server                     | 1   |
| document.domConfig           | Obsolete.                                                          | 3   |
| document.embeds              | Returns all `<embed>` elements                                     | 3   |
| document.forms               | Returns all `<form>` elements                                      | 1   |
| document.head                | Returns the `<head>` element                                       | 3   |
| document.images              | Returns all `<img>` elements                                       | 1   |
| document.implementation      | Returns the DOM implementation                                     | 3   |
| document.inputEncoding       | Returns the document's encoding (character set)                    | 3   |
| document.lastModified        | Returns the date and time the document was updated                 | 3   |
| document.links               | Returns all `<area>` and `<a>` elements that have a href attribute | 1   |
| document.readyState          | Returns the (loading) status of the document                       | 3   |
| document.referrer            | Returns the URI of the referrer (the linking document)             | 1   |
| document.scripts             | Returns all `<script>` elements                                    | 3   |
| document.strictErrorChecking | Returns if error checking is enforced                              | 3   |
| document.title               | Returns the `<title>` element                                      | 1   |
| document.URL                 | Returns the complete URL of the document                           | 1   |
