const numbers = [1,2,3,4];
const newArr = numbers.reduce(myFunction);

function myFunction(a,b) {
  return a+b;
}

console.log(newArr); // 10


// Another way (arrow function) to write this 
const another = numbers.reduce((a,b)=>{
    return a+b;
})

console.log(another); // 10
