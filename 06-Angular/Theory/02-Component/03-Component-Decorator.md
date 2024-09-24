# Overview

- [Component Decorator](#component-decorator)
- [Defining a component's template](#defining-a-components-template)
- [Declaring a component's styles](#declaring-a-components-styles)

&nbsp;

&nbsp;

&nbsp;

# Component Decorator

`@Component Decorator` tells angular that this class is a component.

The object passed to the `@Component` decorator is called the **component's metadata**. This includes the **selector**, **template**, **styles**, and other properties.

&nbsp;

Structure of Component Decorator

```ts
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
```

&nbsp;

|                   |                                           |
| ----------------- | ----------------------------------------- |
| **selector** :    | unique name or identifier of a component  |
| **standalone** :  | independent (implemented from angular 17) |
| **imports**       | It contains routes, components, modules   |
| **templateUrl** : | HTML file URL                             |
| **styleUrl** :    | CSS file URL                              |
|                   |                                           |

&nbsp;

&nbsp;

# Defining a component's template

In component decorator we can pass html in two ways.

1. External file
2. Internal HTML code

When we use Internal HTML code we name it `template` instead of `templateUrl`

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

If you want your template to span multiple lines, use backticks (`).

```ts
@Component({
  selector: 'app-component-overview',
  template: `
    <h1>Hello World!</h1>
    <p>This template definition spans multiple lines.</p>
  `
})
```

An Angular component requires a template defined using `template` or `templateUrl`. You cannot have both properties in a component.

&nbsp;

&nbsp;

# Declaring a component's styles

In component decorator we can pass html in two ways.

1. External file
2. Internal CSS code

When we use Internal CSS code we name it `styles` instead of `styleUrl`

```ts
@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styles: ['.para{color:red}']
})
```

The styles property takes an array of strings that contain the CSS rule declarations.

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
