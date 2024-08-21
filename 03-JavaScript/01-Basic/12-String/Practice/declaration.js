let str = "It's alright";
console.log(str);   // O.P: It's alright



// character of a string in specific index
console.log(str[3]);  // O.P: s


// length of a string
console.log(str.length);    // O.P: 12


// for loop to iterate over a string
for(i=0;i<str.length;i++)
    console.log(str[i]);    


    

// immutable
str = "new string"
console.log(str);
str.replace("new", "replaced");
console.log(str);



let fname = "Chaitaly"
let firstName = new String("Chaitaly")
console.log(fname==firstName); // true
console.log(fname===firstName); // false
console.log(typeof(fname)); // string
console.log(typeof(firstName)); // object

