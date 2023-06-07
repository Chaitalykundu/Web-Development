// Iterates over a string
const fName="Chaitaly";

for(const x of fName){
    console.log("string", x);
}


// Iterates over an array

const array=['a','b','c'];
for(x of array){
    console.log("array", x);
}



// Iterates over a set

const letters = new Set(["a","b","c"]);

for (const x of letters) {
    console.log("set", x);
}

// Iterates over a map

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

for (const x of fruits) {
    console.log("map", x);
}
