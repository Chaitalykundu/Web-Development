# Chapter Summary

- Use the id attribute (id="value") to define bookmarks in a page

- Use the href attribute (href="#value") to link to the bookmark

&nbsp;

&nbsp;

# Details

HTML links can be used to create bookmarks, so that readers can jump to specific parts of a web page.

&nbsp;

# Create a Bookmark in HTML

- To create a bookmark - first create the bookmark, then add a link to it.

* When the link is clicked, the page will scroll down or up to the location with the bookmark.

* Bookmarks can be useful if a web page is very long.

&nbsp;

## Steps

1. First, use the `id` attribute to create a bookmark:

```html
<h2 id="C4">Chapter 4</h2>
```

2. Then, add a link to the bookmark ("Jump to Chapter 4"), from within the same page:

```html
<a href="#C4">Jump to Chapter 4</a>
```

&nbsp;

- You can also add a link to a bookmark on another page:

```html
<a href="html_demo.html#C4">Jump to Chapter 4</a>
```
