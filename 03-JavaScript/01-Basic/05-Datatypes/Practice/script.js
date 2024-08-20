console.log("\t\t\t\t\t\t\t\t\t Primitive Datatype");


// Number

console.log("\t\t\t\t\t\t\t\t\t Number");

var age = 21;
console.log("My age is", age);
console.log("Datatype of age is",(typeof age));

// Null
console.log("\t\t\t\t\t\t\t\t\t Null");

let nullvar = null;
console.log("My details are", nullvar);
console.log("Datatype of nullvar is",(typeof nullvar));

// Boolean
console.log("\t\t\t\t\t\t\t\t\t Boolean");

let istrue = true;
console.log("My details are", istrue);
console.log("Datatype of istrue is",(typeof istrue));

//  BigInt
console.log("\t\t\t\t\t\t\t\t\t BigInt");

let value = BigInt(573) + BigInt(7);
console.log("Value is", value);
console.log("Datatype of value is",(typeof value));

// String

console.log("\t\t\t\t\t\t\t\t\t String");

var Name = "Chaitaly";
console.log("My name is " + Name);
console.log("Datatype of Name is",(typeof Name));

// Symbol

console.log("\t\t\t\t\t\t\t\t\t Symbol");

var sym = Symbol("I am a symbol")
console.log(sym);
console.log("Datatype of sym is",(typeof sym));


let id = Symbol("123");
let anotherID = Symbol("123");
console.log("check symbol", id==anotherID) // false

// Undefined
console.log("\t\t\t\t\t\t\t\t\t Undefined");

let undefvar ;
console.log("My details are", undefvar);
console.log("Datatype of undefvar is",(typeof undefvar));



// non-primitives or reference datatypes

console.log("\t\t\t\t\t\t\t\t non-primitives or Reference Data types");


// Array
console.log("\t\t\t\t\t\t\t\t\t Array");

let arr =  [21, 'Moni', false, '\n'];
console.log("Array elements are", arr);
console.log("Datatype of arr is",(typeof arr));

// Object

console.log("\t\t\t\t\t\t\t\t\t Object");

let StudentsMarks =  {
    Chaitaly : 89,
    "Monisha" : 78,
    'Ankita kundu' : 87  // If we want to give space we have to use '' or " "
}
console.log("Array elements are", StudentsMarks);
console.log(StudentsMarks["Chaitaly"])
console.log("Datatype of StudentsMarks is",(typeof StudentsMarks));
console.log("Datatype of StudentsMarks['Chaitaly'] is",(typeof StudentsMarks['Chaitaly']));
console.log(StudentsMarks["Moni"]) // It will show undefined as it is not present in object


// Function
console.log("\t\t\t\t\t\t\t\t\t Function");

function findname() {

}

console.log("Datatype of findname is",(typeof findname));


// Date
console.log("\t\t\t\t\t\t\t\t\t Date");

let date = new Date();
console.log("Date is",date);
console.log("Datatype of date is",(typeof date));
