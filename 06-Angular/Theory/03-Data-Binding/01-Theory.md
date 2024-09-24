# Overview

- [Introduction](#introduction)
- [Render dynamic text with text interpolation](#render-dynamic-text-with-text-interpolation)

&nbsp;

&nbsp;

&nbsp;

# Introduction

In Angular, a binding creates a **dynamic connection between a component's template and its data**. This connection ensures that changes to the component's data automatically update the rendered template based on your application's state.

&nbsp;

You use data binding to specify things such as

- the source of an image
- the state of a button, or
- data for a particular user.

&nbsp;

&nbsp;

# Render dynamic text with text interpolation

You can bind dynamic text in templates with **_double curly braces_**, which tells Angular that it is responsible for the expression inside and ensuring it is updated correctly. This is called **text interpolation**.

```ts
@Component({
  selector: "app-interpolation",
  standalone: true,
  imports: [],
  //   templateUrl: './interpolation.component.html',
  template: "<h1>{{title}}</h1>",
  styleUrl: "./interpolation.component.css",
})
export class InterpolationComponent {
  title = "Hello Interpolation";
}
```

In this example, when the snippet is rendered to the page, Angular will replace `{{title}}` with `Hello Interpolation`.

All expression values are converted to a **string**. Objects and arrays are converted using the value’s `toString` method.

&nbsp;

&nbsp;

&nbsp;

Every class has a default method i.e. **Constructor**.

When the object of a function is created, the constructor is called.

We have to create variables inside class
