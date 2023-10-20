// using third variable

let a = 5, b =6;

console.log("Before swapping : a = " + a + " and b = " + b)

var t = a;
a = b;
b = t;

console.log("After swapping : a = " + a + " and b = " + b);



// without using third variable


let num1 = 20, num2 =30;

console.log("\nBefore swapping : num1 = " + num1 + " and num2 = " + num2)

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log("After swapping : num1 = " + num1 + " and num2 = " + num2);




// using ^ operator



console.log("\nBefore swapping : num1 = " + num1 + " and num2 = " + num2)

num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;

console.log("After swapping : num1 = " + num1 + " and num2 = " + num2);
