// Activity 1 : Arithmetic operators
// Task 1

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

/* 
User input (for user input a index.html fill is needed)

let num3 = parseInt(prompt("Enter 1st number "));
let num4 = parseInt(prompt("Enter 2nd number "));
res = num3 + num4;
document.write("Addition is ", res);
*/

// Task 2
console.log(num1 - num2);

// Task 3
console.log(num1 * num2);

// Task 4
console.log(num1 / num2);

// Task 5
console.log(num1 % num2);



// Activity 2 : Assignment operators
// Task 6
console.log((num1 += 3));

// Task 7
console.log((num1 -= 4));


// Activity 3 : Comparison operators
// Task 8
if (num1 > num2) 
    console.log(num1, "is greater than", num2);
else if (num1 < num2) 
    console.log(num2, "is greater than", num1);
else 
    console.log("Both number are equal");


// Task 9
if (num1 >= num2) 
    console.log(num1, "is greater than or equal to", num2);
else if (num1 <= num2) 
    console.log(num2, "is greater than or equal to", num1);



// Task 10

let a = 2
let b = '2'

if(a===b)
    console.log("Both number are equal and having same type");
else if(a==b)
    console.log("Both number are equal but types are different");
else
    console.log("Both number are not equal");



// Activity 4 : Logical operators
// Task 11

let number = 12

if(number >= 1 && number <= 9)
console.log("this is 1 digit number");
else if(number >= 11 && number <= 99)
console.log("this is 2 digit number");
else
console.log("this is more than 2 digit number");



// Task 12

if((number%2==0 || number%3==0) && (number%6!=0))
    console.log(`${number} is divided by 2 or 3 but not by both`);
else
console.log(`${number} is divided by both 2 and 3`);



// Task 13

if(!1)
    console.log(true);
else
    console.log(false);




// Activity 5 : Ternary operator 
// Task 14

let res, check_number = -6
res = (check_number>=0?"Positive":"Negative")
console.log(res);
