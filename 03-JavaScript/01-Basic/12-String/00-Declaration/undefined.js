//  Accessing an uninitialized variable
let num;
console.log(num);



// Accessing a non-existing property of an object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
  };
  
console.log(person.eyecolor);


// Accessing a out-of-bound array element
let arr = [1,2,3,4,5]
console.log(arr[5]);