/*
1. Write a function named `"makeTea"` that takes one parameter, 'TypeOfTea', and returns a string like `"Making green tea"` when called with `"green tea"`.
Store the result in a variable named `teaOrder`.
*/

let TypeOfTea = "Green and Masala Tea";
function makeTea(TypeOfTea) {
  return `Making ${TypeOfTea}`;
}

let teaOrder = makeTea(TypeOfTea);

console.log(teaOrder);

/*
2. Write a function named `"orderTea"` that takes one parameter, 'teaType'.
Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `"orderTea"`and return the result
*/

let teaType = "Tea";

function orderTea(teaType){
    function confirmOrder(){

    }
}


/*
3. Write an arrow function named `"calculateTotal"` that takes two parameters: `price` and `quantity`. 
The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/

