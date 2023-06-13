# JavaScript Function call()

# Method Reuse

With the `call()` method, you can write a method that can be used on different objects.

&nbsp;

# All Functions are Methods

In JavaScript all functions are object methods.

If a function is not a method of a JavaScript object, it is a function of the global object

The example below creates an object with 3 properties, firstName, lastName, fullName.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// This will return "John Doe":
person.fullName();
```

In the example above, `this` refers to the **person object**.

`this.firstName` means the **firstName** property of **this**.

Same as:

`this.firstName` means the **firstName** property of **person**.

&nbsp;
&nbsp;
&nbsp;
