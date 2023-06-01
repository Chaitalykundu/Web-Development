# HTML Ordered List or Numbered List

- `<ol>` tag defines an ordered list

* In the ordered lists, all the list items are marked with numbers by default.

- It is known as numbered list also.

* An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.

&nbsp;

- Example :

```html
<ol>
  <li>Aries</li>
  <li>Bingo</li>
  <li>Leo</li>
  <li>Oracle</li>
</ol>
```

<ol>  
 <li>Aries</li>  
 <li>Bingo</li>  
 <li>Leo</li>  
 <li>Oracle</li>  
</ol>

&nbsp;

&nbsp;

# Default CSS Settings

```css
ol {
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
```

&nbsp;

&nbsp;

# Attributes

| Attribute | Value         | Description                                                 |
| --------- | ------------- | ----------------------------------------------------------- |
| reversed  | reversed      | Specifies that the list order should be reversed (9,8,7...) |
| start     | number        | Specifies the start value of an ordered list                |
| type      | 1, A, a, I, i | Specifies the kind of marker to use in the list             |

&nbsp;

&nbsp;

# The Type Attribute

- `type` attribute defines the numbering type

* The `type` attribute defines the type of the list item marker:

| Type     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| type="1" | The list items will be numbered with numbers (default)       |
| type="A" | The list items will be numbered with uppercase letters       |
| type="a" | The list items will be numbered with lowercase letters       |
| type="I" | The list items will be numbered with uppercase roman numbers |
| type="i" | The list items will be numbered with lowercase roman numbers |
|          |                                                              |

&nbsp;

&nbsp;

## Numbers:

```html
<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol type="1">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

&nbsp;

&nbsp;

## Uppercase Letters:

```html
<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol type="A">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

&nbsp;

&nbsp;

## Lowercase Letters:

```html
<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

&nbsp;

&nbsp;

## Uppercase Roman Numbers:

```html
<ol type="I">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol type="I">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

&nbsp;

&nbsp;

## Lowercase Roman Numbers:

```html
<ol type="i">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol type="i">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

&nbsp;

&nbsp;

# Use css property to style

- The CSS `list-style-type` property is used to define the style of the list item marker.

```html
<style>
  ol.a {
    list-style-type: armenian;
  }
  ol.b {
    list-style-type: cjk-ideographic;
  }
  ol.c {
    list-style-type: decimal;
  }
  ol.d {
    list-style-type: decimal-leading-zero;
  }
  ol.e {
    list-style-type: georgian;
  }
  ol.f {
    list-style-type: hebrew;
  }
  ol.g {
    list-style-type: hiragana;
  }
  ol.h {
    list-style-type: hiragana-iroha;
  }
  ol.i {
    list-style-type: katakana;
  }
  ol.j {
    list-style-type: katakana-iroha;
  }
  ol.k {
    list-style-type: lower-alpha;
  }
  ol.l {
    list-style-type: lower-greek;
  }
  ol.m {
    list-style-type: lower-latin;
  }
  ol.n {
    list-style-type: lower-roman;
  }
  ol.o {
    list-style-type: upper-alpha;
  }
  ol.p {
    list-style-type: upper-latin;
  }
  ol.q {
    list-style-type: upper-roman;
  }
  ol.r {
    list-style-type: none;
  }
  ol.s {
    list-style-type: inherit;
  }
</style>
```

# Control List Counting

- By default, an ordered list will start counting from 1. If you want to start counting from a specified number, you can use the `start` attribute:

* Example

```html
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

&nbsp;

&nbsp;

# Global Attributes

- The `<ol>` tag also supports the Global Attributes in HTML.

&nbsp;

# Event Attributes

- The `<ol>` tag also supports the Event Attributes in HTML.

&nbsp;
