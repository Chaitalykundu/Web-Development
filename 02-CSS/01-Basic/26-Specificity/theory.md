# What is Specificity?

`Specificity` is the **algorithm** used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element.

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

# Selector weight categories

The selector weight categories are listed here in the order of decreasing specificity:

| selector                                               | example                                             | weight value                                                                                                  |
| ------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ID value                                               | #example                                            | 1-0-0                                                                                                         |
| CLASS value (class,attribute selector,pseudo-classes ) | .example , [type="radio"] , [lang\|="fr"],:required | 0-1-0                                                                                                         |
| TYPE value (elements, pseudo-elements)                 | p, h1, ::before                                     | 0-0-1                                                                                                         |
| No value                                               | universal selector, pseudo-class :where()           | 0-0-0                                                                                                         |
| Combinators                                            | +, >, ~, " ", and \|                                | may make a selector more specific in what is selected but they don't add any value to the specificity weight. |

The negation pseudo-class, :not(), itself has no weight. Neither do the :is() or the :has() pseudo-classes. The parameters in these selectors, however, do. The values of both come from the parameter in the list of parameters that has the highest specificity. The :not(), :is() and :has() exceptions are discussed below.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
