let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter the operation you want to perform")


let result;

if(c=='+')
    result = a-b;
else if(c=='*')
    result = a+b;
else if(c=='-')
    result = a/b;
else if(c=='/')
    result = a**b;

alert(result)