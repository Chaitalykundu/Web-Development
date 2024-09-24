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
- [Binding in Interpolation](#binding-in-interpolation)
  - [Example](#example-2)
- [HTML Escaping in Interpolation](#html-escaping-in-interpolation)
  - [Example](#example-3)
- [Using Pipes with Interpolation](#using-pipes-with-interpolation)
  - [Example of Date Pipe](#example-of-date-pipe)
  - [Example of Uppercase Pipe](#example-of-uppercase-pipe)
- [Change Detection and Interpolation](#change-detection-and-interpolation)
- [Nested Interpolation](#nested-interpolation)
  - [Example (inefficient)](#example-inefficient)
- [Localization with Interpolation](#localization-with-interpolation)
  - [Example](#example-4)
- [Best Practices for Interpolation](#best-practices-for-interpolation)

&nbsp;

&nbsp;

# Summary

- Interpolation in Angular allows you to **display dynamic values** from your component's data in your view.

- It supports basic expressions, string concatenation, method calls, ternary operators, and more.

- It can be used within HTML attributes, but only for attributes that expect strings.

- Angular automatically escapes HTML to prevent XSS attacks.

- Interpolation expressions should be simple and avoid performance-heavy operations.

&nbsp;

&nbsp;

# Introduction

Interpolation is a feature that allows to **bind a component's data** to HTML that come from component properties or methods.

It is primarily used to display dynamic values inside HTML elements such as in text, attributes or even within certain angular directives.

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

2. Accessing Component / nested component Properties

   ```ts
   export class InterpolationComponent {
     user = {
       name: "Alice",
       age: 30,
       address: {
         city: "New York",
         country: "USA",
       },
     };
   }
   ```

   ```html
   <p>Name: {{ user.name }}</p>
   <p>Age: {{ user.age }}</p>
   <p>Location: {{ user.address.city }}, {{ user.address.country }}</p>
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

# Binding in Interpolation

Interpolation is primarily for **one-way data binding**. This means that data flows **from the component to the view (HTML)**, but not vice versa.

&nbsp;

## Example

```ts
export class AppComponent {
  username: string = "Chaitaly";
}
```

```html
<p>{{ username }}</p>
<!-- Displays the value of 'username' from the component -->
```

Changes to `username` in the component will automatically update the view, but changes in the view (e.g., user input) won’t directly update the component unless you use other mechanisms like event binding or two-way binding.

&nbsp;

&nbsp;

# HTML Escaping in Interpolation

Angular automatically escapes HTML content within interpolation expressions to prevent XSS (cross-site scripting) attacks.

&nbsp;

## Example

```ts
export class AppComponent {
  userInput: string = "<script>alert('Hacked!')</script>";
}
```

```html
<p>{{ userInput }}</p>
```

Angular escapes the script tags and prevents the script from executing.

&nbsp;

&nbsp;

# Using Pipes with Interpolation

Angular provides pipes for transforming data within interpolation. Pipes let you format, filter, or transform the data before displaying it. They are incredibly useful when formatting dates, numbers, or text.

To add pipes, we have to import that pipe in @Component decorator

&nbsp;

## Example of Date Pipe

```ts
@Component({
  selector: "app-interpolation",
  standalone: true,
  imports: [DatePipe], // import pipe
  templateUrl: "./interpolation.component.html",
  styleUrl: "./interpolation.component.css",
})
export class AppComponent {
  today: Date = new Date();
}
```

```html
<p>{{ today | date: 'fullDate' }}</p>
```

&nbsp;

## Example of Uppercase Pipe

```html
<p>{{ username | uppercase }}</p>
<!-- Transforms username to uppercase -->
```

&nbsp;

&nbsp;

# Change Detection and Interpolation

Angular’s interpolation is closely tied with its change detection mechanism. Whenever the component's data changes (e.g., user interaction, HTTP requests), Angular's change detection will automatically update the DOM wherever the interpolated values appear.

However, if you need more control over when interpolation happens (e.g., for performance reasons), Angular offers tools like:

- **_OnPush Change Detection Strategy_**: To limit unnecessary checks.
- **_Zones_**: To manage the scope of change detection more finely.

&nbsp;

&nbsp;

# Nested Interpolation

Interpolation expressions can include component methods or other function calls, but it's generally discouraged to use heavy computations in them because they will get recalculated with every change detection cycle.

&nbsp;

## Example (inefficient):

```html
<p>{{ calculateSum(10, 20) }}</p>
```

This will work, but it’s better to calculate such values in the component and only interpolate simple results to avoid performance issues.

&nbsp;

&nbsp;

# Localization with Interpolation

Angular's i18n (internationalization) features work well with interpolation. You can use Angular's i18n directive to translate texts that also contain dynamic data.

&nbsp;

## Example

```html
<p i18n="@@message">{{ count }} items left</p>
```

Here, `count` would be dynamically translated along with the text.

&nbsp;

&nbsp;

# Best Practices for Interpolation

- <u>**_Avoid Complex Logic in Templates_**</u>: Keep the interpolation simple by avoiding complex logic inside the curly braces. Perform heavy operations in the component and expose the result to the template for interpolation.

- <u>**_Use Pipes for Data Transformation_**</u>: For transforming data (like formatting numbers, dates, or currencies), prefer using Angular's built-in pipes rather than doing it manually in the component or within interpolation expressions.

- <u>**_Limit the Use of Methods in Interpolation_**</u>: Since Angular reevaluates expressions during each change detection cycle, calling methods with complex logic inside interpolation can degrade performance.
