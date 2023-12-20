// Redeclaring a variable using the `let` inside a block will not redeclare the variable outside the block

// let is block level 

city = "Mumbai"

{
    let city = "Delhi";
    console.log("inside block",city);       // o/p: Delhi
}

console.log("Outside block",city);      // o/p: Mumbai


{
    let hometown = "Siliguri";
    hometown = "Kolkata";
    console.log(hometown);      // o/p: Kolkata
}




Name = "Chaitaly"
{
    let Name;
    console.log(Name); // o/p: undefined
}



// --------------------------------------------------------------------------------------------


// Using a `let` variable before it is declared will result in a `ReferenceError`

// carName = "Saab";
// let carName = "Volvo";  // o/p: ReferenceError: Cannot access 'carName' before initialization



// ---------------------------------------------------------------------------------------------

// Redeclaration of a variable is not allowed

// let num = 1
// let num = 3