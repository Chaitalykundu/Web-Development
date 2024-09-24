# Overview

- [Folder Structure](#folder-structure)
- [HTML template (.html)](#html-template-html)
  - [Interpolation](#interpolation)
  - [Directives](#directives)
  - [Event binding](#event-binding)
  - [Property binding](#property-binding)
- [CSS Style (.css)](#css-style-css)
  - [Encapsulation](#encapsulation)
  - [Selectors](#selectors)
  - [Angular's view Encapsulation](#angulars-view-encapsulation)
- [Component Logic (.ts)](#component-logic-ts)
  - [Component Class](#component-class)
  - [Lifecycle hooks](#lifecycle-hooks)
  - [Data Binding](#data-binding)

&nbsp;

&nbsp;

&nbsp;

# Folder Structure

When we generate a new component using angular CLI, it creates 4 files.

| Folder Name                     | Details                                                         |
| ------------------------------- | --------------------------------------------------------------- |
| `component_name.component.html` | UI is defined.                                                  |
| `component_name.component.css`  | Styles for the component is defined.                            |
| `component_name.component.ts`   | It contains the logic and properties for the component          |
| `component_name.spec.ts`        | The test file for writing unit tests related to this component. |

&nbsp;

&nbsp;

# HTML template (.html)

The html template define the **structure and layout** of the component's view.

It uses standard HTML along with angular's template syntax to bind data and listen for user events.

&nbsp;

&nbsp;

## Interpolation

Displaying component properties in the template using **double curly braces**

```html
<h1>{{title}}</h1>
```

&nbsp;

&nbsp;

## Directives

Special markers in the DOM those tell angular to modify the DOM in some ways

There are **two** types of directives.

1. **Structural Directives** : Change the DOM layout by adding or removing elements (e.g. `*ngif`, `*ngfor`)

2. **Attribute Directive** : Change the appearance or behavior of an element (e.g. `ngClass`, `ngStyle`)

&nbsp;

&nbsp;

## Event binding

Capturing user events and executing methods in the component.

```html
<button (click)="onClick()">Click Me</button>
```

&nbsp;

&nbsp;

## Property Binding

Binding properties of HTML elements to component properties.

```html
<img [src]="imageURL" />
```

&nbsp;

&nbsp;

# CSS Style (.css)

The CSS files define the styles specific to the component. Each component can have its own styles, allowing for encapsulation and modular design.

&nbsp;

&nbsp;

## Encapsulation

Styles defined in a component's CSS file are scoped to that component. This means style won't affect other components unless explicitly intended

&nbsp;

&nbsp;

## Selectors

Use standard CSS selectors (class, ID, element) to style elements in the template

&nbsp;

&nbsp;

## Angular's view Encapsulation

Angular provides different strategies for view Encapsulation, which determines how styles are applied:

- **Emulated** (default): Styles are scoped to the component using attributes.

- **None** : Styles apply globally

- **Shadow DOM** : Styles apply only to the component and isolated from the rest of the application

&nbsp;

&nbsp;

# Component Logic (.ts)

The TypeScript file contains the logic for the component, defining its behavior. properties and methods.

&nbsp;

&nbsp;

## Component Class

A TypeScript class that represents the component, annotated with the `@Component` decorator.

- **Properties** : Variables that hold the state of the components

- **Methods** : Functions that define the behavior of the component (e.g. handling user interactions)

&nbsp;

&nbsp;

## Lifecycle hooks

Special methods that allow to tap into key events in a component's lifecycle (e.g. `ngOnInit`, `ngOnChange`)

&nbsp;

&nbsp;

## Data binding

Mechanisms to bind component properties to template, allowing for dynamic content and interactivity

&nbsp;

&nbsp;

annotated ==> to add a short explanation or opinion to a text or image
