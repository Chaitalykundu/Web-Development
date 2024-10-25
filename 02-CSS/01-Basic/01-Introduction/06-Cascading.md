# Overview

- [Overview](#overview)
- [Chapter Summary](#chapter-summary)
- [Cascading](#cascading)
- [Preference Between internal and external CSS](#preference-between-internal-and-external-css)

&nbsp;

&nbsp;

&nbsp;

# Chapter Summary

- The cascade is the `algorithm` for solving conflicts where multiple CSS rules apply to an HTML element.

- Cascading order priority : **Inline > ( internal ≅ external ) > browser default**

&nbsp;

&nbsp;

# Cascading

Cascading order defines which style will be applied to elements when multiple styles are used.

Cascading order priority : **Inline > ( internal ≅ external ) > browser default**

&nbsp;

&nbsp;

# Preference Between internal and external CSS

The internal and external CSS are treated equally by the browser. But the order of their definition decides which one’s property will get preference.

- If the link to external CSS is defined **before** the internal CSS, then properties of internal CSS will get the preference, i.e. **internal CSS > external CSS**

- If the link to external CSS is defined **after** the internal CSS, then properties of external CSS will get preference over internal CSS, i.e. **external CSS > internal CSS**
