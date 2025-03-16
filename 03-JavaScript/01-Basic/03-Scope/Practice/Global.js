var x = 2; // Global scope
let y = 3; // Global scope
const z = 4; // Global scope

function showGlobalVariable() {
  // Accessible inside function
  console.log(x);
  console.log(y);
  console.log(z);
}

showGlobalVariable();

// Accessible outside function
console.log(x);
console.log(y);
console.log(z);




//  Automatically Global

function automaticallyGlobal(){
  carName = "Volvo"
}
automaticallyGlobal();
console.log(carName);
