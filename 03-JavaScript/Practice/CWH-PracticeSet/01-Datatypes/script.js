// 1. create a variable of a string and try to add a number to it

var a = "2";
var b = 4;

console.log(a+b);


// O.P: 24
//  Description : It will assume the value of b as string.
// N.B. :  When we add two strings , they will concatenate




// --------------------------------------------------


// 2. use typeof operator to find the datatype of the string in last question
console.log(typeof (a+b));

// o.p: string




// --------------------------------------------------


// 3. Create a const object in js. Can you change it to hold a number later?

const abc = {
    'firstName' : "Chaitaly",
}

// abc = 645;

// o.p: TypeError: Assignment to constant variable.

// N.B. : We can't change any const object to any other datatype



// --------------------------------------------------



// 4. Try to add a new key to the const object in problem 3. Were you able to do it?

abc['lastName']="Kundu"

console.log(abc)

// o.p: { firstName: 'Chaitaly', lastName: 'Kundu' }

// N.B. : We can add a new key, change key or values. But we can not change object i.e abc.



// --------------------------------------------------



// 5. Write a js program to create a word meaning dictionary of 5 words

const words = {
    "Abject": "Miserable",
    'Abrade': 'Wear away',
    'Callous': 'Insensitive',
    'Elucidate': 'To make clear',
    'Haughty': 'Proud'
}

console.log(words['Abject']);  // o.p: Miserable
console.log(words.Abject);  // o.p: Miserable

// We can access object using [] or . 