# Overview

- Definition and Usage
- Note
- Syntax
- Example
- Specification
- Property Values
- Define the generic-family categories

&nbsp;

&nbsp;

# Chapter Summary

- The CSS `font-stretch` property allows you to make text narrower (condensed) or wider (expanded).

&nbsp;

&nbsp;

| Property     | Description                 | Default value |
| ------------ | --------------------------- | ------------- |
| font-stretch | make text narrower or wider | normal        |

&nbsp;

&nbsp;

&nbsp;

# Definition and Usage

The CSS `font-stretch` property allows you to make text narrower (condensed) or wider (expanded).

&nbsp;

&nbsp;

# Note

Some fonts provide additional faces; condensed faces and expanded faces. For these fonts, you can use the `font-stretch` property to select a normal, condensed, or expanded font face.

&nbsp;

This property has no effect if the selected font does not offer condensed or expanded faces!

&nbsp;

&nbsp;

# Syntax

```css
selector {
  font-stretch: ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded|initial|inherit;
}
```

&nbsp;

&nbsp;

# Example

Make the text in `<div>` elements wider:

```css
div {
  font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
  font-stretch: expanded;
}
```

&nbsp;

&nbsp;

# Specification

|                    |                                                                       |
| ------------------ | --------------------------------------------------------------------- |
| Inherited:         | yes                                                                   |
| Animation type:    | yes                                                                   |
| Version:           | CSS1                                                                  |
| Applies to         | all elements. It also applies to `::first-letter` and `::first-line`. |
| JavaScript syntax: | object.style.fontStretch="expanded"                                   |
|                    |                                                                       |

&nbsp;

&nbsp;

# Property Values

| Value           | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| ultra-condensed | Makes the text as narrow as it gets                                               |
| extra-condensed | Makes the text narrower than condensed, but not as narrow as ultra-condensed      |
| condensed       | Makes the text narrower than semi-condensed, but not as narrow as extra-condensed |
| semi-condensed  | Makes the text narrower than normal, but not as narrow as condensed               |
| normal          | No font stretching                                                                |
| semi-expanded   | Makes the text wider than normal, but not as wide as expanded                     |
| expanded        | Makes the text wider than semi-expanded, but not as wide as extra-expanded        |
| extra-expanded  | Makes the text wider than expanded, but not as wide as ultra-expanded             |
| ultra-expanded  | Makes the text as wide as it gets                                                 |
| initial         | Sets this property to its default value.                                          |
| inherit         | Inherits this property from its parent element.                                   |
|                 |                                                                                   |
