console.log("\t\t\t\t\t\t  Type Coercion ");

{
    let mystr = "Moni";
    let mynum = 21;
    console.log(mystr + mynum); // Moni21
}



console.log(3>1); // true
console.log(3<1); // false


// It will convert the string to number
console.log("2">1); // true


// null and 0 comparison
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true



// undefined and 0 comparison
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false



// NaN and 0 comparison
console.log(NaN >3); // false



// == vs ===
console.log("2"==2); // true
console.log("2"===2); // false

