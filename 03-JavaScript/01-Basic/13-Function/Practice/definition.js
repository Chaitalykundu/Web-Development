// A function expression can be stored in a variable:

const x = function (a, b) {
    return a * b;
};

let z = x(4, 3);

console.log(x);  // O.P: [Function: x]
console.log("Ans of multiplication is",z);     // O.P: 12



// Function() Constructor

const y = new Function("a", "b", "return a + b");

let ans = y(4, 3);
console.log("Addition",ans);    // O.P: 7





// The `arguments.length` property returns the number of arguments received when the function was invoked


function myFunction(a, b) {
    return arguments.length;
}

console.log(myFunction(2,3));