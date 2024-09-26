# Overview

- [Property Binding](#property-binding)
- [Syntax of Property Binding](#syntax-of-property-binding)
- [Example](#example)
  - [Explanation](#explanation)
- [Property Binding vs. Attribute Binding](#property-binding-vs-attribute-binding)
  - [Example](#example-1)
- [Commonly Used Property Bindings](#commonly-used-property-bindings)
- [Performance Considerations](#performance-considerations)

&nbsp;

&nbsp;

&nbsp;

# Summary

- **_Syntax_**: `[property]`="expression" allows dynamic data binding from the component to the DOM element.

- **_Common Properties_**: Properties like src, href, disabled, class, style, and others can be bound.

- **_Boolean Binding_**: Angular handles boolean properties efficiently (true or false).

- **_Dynamic Content_**: Property binding allows dynamic updates of the DOM elements based on the component's data or logic.

- **_Difference from Attributes_**: Property binding updates the properties of DOM elements (dynamic), while attributes are static and don’t change after initial rendering.

&nbsp;

&nbsp;

# Property Binding

Property Binding in Angular is a powerful way to bind data from a component class to an HTML element's property, allowing dynamic and interactive views.

It enables you to set the values of DOM properties (like HTML attributes, styles, and class names) based on component data.

&nbsp;

In Angular, property binding allows you to set an element’s property (not attributes) using the component’s data.

The data flow is one-way—from the component to the view.

Property binding is denoted by `square brackets ([ ])` around the element property

&nbsp;

&nbsp;

# Syntax of Property Binding

```html
<element [property]="expression"></element>
```

- **property**: This is the DOM property (e.g., src, disabled, value, etc.) that you want to bind.

- **expression**: This is an Angular expression or a component variable that provides the value for the property.

&nbsp;

&nbsp;

# Example

```ts
export class PropertyBindingComponent {
  imageUrl = "https://picsum.photos/200";
  isDisabled = true;
}
```

```html
<!-- Binding the image source -->
<img [src]="imageUrl" alt="random-image" />

<!-- Binding the button disabled property -->
<button [disabled]="isDisabled">Submit</button>
```

&nbsp;

### Explanation

- The `[src]` property binding sets the src property of the `<img>` element dynamically based on the `imageUrl` property in the component.

- The `[disabled]` property binding sets the `disabled` property of the `<button>` element based on the `isDisabled` property. If `isDisabled` is true, the button will be disabled.

&nbsp;

&nbsp;

# Property Binding vs. Attribute Binding

It’s important to note that property binding differs from attribute binding.

While attributes are static and are set at the time the element is created, properties are dynamic and can change over time.

- **_Attribute_**: Modifies the initial configuration of an element (static).
- **_Property_**: Changes the state of an element dynamically (dynamic).

&nbsp;

&nbsp;

## Example

```html
<!-- Attribute Binding (Static) -->
<img src="angular-logo.png" />

<!-- Property Binding (Dynamic) -->
<img [src]="imageUrl" />
```

In the first case, the `src` attribute will be set once when the element is created.

In the second case, the `src` property can be updated dynamically if `imageUrl` changes.

&nbsp;

&nbsp;

# Commonly Used Property Bindings

| Property      | Use                                                                                   | Example                                                  |
| ------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `[src]`       | Used to bind the **src** property of an `<img>` element.                              | `<img [src]="imageUrl" alt="Dynamic Image" />`           |
| `[href]`      | Used to bind the **href** property of an `<a>` (anchor) element.                      | `<a [href]="dynamicLink" target="_blank">Go to link</a>` |
| `[disabled]`  | Used to **enable or disable a button or form field** based on the component property. | `<button [disabled]="isDisabled">Submit</button>`        |
| `[value]`     | Used to bind the **value property of an input element**.                              | `<input [value]="username" />`                           |
| `[class]`     | Used to dynamically bind a **class** to an element.                                   | `<div [class]="dynamicClass"></div>`                     |
| `[style]`     | Used to dynamically set **inline styles** on an element.                              | `<div [style.color]="fontColor">Colored Text</div>`      |
| `[innerHTML]` | Used to bind **HTML content** to an element.                                          | `<div [innerHTML]="htmlContent"></div>`                  |
| `[checked]`   |                                                                                       |                                                          |
| `[readonly]`  |                                                                                       |                                                          |
|               |                                                                                       |                                                          |

&nbsp;

&nbsp;

# Performance Considerations

- <u>**One-Way Data Flow**</u>: Property binding is a one-way data binding, so data only flows from the component to the DOM element. This ensures predictable data flow and better performance.

- <u>**Change Detection**</u>: Angular’s change detection mechanism automatically tracks changes in the component’s data and updates the DOM accordingly. However, be cautious with frequently updated properties or complex expressions inside bindings, as these can impact performance.

&nbsp;
