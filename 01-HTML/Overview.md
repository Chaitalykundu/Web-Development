# Overview

- [Overview](#overview)
- [1. document outline](#1-document-outline)
- [2. Comments](#2-comments)
- [3. Page Information (inside head) / Meta information](#3-page-information-inside-head--meta-information)
- [4. Document Structure](#4-document-structure)
- [5. Text Markup](#5-text-markup)
- [6. Links](#6-links)
- [7. Lists](#7-lists)
- [8. Forms](#8-forms)
- [9. Tables](#9-tables)
- [10. Image \& Image map](#10-image--image-map)
- [11. Multimedia tags and attributes](#11-multimedia-tags-and-attributes)
  - [tags](#tags)
  - [attributes](#attributes)
- [11. Special symbols](#11-special-symbols)
- [12. Object](#12-object)
  - [13. Semantic tag](#13-semantic-tag)
  - [14. Empty Element](#14-empty-element)
- [15. Core Attributes](#15-core-attributes)
- [16. Language Attributes](#16-language-attributes)
- [17. Keyboard Attributes](#17-keyboard-attributes)
- [18. Window Events](#18-window-events)
- [19. Form Events](#19-form-events)
- [20. Form Events](#20-form-events)
- [21. Mouse Events](#21-mouse-events)

&nbsp;

&nbsp;

&nbsp;

# 1. document outline

| name       | description         |
| ---------- | ------------------- |
| <!DOCTYPE> | Version of (X) HTML |
| html       | HTML Document       |
| head       | Page Information    |
| body       | Page contents       |
|            |                     |

&nbsp;

&nbsp;

# 2. Comments

     <!-- Comment text -->

&nbsp;

&nbsp;

# 3. Page Information (inside head) / Meta information

| name   | description                                          |
| ------ | ---------------------------------------------------- |
| base   | base URL (Does not support HTML5)                    |
| meta   | meta data                                            |
| title  | Set title of the document shown on the browser's tab |
| link   | import relevant source                               |
| style  | style resource                                       |
| script | script resource                                      |
|        |                                                      |

&nbsp;

&nbsp;

# 4. Document Structure

| name   | description     |
| ------ | --------------- |
| h[1-6] | heading         |
| div    | page section    |
| span   | inline section  |
| p      | paragraph       |
| br/    | line break      |
| hr/    | horizontal rule |
|        |                 |

&nbsp;

&nbsp;

# 5. Text Markup

| name       | description                                       |
| ---------- | ------------------------------------------------- |
| b          | bold                                              |
| i          | italic                                            |
| u          | underline                                         |
| sub        | subscript - smaller text placed below normal text |
| sup        | superscript - smaller text placed up normal text  |
| strong     | strong emphasis                                   |
| em         | emphasis                                          |
| address    | address                                           |
| strike     | Strikeout                                         |
| blockquote | long quotation                                    |
| q          | short quotation                                   |
| abbr       | abbreviation                                      |
| acronym    | acronym                                           |
| pre        | pre-formatted text                                |
| dfn        | definition                                        |
| small      | fingerprint size text                             |
| code       | code                                              |
| cite       | citation                                          |
| del        | deleted text                                      |
| ins        | inserted text                                     |
| bdo        | text direction                                    |
| tt         | Typewriter text                                   |
| font       | font tag obsolete, We use CSS instead of this     |
|            |                                                   |

&nbsp;

&nbsp;

# 6. Links

| name               | description    |
| ------------------ | -------------- |
| a href= " "        | page link      |
| a href = "mailto:" | email link     |
| a name = "name"    | author         |
| a name = "#name"   | Link to author |
|                    |                |

- To open a link in different ta, we use `_target` attribute

&nbsp;

&nbsp;

# 7. Lists

| name | description      |
| ---- | ---------------- |
| ol   | ordered list     |
| ul   | unordered list   |
| li   | list item        |
| dl   | definition list  |
| dt   | definition term  |
| dd   | term description |
|      |                  |

&nbsp;

&nbsp;

# 8. Forms

| name     | description                                                |
| -------- | ---------------------------------------------------------- |
| from     | form                                                       |
| fieldset | collection of field                                        |
| legend   | form legend                                                |
| label    | input label                                                |
| input/   | form input                                                 |
| select   | drop-down box                                              |
| optgroup | group of options                                           |
| option   | drop-down option                                           |
| textarea | large-text input                                           |
| button   | button                                                     |
| datalist | Specifies a list of pre-defined options for input controls |
| output   | Defines the result of a calculation                        |
|          |                                                            |

&nbsp;

&nbsp;

# 9. Tables

| name     | description  |
| -------- | ------------ |
| table    | table        |
| thead    | table header |
| tbody    | table body   |
| tr       | table row    |
| th       | header cell  |
| td       | table cell   |
| caption  | caption      |
| tfoot    | table footer |
| colgroup | column group |
| col      | column       |
|          |              |

&nbsp;

&nbsp;

# 10. Image & Image map

| name       | description                                     |
| ---------- | ----------------------------------------------- |
| img/       | image                                           |
| map        | image map                                       |
| area/      | area of image map                               |
| canvas     | used to draw graphics, of the fly via scripting |
| figcaption | caption for a figure element                    |
| picture    | self-contained content                          |
| svg        | container for SVG graphics                      |
|            |                                                 |

&nbsp;

&nbsp;

# 11. Multimedia tags and attributes

## tags

| name   | description |
| ------ | ----------- |
| audio  |
| video  |             |
| source |             |
| embed  |             |
| track  |             |
|        |             |

&nbsp;

## attributes

- id
- class
- style
- src
- alt
- height & weight
- forms attributes
- events attributes

&nbsp;

&nbsp;

# 11. Special symbols

| values | symbol | description        |
| ------ | ------ | ------------------ |
| &#34   | "      | Quotation mark     |
| &#38   | &      | Ampersand          |
| &#60   | <      | less than          |
| &#62   | >      | greater than       |
| &#64   | @      | 'At' symbol        |
| &#128  |        | Euro               |
| &#149  |        | Small bullet       |
| &#153  |        | Trademark          |
| &#160  |        | Non-breaking space |
| &#163  |        | Pound              |
| &#169  |        | copyright symbol   |
|        |        |

&nbsp;

&nbsp;

# 12. Object

| name   | description |
| ------ | ----------- |
| object | object      |
| param  | parameter   |
|        |             |

&nbsp;

## 13. Semantic tag

| Name           | Description                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------- |
| `<article>`    | Defines independent, self-contained content                                                 |
| `<aside>`      | Defines content aside from the page content                                                 |
| `<details>`    | Defines additional details that the user can view or hide                                   |
| `<figcaption>` | Defines a caption for a `<figure>` element                                                  |
| `<figure>`     | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| `<footer>`     | Defines a footer for a document or section                                                  |
| `<header>`     | Specifies a header for a document or section                                                |
| `<main>`       | Specifies the main content of a document                                                    |
| `<mark>`       | Defines marked/highlighted text                                                             |
| `<nav>`        | Defines navigation links                                                                    |
| `<section>`    | Defines a section in a document                                                             |
| `<summary>`    | Defines a visible heading for a `<details>` element                                         |
| `<time>`       | Defines a date or time                                                                      |
|                |                                                                                             |

&nbsp;

## 14. Empty Element

```
area, base, br, col, hr,
img, input, link, meta, param
```

&nbsp;

&nbsp;

# 15. Core Attributes

```
class - style
id - title
```

> Core Attributes may not be used in **_base, html, head, meta, param, script, style or title_** elements.

&nbsp;

&nbsp;

# 16. Language Attributes

> Language Attributes may not be used in **_base, br, frame, frameset, hr, iframe, param_** or **_script_** elements.

&nbsp;

&nbsp;

# 17. Keyboard Attributes

```
accesskey,
tabindex
```

&nbsp;

&nbsp;

# 18. Window Events

```
OnLoad,
OnUnload
```

&nbsp;

&nbsp;

# 19. Form Events

```md
OnBlur, OnReset,
OnChange, OnFocus,
OnSelect, OnSubmit
```

&nbsp;

&nbsp;

# 20. Form Events

```md
OnKeydown, OnKeyup, OnKeypress
```

&nbsp;

&nbsp;

# 21. Mouse Events

```md
Onclick, OnDbclick,
OnMouseout, OnMouseover,
OnMousedown, OnMouseup,
OnMousemove
```
