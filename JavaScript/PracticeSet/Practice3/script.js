// 1. Write a program to print the marks of a student in an object using for loop. 
//   obj = { Harry : 98, Rohan: 70, Aakash: 7}

let marks = { Harry : 98, Rohan: 70, Aakash: 7};

let len = Object.keys(marks).length;  // Object.keys find the keys of an object
for (let i=0; i<len;i++)
    console.log("Mark of", Object.keys(marks)[i], "is", marks[Object.keys(marks)[i]]);



// 2. Write a program in Q1 using for in loop

for(let mark in marks){
    console.log("Mark of", mark , "is", marks[mark]);
}


// 3. Write a program to print "try again" until the user enters the correct number

let target = 7;
let i;
while(i!=target)
{
    i = prompt("Try again");
}


// 4. Write a function to find mean of 5 numbers

for(let i=1;i<=5;i++){
    prompt("Enter number : ");
    sum += i;
}
mean = sum/5;