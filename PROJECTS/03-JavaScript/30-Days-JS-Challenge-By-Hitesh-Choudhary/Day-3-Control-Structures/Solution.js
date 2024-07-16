// Activity 1 : If-Else statements
// Task 1

let num = -76

if(num>0)
    console.log("Positive");
else if(num<0)
    console.log("Negative");
else
    console.log("Zero");



// Task 2

let age = 45
if(age>=18)
    console.log("Eligible to vote");
else
    console.log("Not eligible to vote");



// Activity 2 : Nested If-Else statements
// Task 3

let a = 53, b=53, c=53

if(a>b){
    if(a>c)
        console.log("a is largest");
    else {
        console.log("c is largest");
    }
}
else if(a!=b){
    if(b>c)
        console.log("b is largest");
    else{
        console.log("c is largest");
    }
}
else{
    console.log("All are same");
}


// Activity 2 : Switch Case
// Task 4

let day = 2

switch(day){
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("Please enter a valid number between 1 and 7");
}



// Task 5

let score = 48

switch(true){
    case (score<=100 && score>=90): 
        console.log("A");
        break;
    case (score <= 89 && score >= 80):
        console.log("B");
        break;
    case (score <= 79 && score >= 70):
        console.log("C");
        break;
    case (score <= 69 && score >= 60):
        console.log("D");
         break;
    case (score <= 59 && score >= 30):
        console.log("E");
        break;
    case (score <= 29 && score >= 0):
        console.log("F");
        break;
    default:
        console.log("Please enter a valid score");
}



// Activity 4 : Conditional (ternary) operator
//  Task 6

let number = 7, res

res = (number & 1) ? "Odd" : "Even";

console.log(res);


// Activity 5 : Combining Conditions
//  Task 7

let year = 2001

if((year%4==0 && year%100!=0) || year%400==0){
    console.log(`${year} is a leap year`);
}
else
    console.log(`${year} is not a leap year`);
