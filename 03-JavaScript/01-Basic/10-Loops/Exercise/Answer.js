/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable
*/

let sum = 0;

let n = 5;

while (n > 0) {
  sum += n;
  n--;
}
console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array
*/

let arr = [];

let num = 5,
  i = 0;

while (num > 0) {
  //   arr[i++] = num--;  or
  arr.push(num--);
}
console.log(arr);
