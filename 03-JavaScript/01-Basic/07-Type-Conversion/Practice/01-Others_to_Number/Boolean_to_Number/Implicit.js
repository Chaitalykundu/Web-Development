let result;

result = 4 + true;
console.log(result); // 5
console.log(typeof result); // number

result = 4 + false;
console.log(result); // 4
console.log(typeof result); // number

result = 4 - true;
console.log(result); // 3
console.log(typeof result); // number

result = "4" - true;
console.log(result); // 3
console.log(typeof result); // number
