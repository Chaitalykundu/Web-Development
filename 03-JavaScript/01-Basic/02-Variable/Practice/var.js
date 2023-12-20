var a=3;
var b=5;
var c=a+b;

console.log(c);  // O.P: 8



// var is global scope

console.log("before redeclaration",b);  // before redeclaration 5

{
    var b = "Hi"
    console.log("before redeclaration inside of block",b);  // before redeclaration inside of block Hi
}

console.log("before redeclaration outside of block",b);  // before redeclaration outside of block Hi