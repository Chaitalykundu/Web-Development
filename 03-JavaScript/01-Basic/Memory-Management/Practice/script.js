// Stack
let fname = "Chaitaly";
console.log(fname);

let anotherName = fname;
console.log(anotherName);

// fname, anotherName will be stored in stack



//  HEAP
let userOne = {
  name: "Chaitaly Kundu",
  gender: "F",
};


let userTwo = userOne;
console.log(userOne);
console.log(userTwo);


function getName(){
    return userOne.name;
}

console.log(getName());

// Here, userOne, userTwo, getName will be stored in stack.
// And `{ name: "Chaitaly Kundu", gender: "F",}`, `function getName() { return userOne.name;}` will be stored in heap.
