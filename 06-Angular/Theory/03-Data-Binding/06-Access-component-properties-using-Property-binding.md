# Overview

- [1. Property Binding with Objects and Arrays](#1-property-binding-with-objects-and-arrays)
- [2. Binding Boolean Properties](#2-binding-boolean-properties)
- [3. Conditional Property Binding](#3-conditional-property-binding)
- [4. Using null and undefined in Property Binding](#4-using-null-and-undefined-in-property-binding)
- [5. Property Binding with Events](#5-property-binding-with-events)

&nbsp;

&nbsp;

&nbsp;

# 1. Property Binding with Objects and Arrays

Angular property binding is not limited to simple strings or booleans. You can also bind arrays, objects, and more complex data structures.

&nbsp;

## Example: Binding to an Object Property

```ts
export class PropertyBindingComponent {
  user = {
    name: "Chaitaly",
    age: 24,
    profileImage: "https://picsum.photos/200",
  };
}
```

&nbsp;

&nbsp;

```html
<img [src]="user.profileImage" alt="profile-Image" />
<form>
  <label for="name">Name : </label>
  <input
    type="text"
    id="name"
    [value]="user.name"
    placeholder="Enter your name"
  />
</form>
```

&nbsp;

### Explanation

- We bind `user.profileImage` to the `src` property of the image.

- We bind `user.name` to the `value` property of an input field in a form.

&nbsp;

&nbsp;

# 2. Binding Boolean Properties

When binding boolean properties (e.g., **checked, disabled, readonly**), Angular evaluates the expression and assigns the correct value (true or false) to the property.

&nbsp;

## Example

```ts
export class PropertyBindingComponent {
  isDisabled = true;
  isChecked = true;
  isReadOnly = true;
}
```

```html
<form>
  <label for="name">Name : </label>
  <input
    type="text"
    id="name"
    value="name"
    placeholder="Enter your name"
    [readonly]="isReadOnly"
  />

  <br />

  <label for="hobbies">Hobbies : </label>
  <input
    type="checkbox"
    id="hobbies"
    value="gardening"
    [checked]="isChecked"
    [readonly]="isReadOnly"
  />Gardening

  <input
    type="checkbox"
    id="hobbies"
    value="swimming"
    [checked]="isChecked"
  />Swimming

  <input type="checkbox" id="hobbies" value="reading" />Reading

  <input type="checkbox" id="hobbies" value="writing" />Writing

  <button [disabled]="isDisabled">Reset</button>
</form>
```

Note : It is not possible to set checkboxes to read-only using standard HTML attributes

&nbsp;

### Explanation

- The `checked` property will be set to `true`, so the checkbox will be checked initially.

&nbsp;

&nbsp;

# 3. Conditional Property Binding

You can use conditional logic within property bindings to dynamically set element properties based on conditions.

&nbsp;

## Example

```ts
export class AppComponent {
  isSpecial: boolean = true;
}
```

```html
<div [class.special]="isSpecial">Special Content</div>
```

```css
.special {
  background-color: bisque;
}
```

&nbsp;

### Explanation

If `isSpecial` is `true`, the **special class** will be applied to the `<div>`. Otherwise, it won’t be applied.

&nbsp;

&nbsp;

# 4. Using null and undefined in Property Binding

If the expression you bind to a property evaluates to **null** or **undefined**, Angular removes the property from the DOM element.

&nbsp;

## Example

```ts
export class AppComponent {
  imageUrl: string | null = null;
}
```

```html
<img [src]="imageUrl" />
```

&nbsp;

### Explanation

If `imageUrl` is **null**, Angular will remove the `src` property from the `<img>` element.

&nbsp;

&nbsp;

# 5. Property Binding with Events

Angular also allows you to bind properties that change dynamically based on events like user input.

&nbsp;

## Example

```ts
export class AppComponent {
  isDisabled: boolean = true;

  toggleButtonState() {
    this.isDisabled = !this.isDisabled;
  }
}
```

```html
<button (click)="toggleButtonState()">Toggle Button State</button>
<button [disabled]="isDisabled">Submit</button>
```

&nbsp;

### Explanation

- The `toggleButtonState()` method is called when the first button is clicked, which toggles the value of `isDisabled`.

- The `disabled` property of the second button updates based on the current value of `isDisabled`.

&nbsp;

&nbsp;
