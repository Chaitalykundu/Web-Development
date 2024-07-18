// Activity 1 : Function Declaration
// Task 1

function oddEven(num) {
    if(num&1)
        console.log("odd");
    else
        console.log("Even");
}

oddEven(8);


// Task 2

function squareOfaNumber(num){
    return num*num;
}

console.log(squareOfaNumber(7))


// Activity 2 : Function Expression
// Task 3

function MaxOfTwo(a,b){
    if(a>b)
    console.log(`${a} is maximum`);
else if(a<b)
console.log(`${b} is maximum`);
else
console.log("Both are same");
}

MaxOfTwo(4,5);



// Task 4

function concateTwoString(s1, s2){
    return s1+s2;
} 

console.log(concateTwoString("Chaitaly ", "Kundu"));



// Activity 3 : Arrow Function
// Task 5

const sumOfTwoNums = (a,b) => {
    return a+b;
}

console.log(sumOfTwoNums(6,7));


// Task 6
const specificCharacter = (str, chr) =>{
    return (str)
}
