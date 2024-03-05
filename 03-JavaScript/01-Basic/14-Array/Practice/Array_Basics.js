const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); // Accessing whole array
console.log(cars[0]);  // Accessing the first value


// type of array
console.log("typeof array is", typeof(cars));  // typeof array is object


// Changing values
cars[0] = "Opel";
console.log("Values after changing",cars);


// Adding the values
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log((fruits));  // [ 'Banana', 'Orange', 'Apple', 'Lemon' ]



// Converting an Array to a String
console.log(typeof(fruits.toString()));  // O.P: string
console.log(typeof(fruits)); //O.P: oject

