// length
let n = "Chaitaly";
console.log("length,", n.length);

// toUpperCase()
console.log("toUpperCase,", n.toUpperCase());

// toLowerCase()
let m = "ChaItAly";
console.log("toLowerCase,", m.toLowerCase());

// slice()
console.log("slice,", n.slice(2, 7));
console.log("slice,", n.slice(5));
console.log("slice,", n.slice(-7, 5));
console.log("slice,", n.slice(-7, -4));
console.log("slice,", n.slice(-3));

// substring()
console.log("substring", n.substring(2, 6)); // aita
console.log("substring", n.substring(4)); // aita
console.log("substring", n.substring(4, 2)); // ai
console.log("substring", n.substring(-2)); // Chaitaly
console.log("substring", n.substring(4,-2)); // Chaitaly

// replace
let fruit = "banana";
console.log(fruit.replace("banana", "apple")); // apple

console.log(fruit); // banana

// concat

const fname = " Chaitaly";
const greeting = "Good Morning";

console.log("Concatenation, ", greeting.concat(fname));

// trim

const firstname = "            Chaitaly           ";
const lastName = "Kundu";
console.log(firstname, lastName); //            Chaitaly            Kundu
console.log(firstname.trim(), lastName); //Chaitaly Kundu

// indexOf()
var str = "This is a string which is part of JS";
console.log(str.indexOf("is")); //2

// lastIndexOf()
var str = "This is a string which is part of JS";
console.log(str.lastIndexOf("is")); //23

// at
let text = "Chaitaly";
console.log(text.at(4)); // t

// charAt()
let text1 = "HELLO WORLD";
console.log(text1.charAt(4)); // O

// includes()

let text2 = "Hello world, welcome to the universe.";
console.log(text2.includes("world")); // true
