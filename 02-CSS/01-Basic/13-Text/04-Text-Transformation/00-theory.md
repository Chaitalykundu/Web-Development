| Property       | Description                                        | Default value |
| -------------- | -------------------------------------------------- | ------------- |
| text-transform | specify uppercase and lowercase letters in a text. | none          |

&nbsp;

&nbsp;

# Definition & usage

The `text-transform` property is used to specify uppercase and lowercase letters in a text.

&nbsp;

# Note

It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.

It also can help improve legibility for **ruby**.

&nbsp;

&nbsp;

# Syntax

```css
selector {
  text-transform: none|capitalize|uppercase|lowercase|full-width|full-size-kana|
    initial| inherit;
}
```

&nbsp;

```css
/* Global values */
selector {
  text-transform: inherit;
  text-transform: initial;
  text-transform: revert;
  text-transform: revert-layer;
  text-transform: unset;
}
```

&nbsp;

&nbsp;

# Example

```css
div.a {
  text-transform: uppercase;
}

div.b {
  text-transform: lowercase;
}

div.c {
  text-transform: capitalize;
}
```

&nbsp;

&nbsp;

|                    |                                                                      |
| ------------------ | -------------------------------------------------------------------- |
| Inherited:         | yes                                                                  |
| Animation type     | discrete                                                             |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line` |
| JavaScript syntax: | object.style.textTransform="uppercase"                               |
|                    |                                                                      |

&nbsp;

&nbsp;

# Property values

| Values         | Description                                                                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| none           | No capitalization. The text renders as it is. This is default                                                                                                                                                     |
| capitalize     | Transforms the first character of each word to uppercase                                                                                                                                                          |
| uppercase      | Transforms all characters to uppercase                                                                                                                                                                            |
| lowercase      | Transforms all characters to lowercase                                                                                                                                                                            |
| full-width     | It is a keyword that forces the writing of a character — mainly ideograms and Latin scripts — inside a square, allowing them to be aligned in the usual East Asian scripts (like Chinese or Japanese)             |
| full-size-kana | Generally used for `<ruby>` annotation text, the keyword converts all small Kana characters to the equivalent full-size Kana, to compensate for legibility issues at the small font sizes typically used in ruby. |
| initial        | Sets this property to its default value.                                                                                                                                                                          |
| inherit        | Inherits this property from its parent element                                                                                                                                                                    |
