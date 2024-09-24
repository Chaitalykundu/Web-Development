# Overview

- [Introduction](#introduction)
- [Types of One-Way Data Binding](#types-of-one-way-data-binding)
- [1. Interpolation](#1-interpolation)
  - [Example](#example)
    - [Explanation](#explanation)
- [2. Property Binding](#2-property-binding)
  - [Example](#example-1)
    - [Explanation](#explanation-1)
- [3. Event Binding](#3-event-binding)
  - [Example](#example-2)
    - [Explanation](#explanation-2)
- [Key Differences Between One-Way Data Binding and Two-Way Data Binding](#key-differences-between-one-way-data-binding-and-two-way-data-binding)
- [Advantages of One-Way Data Binding](#advantages-of-one-way-data-binding)
- [When to Use One-Way Data Binding](#when-to-use-one-way-data-binding)

&nbsp;

&nbsp;

&nbsp;

# Summary

- One-Way Data Binding ensures that data flows from the component to the view, allowing you to display and update content efficiently.

- Techniques include interpolation, property binding, and event binding.

- It is ideal for situations where you don’t need the view to update the component’s data directly (except in cases where an event triggers changes).

&nbsp;

&nbsp;

# Introduction

In Angular, **one-way data binding** is a mechanism where the **_data flow is unidirectional_**, meaning that changes in the component’s state affect the view (HTML), but changes in the view do not directly affect the component’s state.

This approach is essential for ensuring that the application maintains a clear and predictable data flow, making it easier to debug and manage.

&nbsp;

&nbsp;

# Types of One-Way Data Binding

- **_Interpolation:_** Binding component properties or methods to the view.

- **_Property Binding_**: Binding data to element properties in the view.

- **_Event Binding_**: Binding view events to component methods.

&nbsp;

&nbsp;

# 1. Interpolation

Interpolation is a one way data binding that allows to **bind a component's data** to HTML that come from component properties or methods.

It uses `{{ }}` double curly braces syntax.

&nbsp;

## Example

```ts
export class AppComponent {
  username: string = "Alice";
}
```

```html
<p>Welcome, {{ username }}!</p>
```

&nbsp;

### Explanation

- Here, `{{ username }}` binds the value of `username` from the component to the view.

- When `username` is updated in the component, the change automatically reflects in the view.

- Data flows **one way** from the component to the view, not the other way around.

&nbsp;

&nbsp;

# 2. Property Binding

Property binding allows you to **bind values from the component directly to HTML element properties**.

It uses `[ ]` square bracket syntax.

&nbsp;

## Example

```ts
export class AppComponent {
  imageUrl: string = "assets/profile.jpg";
  isDisabled: boolean = true;
}
```

```html
<img [src]="imageUrl" alt="Profile Image" />
<button [disabled]="isDisabled">Submit</button>
```

&nbsp;

&nbsp;

### Explanation

- The `[src]` and `[disabled]` are examples of property binding.

- imageUrl is bound to the src attribute of the `<img>` tag, and isDisabled is bound to the disabled property of the `<button>` tag.

- When `imageUrl` or `isDisabled` changes in the component, the change automatically updates the corresponding element in the view.

- Data flow is one-way: from the component to the view.

&nbsp;

&nbsp;

# 3. Event Binding

While interpolation and property binding are for passing data from the component to the view, event binding lets the view trigger changes in the component by responding to DOM events.

The syntax uses `( )` parentheses.

&nbsp;

## Example

```ts
export class EventBindingComponent {
  count = 0;
  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
  decrease() {
    this.count--;
  }
}
```

```html
<button (click)="increment()">Increase</button>
<button (click)="decrease()">Decrease</button>
<button (click)="reset()">Reset</button>
<p>Count : {{count}}</p>
```

&nbsp;

### Explanation

- `(click)="increment()"` binds the button's click event to the `increment()` method in the component.

- Each time the button is clicked, the method increments count, and Angular automatically reflects the updated count in the view.

- The event triggers the data flow from the view to the component, and the component updates the view, maintaining one-way data binding

&nbsp;

&nbsp;

# Key Differences Between One-Way Data Binding and Two-Way Data Binding

| One-Way Data Binding                                                                                                                              | Two-Way Data Binding                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Data flows from the component to the view                                                                                                         | Data flows in both directions between the view and the component.                         |
| Changes in the view don't affect the component's data directly (except for event binding, which handles interactions like user clicks or typing). | Changes made in the view (e.g., user input) update the component's state, and vice versa. |
| Techniques: Interpolation, Property Binding, Event Binding.                                                                                       | Technique: `[(ngModel)]` (used for forms or inputs in Angular).                           |
|                                                                                                                                                   |                                                                                           |

&nbsp;

&nbsp;

# Advantages of One-Way Data Binding

- **_<u>Predictable Data Flow</u>_**: Since data flows only from the component to the view, it is easier to understand, manage, and debug.

- **_<u>Performance</u>_**: One-way data binding reduces the complexity of constantly synchronizing the data between the component and the view, improving performance in certain scenarios.

- **_<u>Separation of Concerns</u>_**: One-way data binding keeps the logic in the component and the rendering in the view, which can lead to more maintainable code.

&nbsp;

&nbsp;

# When to Use One-Way Data Binding

- <u>**_Read-Only Data_**</u>: When the data in the view is for display purposes only and doesn’t need to be updated by the user.

- <u>**_Simple Interactions_**</u>: When the interaction between the user and the application is minimal, such as clicking a button or displaying a value.

- <u>**_Rendering Static Data_**</u>: When you’re working with static data or content that doesn't need to be edited by the user.

&nbsp;

&nbsp;
