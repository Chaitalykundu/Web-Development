The scenarios which return `undefined`

1. Accessing an uninitialized variable

   ```js
   let num;
   console.log(num);
   ```

&nbsp;

2. Accessing a non-existing property of an object

   ```js
   const person = {
     firstName: "John",
     lastName: "Doe",
     age: 50,
   };

   console.log(person.eyecolor);
   ```

&nbsp;

3. Accessing a out-of-bound array element

   ```js
   let arr = [1, 2, 3, 4, 5];
   console.log(arr[5]);
   ```
