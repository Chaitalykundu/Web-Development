const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); // Accessing whole array
console.log(cars[0]);  // Accessing the first value

// type of array

console.log("typeof array is", typeof(cars));


// Changing values

cars[0] = "Opel";
console.log("Values after changing",cars);



// Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());