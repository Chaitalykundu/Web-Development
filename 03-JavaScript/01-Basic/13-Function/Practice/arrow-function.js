// let x=5, y=6
const ans = (x, y) => x * y;
console.log(ans(2,3)); // O.P: 6


const x = (x, y) => {
return x * y;
};
console.log(x(2,5)); // O.P: 10

const greet = (name) => `Hello ${name}`;
console.log(greet("Chaitaly")); // O.P. Hello Chaitaly


// 1. No Parameters
const greeting = () => "Good Morning"
console.log(greeting());


// 2. Single Parameter (No Parentheses Needed)
const squareCalculate = x => x*x;
console.log(squareCalculate(4));


// 3. Multiple Parameters (Parentheses Required)
const multipleParameter = (a,b,c)=> (a>b && a>c)?a:(b>a && b>c)?b:c;
console.log(multipleParameter(4,5,4));
// Multi-line Function (With {} and return)
