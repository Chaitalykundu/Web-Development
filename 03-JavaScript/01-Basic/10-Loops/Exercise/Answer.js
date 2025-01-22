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

/*
3. Write a `do while` loop that prompts a user to enter number until they enter `stop`. 
Store each number in an array named `numberCollection`
*/

let numberCollection = [];
let numb;

do {
  numb = prompt("Enter a number");
  numberCollection.push(numb);
  if (numb == "stop") {
    break;
  }
} while (numb != "stop");

document.write(numberCollection);

/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`
*/

let sum1 = 0,
  j = 1;
do {
  sum1 += j;
} while (j <= 3);

console.log(sum1);

/* 
5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the result in a new array named `multipliedNumbers`
*/

let arr1 = [2, 4, 6];

let multipliedNumbers = [];

for (let i = 0; i < arr1.length; i++) {
  multipliedNumbers.push(arr1[i] * 2);
}
console.log(multipliedNumbers);

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` 
and stores each city in a new array named `cityList`
*/

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = [];



for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i])
}
console.log(cityList);
