console.log("\t\t\t\t\t\t\t\t\t Primitive Datatype");

console.log("\t\t\t\t\t\t\t\t\t String");

// String
var Name = "Chaitaly";
console.log("My name is " + Name);
console.log("Datatype of Name is",(typeof Name));

console.log("\t\t\t\t\t\t\t\t\t Number");

var age = 21;
console.log("My age is", age);
console.log("Datatype of age is",(typeof age));

console.log("\t\t\t\t\t\t\t\t\t Boolean");

let istrue = true;
console.log("My details are", istrue);
console.log("Datatype of console is",(typeof istrue));

console.log("\t\t\t\t\t\t\t\t\t Null");

let nullvar = null;
console.log("My details are", nullvar);
console.log("Datatype of nullvar is",(typeof nullvar));

console.log("\t\t\t\t\t\t\t\t\t Undefined");

let undefvar ;
console.log("My details are", undefvar);
console.log("Datatype of undefvar is",(typeof undefvar));




console.log("\t\t\t\t\t\t\t\t\t Reference Data types");


console.log("\t\t\t\t\t\t\t\t\t Array");

let arr =  [21, 'Moni', false, '\n'];
console.log("Array elements are", arr);
console.log("Datatype of arr is",(typeof arr));


console.log("\t\t\t\t\t\t\t\t\t Object");

let StudentsMarks =  {
    Chaitaly : 89,
    Monisha : 78,
    'Ankita kundu' : 87  // If we want to give space we have to use '' or " "
}
console.log("Array elements are", StudentsMarks);
console.log("Datatype of StudentsMarks is",(typeof StudentsMarks));

console.log("\t\t\t\t\t\t\t\t\t Function");

function findname() {

}

console.log("Datatype of findname is",(typeof findname));

console.log("\t\t\t\t\t\t\t\t\t Date");

let date = new Date();
console.log("Date is",date);
console.log("Datatype of date is",(typeof date));
