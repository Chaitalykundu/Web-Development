| Property        | Description                                    | Default value |
| --------------- | ---------------------------------------------- | ------------- |
| text-align-last | Specifies how to align the last line of a text | auto          |

&nbsp;

&nbsp;

# Definition & usage

The `text-align-last` property specifies how to align the last line of a text.

&nbsp;

# Note

the `text-align-last` property sets the alignment for all last lines within the selected element. So, if you have a `<div>` with three paragraphs in it, `text-align-last` will apply to the last line of EACH of the paragraphs.

To use `text-align-last` on only the last paragraph in the container, you can use `:last child`

&nbsp;

In Edge prior 79, the `text-align-last` property only works on text that has `"text-align: justify"`

&nbsp;
&nbsp;

# Syntax

```css
text-align-last: auto | left |right |center|justify|start|end|initial|inherit;
```

&nbsp;

&nbsp;

# Example

Align the last line of text in `<p>` elements:

```css
p.a {
  text-align-last: right;
}
```

&nbsp;

&nbsp;

|                    |                                    |
| ------------------ | ---------------------------------- |
| Inherited:         | yes                                |
| Animation type     | discrete                           |
| Applies to         | block containers                   |
| JavaScript syntax: | object.style.textAlignLast="right" |
|                    |                                    |

&nbsp;

&nbsp;

| Property | Values                                                                                                                                                |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| auto     | The last line is justified and aligned left                                                                                                           |
| left     | The last line is aligned to the left                                                                                                                  |
| right    | The last line is aligned to the right                                                                                                                 |
| center   | The last line is center-aligned                                                                                                                       |
| justify  | The last line is justified as the rest of the lines                                                                                                   |
| start    | The last line is aligned at the beginning of the line (left if the text-direction is left-to-right, and right is the text-direction is right-to-left) |
| end      | The last line is aligned at the end of the line (right if the text-direction is left-to-right, and left is the text-direction is right-to-left)       |
| initial  | Sets this property to its default value. Read about initial                                                                                           |
| inherit  | Inherits this property from its parent element.                                                                                                       |
|          |
