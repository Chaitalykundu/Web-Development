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

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  cityList.push(cities[i]);
}
console.log(cityList);

/* 
7. Write a `for` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and stops the loop when it finds 5. 
Stores all elements before 5 in a new array.
*/

let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = [];

for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] === 5) break;
  newArr.push(arrNumber[i]);
}
console.log(newArr);

/* 
8. Write a `for` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5. 
Stores all elements in a new array.
*/

let arrSkip = [];

for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] === 5) continue;
  arrSkip.push(arrNumber[i]);
}
console.log(arrSkip);

/* 
9. Write a `for of` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and stops the loop when it finds 5. 
Stores all elements before 5 in a new array.
*/

let newArrBreak = [];

for (const i of arrNumber) {
  if (i === 5) break;
  newArrBreak.push(i);
}
console.log(newArrBreak);

/* 
10. Write a `for of` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5. 
Stores all elements in a new array.
*/

let newArrSkip = [];

for (let i of arrNumber) {
  if (i == 5) continue;
  newArrSkip.push(i);
}

console.log(newArrSkip);

/* 
11. Write a `for in` loop that loops through an object containing city populations.
Stops the loop when the population of "Berlin" is found. 
Stores all the previous cities' populations in a new object named `newCityPopulation`  
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Rome: 50000,
  Berlin: 3500000,
};

let newCityPopulation = {};

for (let city in citiesPopulation) {
  if (city == "Berlin") break;
  newCityPopulation[city] = citiesPopulation[city];
}

console.log(newCityPopulation);

/* 
12. Write a `for in` loop that loops through an object containing city populations.
Slip the city with the population bellow 100000. 
Stores the rest cities in a new object named `largePopulation`  
*/

let largePopulation = {};

for (let city in citiesPopulation) {
  if (city == 100000) continue;
  largePopulation[city] = citiesPopulation[city];
}

console.log(largePopulation);

/*
13. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]`.
Stores all the elements in a new array.
*/

let newArrForNumber = [];
arrNumber.forEach((element) => {
  console.log(element);
});

/*
14. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and stops the loop when it finds 5. 
Stores all elements before 5 in a new array.
*/

/*
15. Write a `forEach` loop that loops through the array `[1,2,3,4,5,6,7,8,9]` and skips 5. 
Stores all previous elements in a new array.
*/
