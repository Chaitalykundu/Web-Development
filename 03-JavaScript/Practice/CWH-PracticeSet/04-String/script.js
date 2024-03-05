// 1. What will the following print in JS?
//    console.log("har\"".length)


console.log("har\"".length) // 4


// 2. Explore the includes, startWith & endWith function of a string
let text2 = "Hello world, Welcome to the Universe";

// includes
console.log("includes",text2.includes("world")); // true


// startWith
console.log("startwith", text2.startsWith("Hello"));  // true
console.log("startwith", text2.startsWith("welcome")); // false


// endwith
console.log("endwith",text2.endsWith("welcome")); // false
console.log("endwith",text2.endsWith("se")); // true





// 3. Write a program to convert a given string to lowercase
console.log(text2.toLowerCase()) // hello world, welcome to the universe





// 4. Extract the amount out of the string "Please give rs 1000"
let str = "Please give rs 1000"
let amount = str.slice("Please give rs ".length)
console.log("Amount is", amount);
// console.log(typeof amount);




// 5. Try to change the 4th character of a string. Were you able to do it
let text = "Hello";
text[4] = 'y'
console.log(text);

// Note : we can't change the characters as string is immutable