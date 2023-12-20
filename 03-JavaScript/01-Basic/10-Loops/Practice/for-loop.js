for(let i=0;i<5;i++){
    console.log(i)
}


//  program to add first 5 natural number

sum = 0;
for(let i=1;i<=5;i++){
    sum = sum+i;
}
console.log("Sum of 5 number is", sum);


// for loop iterates over an array
let result = ["Harry" , "Shubham", "Shiv" , "Rahul" , 345, "Ajay" ];

for(let i=0;i<result.length;i++){
    console.log(result[i]);
}




// loop scope

let i = 5;

for (let i = 0; i < 10; i++) {
  console.log("loop let",i);

}
console.log("let",i);


var j = 5;

for (var j = 0; j < 10; j++) {
  console.log("loop var",j);

}
console.log("var",j);