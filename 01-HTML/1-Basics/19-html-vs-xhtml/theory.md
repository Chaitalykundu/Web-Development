# HTML vs XHTML

# XHTML

`XHTML` stands for **_Extensible Hypertext Markup Language_**.

It can be considered as a part of the **XML markup language** this is because of XHTML have features of both XML and HTML.

XHTML is extended from XML and HTML.

XHTML can be considered as a better version of HTML.

XHTML is a stricter, more XML-based version of HTML.

&nbsp;

&nbsp;

&nbsp;

# HTML

HTML is the `Hypertext Markup Language` which is the most widely used language over the internet. HTML is used to create web pages and link them from one to another.

### Note

HTML is not a programming language. It is a markup language.

We can use different other technologies like CSS and javascript to give a new look to the pages developed by HTML.

&nbsp;

&nbsp;

&nbsp;

# Differences from HTML

- `<!DOCTYPE>` is mandatory

- The xmlns attribute in `<html>` is mandatory

- `<html>`, `<head>`, `<title>`, and `<body>` are mandatory

- Elements must always be properly nested

- Elements must always be closed

- Elements must always be in lowercase

- Attribute names must always be in lowercase

- Attribute values must always be quoted

- Attribute minimization is forbidden

&nbsp;

&nbsp;

&nbsp;

## `<!DOCTYPE>` Is Mandatory

The DOCTYPE in XHTML is different from HTML. It must have an XHTML `<!DOCTYPE>` declaration. The `<html>`, `<head>`, `<title>`, and `<body>` elements are mandatory , and the xmlns attribute in `<html>` must specify the xml namespace for the document.

### Example

```xml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Title of document</title>
    </head>
    <body>
        < -- Content -- >
    </body>
</html>
```

&nbsp;

&nbsp;

## XHTML Elements Must be Properly

XHTML elements must be properly nested.

Correct :

```xml
<div> <p>   Coding Ninjas !  </p> </div>
```

&nbsp;

Wrong :

```xml
<div> <p>   Coding Ninjas !  </div> </p>
```

&nbsp;

&nbsp;

## XHTML Elements Must Always be Closed

Correct :

```xml
<p> Paragraph 1 </p>
<p> Paragraph 2 </p>
```

&nbsp;

Wrong :

```xml
<p> Paragraph 1
<p> Paragraph 2
```

&nbsp;

&nbsp;

# XHTML Attribute Names Must be in Lowercase

In XHTML, attribute names must always be in lowercase.

Correct :

```xml
<a href= "https://www.codingninjas.com/">Coding Ninjas ! </a>
```

&nbsp;

Wrong :

```xml
<a HREF= "https://www.codingninjas.com/">Coding Ninjas ! </a>
```

&nbsp;

&nbsp;

## XHTML Attribute Values Must be Quoted

In XHTML, attribute values must always bequoted.

Correct :

```xml
<a href= "https://www.codingninjas.com/">Coding Ninjas ! </a>
```

&nbsp;

Wrong :

```xml

<a HREF=https://www.codingninjas.com/> CodingNinjas ! </a>
```

&nbsp;

&nbsp;
&nbsp;
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
