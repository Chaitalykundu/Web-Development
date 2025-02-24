// Multiple parameters
function addition(a, b) {
    return a + b;
}
console.log(addition(2, 3));


// Default Parameters
function defaultParameter(name, age = 24) {
    console.log(name + " is " + age + " years old");
}
defaultParameter("alice");


// Rest parameter
function sumOfNums(...nums) {
    let sum = 0;
    for (let i of nums) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNums(1, 2, 3, 4, 5, 6));