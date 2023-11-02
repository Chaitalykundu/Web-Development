# Overview

DOM = Document Object Model

`Document Object Model (DOM)` is a programming interface for HTML and XML documents, that allows to create, manipulate, or delete the element from the document. It defines the logical structure of documents and the way a document is accessed and manipulated.

&nbsp;

DOM tree refers to the HTML page where all the nodes / tags are objects. The text inside a tag is an object as well.

There are mainly 3 types of nodes.

* text nodes
* element nodes
* comment nodes

&nbsp;

&nbsp;

<img src="./assets/dom.png">

&nbsp;

&nbsp;

# N.B:

* In HTML, `<HTML></HTML>` is root node and `<head></head>` and `<body></body>` are it's children.

* Text node is always a leaf of the tree.

* Sometimes `document.body` can be null if the javascript can be written before the body tag.

&nbsp;

&nbsp;

# Auto Correction

If the browser encounters erroneous HTML, it automatically corrects it when making the DOM.

For instance, the top tag is always `<html>`. Even if it doesn’t exist in the document, it will exist in the DOM, because the browser will create it.

&nbsp;
&nbsp;
&nbsp;
