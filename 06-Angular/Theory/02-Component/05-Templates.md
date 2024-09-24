# Overview

- [Understanding templates](#understanding-templates)
- [Empower your HTML](#empower-your-html)
- [Types of Templates](#types-of-templates)
  - [Internal Template](#internal-template)
  - [External Template](#external-template)
- [Key concepts on template](#key-concepts-on-template)

&nbsp;

&nbsp;

&nbsp;

# Understanding templates

In Angular, a template is a blueprint for a fragment of a user interface (UI).

Templates are written in **HTML**, and special syntax can be used within a template to build on many of Angular's features.

&nbsp;

&nbsp;

An Angular HTML template renders a view, or user interface, in the browser, just like regular HTML, but with a lot more functionality.

It is essentially HTML combined with Angular's built-in **directives**, **bindings** and **expressions** that render dynamic content.

Templates allow Angular to interact with DOM and reflect the components data dynamically within the view.

&nbsp;

&nbsp;

When we generate an Angular application with the Angular CLI, it creates `app.component.html` file which is the default template containing placeholder HTML.

The template syntax guides show you how to control the UX/UI by coordinating data between the class and the template.

&nbsp;

&nbsp;

# Empower your HTML

An Angular template is part of an overall webpage, and not the entire page, we don't need to include elements such as `<html>`, `<body>`, or `<base>`, and can focus exclusively on the part of the page you are developing.

&nbsp;

&nbsp;

# Types of Templates

There are **two** ways to define a template

1. <u>**_Internal Template_**</u>: The template is directly written inside the component's TypeScript file

2. <u>**_External Template_**</u>: The template is placed in a separate HTML file and is referenced within the component.

&nbsp;

&nbsp;

## Internal Template

```ts
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  template: '<h1>Hello World</h1>',
  styleUrl: './add-employee.component.css'
})
```

&nbsp;

&nbsp;

## External Template

```ts
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  template: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
```

&nbsp;

&nbsp;

# Key concepts on template

| Topics                               | Details                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Interpolation                        | It allows embedding of expressions inside double curly braces in the template                  |
| Template statements                  | Respond to events in your templates.                                                           |
| Binding syntax                       | Use binding to coordinate values in your application.                                          |
| Property binding                     | Set properties of target elements or directive @Input() decorators.                            |
| Attribute, class, and style bindings | Set the value of attributes, classes, and styles.                                              |
| Event binding                        | Listen for events and your HTML.                                                               |
| Two-way binding                      | Share data between a class and its template.                                                   |
| Built-in directives                  | Listen to and modify the behavior and layout of HTML.                                          |
| Template reference variables         | Use special variables to reference a DOM element within a template.                            |
| Inputs and Outputs                   | Share data between the parent context and child directives or components                       |
| Template expression operators        | Learn about the pipe operator (\|), and protect against null or undefined values in your HTML. |
| SVG in templates                     | Dynamically generate interactive graphics.                                                     |
|                                      |                                                                                                |

&nbsp;

&nbsp;

Interpolation, directives, event binding, Property binding, Two way data binding, template reference variables, component communication, pipes

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
