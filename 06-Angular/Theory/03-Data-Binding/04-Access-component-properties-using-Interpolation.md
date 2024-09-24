# Overview

- [1. Accessing Single Component Properties](#1-accessing-single-component-properties)
- [2. Accessing Nested Component Properties](#2-accessing-nested-component-properties)
- [3. Accessing Properties in Arrays](#3-accessing-properties-in-arrays)
- [4. Accessing Properties from Objects in Arrays](#4-accessing-properties-from-objects-in-arrays)
- [5. Accessing Methods in Interpolation](#5-accessing-methods-in-interpolation)

&nbsp;

&nbsp;

&nbsp;

# Summary

- You can access any component property or method using Angular interpolation.

- Properties can be simple values, arrays, or even nested objects.

- For arrays and objects, you can use dot notation or bracket notation to access individual elements or properties.

- Be cautious about calling methods with expensive logic in interpolation as they get executed on each change detection cycle.

&nbsp;

&nbsp;

# 1. Accessing Single Component Properties

### Define Properties in the Component

```ts
export class AccessingComponentPropertiesComponent {
  username: string = "John Doe";
}
```

&nbsp;

### Use Interpolation to Access These Properties

```html
<p>Welcome {{username}}</p>
```

&nbsp;

&nbsp;

# 2. Accessing Nested Component Properties

### Define a Nested Object in the Component

```ts
export class ExampleComponent {
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

&nbsp;

### Access Nested Properties Using Interpolation

```html
<p>Name: {{ user.name }}</p>
<p>Age: {{ user.age }}</p>
<p>Location: {{ user.address.city }}, {{ user.address.country }}</p>
```

&nbsp;

&nbsp;

# 3. Accessing Properties in Arrays

### Define an Array in the Component

```ts
export class ExampleComponent {
  fruits = ["Apple", "Mango", "Banana", "Kiwi", "Orange"];
}
```

&nbsp;

### Access Array Elements Using Interpolation

```html
<p>{{fruits[3]}}</p>
```

&nbsp;

&nbsp;

# 4. Accessing Properties from Objects in Arrays

### Define an Array of Objects in the Component

```ts
export class ExampleComponent {
  userDetails = [
    { name: "Chaitaly", age: 24 },
    { name: "Rupa", age: 23 },
    { name: "Ankita", age: 25 },
  ];
}
```

&nbsp;

### Access Object Properties in the Array Using Interpolation

```html
<p>{{userDetails[0].name}}</p>
<p>{{userDetails[1].age}}</p>
<p>{{userDetails[2].name}}, {{userDetails[2].age}}</p>
```

&nbsp;

&nbsp;

# 5. Accessing Methods in Interpolation

### Define a Method in the Component

```ts
firstname = "Chaitaly";
  lastname = "Kundu";

  getName(){
    return `${this.firstname} ${this.lastname}`;
  }
```

&nbsp;

### Use Interpolation to Call the Method

```html
<p>{{getName()}}</p>
```

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
