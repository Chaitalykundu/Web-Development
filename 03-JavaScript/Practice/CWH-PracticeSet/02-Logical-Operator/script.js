// 1. Use logical operator to find whether the age of a person lies between 10 & 20

var age = 23;

if(age>=10 && age <=20)
    console.log(true);
else
    console.log(false);



// 2. Demonstrate the use of switch case statements in js

var age = 13;

switch(true){
    case age>=10 && age<=20: 
        console.log("Age is btw 10 & 20");
        break;
    default:
        console.log("Out of bound");
        break;
}




// 3. Write a js program to find if the number is divisible by 2 & 3

var number = 54;

if(number%6==0)
    console.log("Number is divisible by 2 & 3");
else
    console.log("Number is divisible");




// 4. Write a js program to find if the number is divisible by either 2 or 3

var number = 52;

if(number%6==0)
    console.log("Number is divisible by 2 & 3 both");
else if(number%2==0)
    console.log("Number is divisible by 2");
else if(number%3==0)
    console.log("Number is divisible by 3");
else
    console.log("Number is not divisible by 2 or 3")




// 5. Print "you can drive" or "you can't drive" based on age being greater than 18 using ternary operator

var age = 23;

if(age>=18)
    console.log("You can drive");
else
    console.log("You can't drive");


// Using ternary
console.log(age>=18?"You can drive": "You can't drive")