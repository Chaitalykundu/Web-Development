<img alt="semantic-format"  src="https://github.com/Chaitalykundu/Web-Development/blob/master/HTML/assets/semantic.png">

&nbsp;

- Semantic elements = elements with a meaning.

* A semantic element clearly describes its meaning to both the browser and the developer.

* Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

* Examples of semantic elements:` <form>`, `<table>`, and `<article>` - Clearly defines its content.

- Semantic elements are

| Tag            | Description                                                                                 |
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

# HTML `<header>` Element

- The `<header>` element represents a container for introductory content or a set of navigational links.

- A `<header>` element typically contains:

  - one or more heading elements (`<h1> - <h6>`)
  - logo or icon
  - authorship information

- You can have several `<header>` elements in one HTML document.
- `<header>` cannot be placed within a `<footer>`, `<address>` or another `<header>` element.

&nbsp;

# HTML `<footer>` Element

- The `<footer>` element defines a footer for a document or section.

* A `<footer>` element typically contains:

  - authorship information
  - copyright information
  - contact information
  - sitemap
  - back to top links
  - related documents

- You can have several `<footer>` elements in one document.

&nbsp;

# HTML `<nav>` Element

- The` <nav>` element defines a set of navigation links.

# HTML `<section>` Element

- The `<section>` element defines a section in a document

* A `<section>` element can be used in:
  - Chapters
  - Introduction
  - News items
  - Contact information

&nbsp;

# HTML `<article>` Element

- The `<article>` element specifies independent, self-contained content.

* the `<article>` element can be used in :
  - Forum posts
  - Blog posts
  - User comments
  - Product cards
  - Newspaper articles

&nbsp;

# HTML `<aside>` Element

- The `<aside>` element defines some content aside from the content it is placed in (like a sidebar).

* The `<aside>` content should be indirectly related to the surrounding content.

&nbsp;

# HTML `<figure>` Element

- The `<figure>` element represents self-contained content and will allow you to associate an image with a caption.

* Example :

```
<figure>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">

</figure>
```

&nbsp;

# HTML `<figcaption>` Element

- A figure caption `<figcaption>` element is used to add a caption to describe the image contained within the figure element.

* `<figcaption>` element is used bellow the `<img>` tag

- Example:

```
<figure>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
  <figcaption>Cats love lasagna.</figcaption>
</figure>
```
