# HTML `<figcaption>` Element

- - The `<figure>` element represents self-contained content and will allow you to associate an image with a caption.

- While the content of the <figure> element is related to the main flow, its position is independent of the main flow, and if removed it should not affect the flow of the document.

&nbsp;

&nbsp;

# Example

```html
<figure>
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"
    alt="A slice of lasagna on a plate."
  />
  <figcaption>Cats love lasagna.</figcaption>
</figure>
```

&nbsp;

&nbsp;

# Default CSS Settings

```css
figure {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
}
```
