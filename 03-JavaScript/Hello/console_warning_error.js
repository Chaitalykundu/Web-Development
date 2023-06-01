console.log("\t\t\t\t\t\t\t\t\t Console log, Warning, Error          ");

console.time('Code took ');     //Timer start

var full_name = "Chaitaly Kundu";
console.log("My Full Name is " + full_name);    // string

var age = 21;
console.log("My age is " + age);    // number

var x =true;
console.log(x);     // boolean

var y;
console.log(y);  // If we don't assign any value, it will result undefined

var a = 5; var b=2;
console.log(a,b);

console.log([1,2,3,4]);     // Array

console.log({Name: "Chaitaly", Age: 21});    // Object

console.table({Name: "Chaitaly", Age: 21});     // Table

console.warn("This is a warning");      // Warning

// console.clear();        // Clear the console

console.timeEnd('Code took ')       //Timer end

console.error("This is an error")       // Error