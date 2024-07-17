// Activity 1 : For Loop
// Task 1
for(let i=1;i<=10;i++)
    console.log(i);


// Task 2
for(let i=1;i<=10;i++)
    console.log(`5 * ${i} = ${5*i}`);


// Task 3
let i = 10, sum=0

while(i>0){
    sum+=i
    i--;
}
console.log(sum);


// Task 4
let j=10;

while(j>0){
    console.log(j);
    j--;
}


// Task 5
let num=1
do{
    console.log(num);
    num++;
}
while(num<=5)


// Task 6
let number = 6, factorial=1;

do{
    factorial*=number;
    number--;
}
while(number>0)

console.log(factorial);



// Task 7
let pattern = ""
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        pattern+="* "
    }
    pattern+="\n"
}
console.log(pattern);
