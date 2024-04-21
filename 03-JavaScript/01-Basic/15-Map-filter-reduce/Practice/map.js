// Return a new array with the square root of all element values:

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr); //[ 2, 3, 4, 5 ]


const res = numbers.map((value, index, array)=>{
    console.log(value,index, array)
})



// Multiply all the values in an array with 10:

const arr = [65, 44, 12, 4];
const newArray = arr.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArray);  // [ 650, 440, 120, 40 ]



// Get the full name for each person:

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];
  
const fullName = persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}

console.log(fullName); // [ 'Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb' ]