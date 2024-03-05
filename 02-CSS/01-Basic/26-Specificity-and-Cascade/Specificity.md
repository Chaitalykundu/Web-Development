# What is Specificity?

`Specificity` is an **algorithm** that determines which CSS selector has the strongest match.

&nbsp;

It is used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element.

&nbsp;

If there are two or more CSS rules that point to the same element, the selector with the **highest specificity** value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.

&nbsp;

&nbsp;

# Example

In this example, we have added a class selector (named "test"), and specified a green color for this class. The text will now be green (even though we have specified a red color for the element selector "p"). This is because the class selector is given higher priority:

&nbsp;

```html
<html>
  <head>
    <style>
      .test {
        color: green;
      }
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p class="test">Hello World!</p>
  </body>
</html>
```

&nbsp;

&nbsp;

# Specificity Hierarchy

Every CSS selector has its place in the specificity hierarchy.

There are **four** categories which define the specificity level of a selector:

- Inline styles - Example: `<h1 style="color: pink;">`

- IDs - Example: `#navbar`

- Classes, pseudo-classes, attribute selectors - Example: `.test`, `:hover`, `[href]`

- Elements and pseudo-elements - Example: `h1`, `::before`

&nbsp;

&nbsp;

## Note 1

`Inline style` gets a specificity value of 1000, and is always given the highest priority!

## Note 2

There is one exception to this rule: if you use the `!important` rule, it will even override inline styles!

&nbsp;

&nbsp;

# Selector weight categories

```md
!important > inline style > id > class or attribute > elements> universal
```

&nbsp;

The selector weight categories are listed here in the order of decreasing specificity:

| selector                                               | example                                             | weight value                                                                                                  |
| ------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ID value                                               | #example                                            | 1-0-0                                                                                                         |
| CLASS value (class,attribute selector,pseudo-classes ) | .example , [type="radio"] , [lang\|="fr"],:required | 0-1-0                                                                                                         |
| TYPE value (elements, pseudo-elements)                 | p, h1, ::before                                     | 0-0-1                                                                                                         |
| No value                                               | universal selector, pseudo-class :where()           | 0-0-0                                                                                                         |
| Combinators                                            | +, >, ~, " ", and \|                                | may make a selector more specific in what is selected but they don't add any value to the specificity weight. |

&nbsp;

The negation pseudo-class, :not(), itself has no weight. Neither do the :is() or the :has() pseudo-classes. The parameters in these selectors, however, do. The values of both come from the parameter in the list of parameters that has the highest specificity. The :not(), :is() and :has() exceptions are discussed below.

&nbsp;

&nbsp;

The table below shows some examples on how to calculate specificity values:

| Selector                   | Specificity Value | Calculation                           |
| -------------------------- | ----------------- | ------------------------------------- |
| p                          | 1                 | 1                                     |
| p.test                     | 11                | 1 + 10                                |
| p#demo                     | 101               | 1 + 100                               |
| `<p style="color: pink;">` | 1000              | 1000                                  |
| #demo                      | 100               | 100                                   |
| .test                      | 10                | 10                                    |
| p.test1.test2              | 21                | 1 + 10 + 10                           |
| #navbar p#demo             | 201               | 100 + 1 + 100                         |
| \*                         | 0                 | 0 (the universal selector is ignored) |

&nbsp;

&nbsp;

# More Specificity Rules Examples

1. **Equal specificity: the latest rule wins** - If the same rule is written twice into the external style sheet, then the latest rule wins:

   ```css
   h1 {
     background-color: yellow;
   }
   h1 {
     background-color: red;
   }

   /* the red color will be applied */
   ```

&nbsp;

2. **ID selectors have a higher specificity than attribute selectors** - Look at the following three code lines:

   ```css
   div#a {
     background-color: green;
   }
   #a {
     background-color: yellow;
   }
   div[id="a"] {
     background-color: blue;
   }

   /* the first rule is more specific than the other two, and will therefore be applied. */
   ```

&nbsp;

3. **Contextual selectors are more specific than a single element selector** - The embedded style sheet is closer to the element to be styled. So in the following situation the latter rule will be applied.

```css
/*From external CSS file:*/
#content h1 {background-color: red;}

/*In HTML file:*/
<style>
#content h1 {background-color: yellow;}
</style>
```

&nbsp;

4. **A class selector beats any number of element selectors** - a class selector such as .intro beats h1, p, div, etc:

```css
.intro {
  background-color: yellow;
}
h1 {
  background-color: red;
}

/* the yellow color will be applied */
```

&nbsp;

5. **The universal selector (\*) and inherited values have a specificity of 0** - The universal selector (\*) and inherited values are ignored!

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
