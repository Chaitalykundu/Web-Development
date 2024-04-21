// ------------- Have to run each questions separately


// 1. Create an array of number and take input from user to add numbers to this array

arr = [1, 2, 3, 4, 5];

let a = prompt("Enter a number");

arr.push(Number.parseInt(a));
document.writeln(arr,"<br>");



// 2. Keep adding numbers to the array in Q no 1 until 0 is added to this array

let b ;

arr2 = [1, 2, 3, 4, 5];

do {
  b = prompt("Enter a number");

  arr2.push(Number.parseInt(b));
  
} while (b != 0);
  document.writeln(arr2,"<br>");



// 3. Filter the numbers that are divisible by 10 from an array.

arr3 = [10, 15, 20, 25, 30]

const res = arr3.filter((value)=>{
  return value%10==0;
})

document.writeln(res,"<br>");



// 4. Create an array of squares of a given number

arr3 = [1,2,3,4,5,6,7]
const result = arr3.map((value)=>{
  return value*value;
})

document.writeln(result,"<br>");


// 5. Use reduce to calculate the factorial of a given number from an array of first n natural numbers. (n being the numbers whose factorial needs to be calculated)

const fact = arr3.reduce((x1,x2)=>{
  return x1*x2;
})
document.writeln(fact,"<br>");