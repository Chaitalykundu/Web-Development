let result;

result = "4" - "2";
console.log(result); // 2
console.log(typeof (result));


result = "4" - 2;
console.log(result); // 2
console.log(typeof (result));


result = "4" * 2;
console.log(result); // 8
console.log(typeof (result));


result = "4" / 2;
console.log(result); // 2
console.log(typeof (result));


result = "hello" - 2;
console.log(result); // NaN
console.log(typeof (result));


result = "hello" - "World";
console.log(result); // NaN
console.log(typeof (result));


result = 2 - "hello";
console.log(result); // NaN
console.log(typeof (result));


result = "hello" * 4;
console.log('"hello" * 4 =', result); // NaN
console.log(typeof (result));



// If we use `+`, it will concatinate and result will be in string
result = "hello" + 2;
console.log(result); // hello2
console.log(typeof (result)); // String