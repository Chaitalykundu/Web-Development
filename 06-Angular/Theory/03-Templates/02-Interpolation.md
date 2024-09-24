# Overview

- [Introduction](#introduction)
- [Syntax](#syntax)
- [Example](#example)
- [How it works](#how-it-works)
- [Interpolation Use Cases](#interpolation-use-cases)
- [Behind the scene](#behind-the-scene)
- [Limitations](#limitations)
- [Interpolation in Attributes](#interpolation-in-attributes)
  - [Example](#example-1)

&nbsp;

&nbsp;

# Summary

- Interpolation in Angular allows you to display dynamic values from your component's data in your view.

- It supports basic expressions, string concatenation, method calls, ternary operators, and more.

- It can be used within HTML attributes, but only for attributes that expect strings.

- Angular automatically escapes HTML to prevent XSS attacks.

- Interpolation expressions should be simple and avoid performance-heavy operations.

&nbsp;

&nbsp;

# Introduction

Interpolation is a feature that allows you to bind a component's data to HTML that come from component properties or methods. It is primarily used to display dynamic values inside HTML elements such as in text, attributes or even within certain angular directives.

&nbsp;

&nbsp;

# Syntax

Interpolation uses double curly braces

```ts
{
  {
    expression;
  }
}
```

&nbsp;

&nbsp;

# Example

```ts
export class InterpolationComponent {
  message = "Hello Interpolation";
  count: number = 30;
}
```

```html
<p>{{ message }}</p>
<p>{{ count }}</p>
```

&nbsp;

&nbsp;

# How it works

Inside the curly braces, you place an expression that angular evaluates and replaces with the result in the dome

The expression can be string, number or a result of method, or even involve simple JavaScript logic.

&nbsp;

&nbsp;

# Interpolation Use Cases

1. Display String values or String Concatenation :

   ```ts
   export class InterpolationComponent {
     title = "This is Interpolation";
   }
   ```

   ```html
   <h1>{{'Hello World. ' + title}}</h1>
   ```

2. Accessing Component Properties

   ```html

   ```

3. Using Methods and Functions : You can call methods to manipulate values

   ```ts
   export class InterpolationComponent {
     title = "This is Interpolation";

     getAddition(a: any, b: any) {
       return a + b;
     }
   }
   ```

   ```html
   <p>{{getAddition(9,3)}}</p>
   ```

4. We can perform simple mathematical operations

   ```ts
   export class InterpolationComponent {
     age: number = 50;
   }
   ```

   ```html
   <p>{{age + 5}}</p>
   ```

&nbsp;

&nbsp;

# Behind the scene

Angular evaluates the expression inside the curly braces and converts it to string.

It automatically updates the view whenever data is changed.

&nbsp;

&nbsp;

# Limitations

1. We can't use control flow statements like `if`, `else`, `for`, `while` directly within interpolation

2. Interpolation is mainly for one way binding from the component to the view. For two-way binding we use `[(ngModel)]`

&nbsp;

&nbsp;

# Interpolation in Attributes

Though interpolation is mainly used for text content inside HTML elements, it can also be used within certain HTML attributes. However, it only works for specific types of attributes like **title, alt, placeholder,** and others that expect strings.

&nbsp;

## Example

```ts
export class AppComponent {
  tooltip: string = "This is a tooltip";
}
```

```html
<button title="{{ tooltip }}">Hover over me</button>
```

However, interpolation cannot be used with non-string attributes like **href, src, or style**. For those, Angular's property binding should be used.

&nbsp;

&nbsp;

&nbsp;
