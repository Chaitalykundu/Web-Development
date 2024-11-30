// String => NaN

let str = "33abc"

console.log(typeof str);    // string
console.log(str);   // 33abc

let num = Number(str)

console.log(typeof num);    // number
console.log(num);    // NaN



// null => 0

let str1 = null

console.log(typeof str1);    // object
console.log(str1);   // null

let num1 = Number(str1)

console.log(typeof num1);    // number
console.log(num1);    // 0




// undefined => NaN

let str2 = undefined

console.log(typeof str2);    // undefined
console.log(str2);   // undefined

let num2 = Number(str2)

console.log(typeof num2);    // number
console.log(num2);    // NaN