## 1. document outline

| name       | description         |
| ---------- | ------------------- |
| <!DOCTYPE> | Version of (X) HTML |
| html       | HTML Document       |
| head       | Page Information    |
| body       | Page contents       |
|            |                     |

&nbsp;

## 2. Comments

     <!-- Comment text -->

&nbsp;

## 3. Page Information (inside head)

| name   | description                                          |
| ------ | ---------------------------------------------------- |
| base   | base URL                                             |
| meta   | meta data                                            |
| title  | Set title of the document shown on the browser's tab |
| link   | relevant source                                      |
| style  | style resource                                       |
| script | script resource                                      |
|        |                                                      |

&nbsp;

## 4. Document Structure

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

## 5. Links

| name               | description    |
| ------------------ | -------------- |
| a href= " "        | page link      |
| a href = "mailto:" | email link     |
| a name = "name"    | author         |
| a name = "#name"   | Link to author |
|                    |                |

&nbsp;

## 6. Text Markup

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

## 7. Lists

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

## 8. Forms

| name     | description         |
| -------- | ------------------- |
| from     | form                |
| fieldset | collection of field |
| legend   | form legend         |
| label    | input label         |
| input/   | form input          |
| select   | drop-down box       |
| optgroup | group of options    |
| option   | drop-down option    |
| textarea | large-text input    |
| button   | button              |
|          |                     |

&nbsp;

## 9. Tables

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
| col/     | column       |

| | |

&nbsp;

## 10. Image & Image map

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

## 11. Multimedia tags and attributes

### tags

| name   | description |
| ------ | ----------- |
| audio  |
| video  |             |
| source |             |
| embed  |             |
| track  |             |
|        |             |

### attributes

- id

* class
* style
* src
* alt
* height & weight
* forms attributes
* events attributes

  &nbsp;

## 11. Special symbols

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

## 12. Object

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

## 15. Core Attributes :

```
class - style
id - title
```

> Core Attributes may not be used in **_base, html, head, meta, param, script, styleor title_** elements.

&nbsp;

## 16. Language Attributes :

> Language Attributes may not be used in **_base, br, frame, frameset, hr, iframe, param_** or **_script_** elements.

&nbsp;

## 17. Keyboard Attributes :

```
accesskey,
tabindex
```

## 18. Window Events :

```
OnLoad,
OnUnload
```

&nbsp;

## 19. Form Events :

```
OnBlur,             OnReset,
OnChange,           OnFocus,
OnSelect,           OnSubmit
```

&nbsp;

## 20. Form Events :

```
OnKeydown,   OnKeyup,   OnKeypress
```

&nbsp;

## 21. Mouse Events :

```
Onclick,        OnDbclick,
OnMouseout,     OnMouseover,
OnMousedown,    OnMouseup,
OnMousemove
```
