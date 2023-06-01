console.log("\t\t\t\t\t\t  Type Conversion")
console.log("\t\t\t\t\t\t  Others to String")

// Number to string

console.log("\t\t\t\t\t\t  Number to String")

let num=34;
numConvo = String(num);
console.log(num, num.length , (typeof num));

console.log(num.toString(), typeof num.toString());     // var_name.toString()
console.log(numConvo, numConvo.length , (typeof numConvo));     // String(var_name)


// Boolean to String

console.log("\t\t\t\t\t\t  Boolean to String")

let boolean = true;
booleanconvo = String(boolean);
console.log(boolean, boolean.length , (typeof boolean));
console.log(boolean.toString(), typeof boolean.toString());
console.log(booleanconvo, booleanconvo.length , (typeof booleanconvo));


// Date to String

console.log("\t\t\t\t\t\t  Date to String")

let date = new Date();
dateconvo = String(date);
console.log(date, date.length, (typeof date));
console.log(date.toString(), typeof date.toString());
console.log(dateconvo, dateconvo.length, (typeof dateconvo));


// Array to String

console.log("\t\t\t\t\t\t  Array to String")

let arr = [1,2,3,4,5];
arrConvo = String(arr);
console.log(arr, arr.length , (typeof arr));
console.log(arr.toString(), typeof arr.toString());
console.log(arrConvo, arrConvo.length, (typeof arrConvo));
