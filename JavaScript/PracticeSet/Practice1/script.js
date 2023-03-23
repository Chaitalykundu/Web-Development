// 1. create a variable of a string and try to add a number to it

var a = "2";
var b = 4;

console.log(a+b);

// N.B. : When we add two strings , they will concatenate




// 2. use typeof operator to find the datatype of the string in last question
console.log(typeof (a+b));

// 3. Create a const object in js. Can you change it to hold a number later?

const abc = {
    'firstName' : "Chaitaly",
}

// abc = 645;

// N.B. : We can't change any const object to any other datatype



// 4. Try to add a new key to the const object in problem 3. Were you able to do it?
abc['lastName']="Kundu"

console.log(abc)





// 5. Write a js program to create a word meaning dictionary of 5 words

const words = {
    "Abject": "Miserable",
    'Abrade': 'Wear away',
    'Callous': 'Insensitive',
    'Elucidate': 'To make clear',
    'Haughty': 'Proud'
}

console.log(words['Abject']);
console.log(words.Haughty); 

// We can access object using [] or . 