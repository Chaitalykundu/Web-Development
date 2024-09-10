function outer() {
    let firstName = "Chaitaly";
  
    function inner() {
      console.log("Inside inner", firstName);
    }
    return inner; // Here we are passing the reference of inner function
  }
  
  const res = outer();
  res();
  
  function one() {
    let counter = 0;
    function two() {
      counter++;
      console.log(counter);
      return counter;
    }
    return two;
  }
  
  const result = one();
  
  result(); // 1
  result(); // 2
  result(); // 3
  
  function outerFunction() {
    var outerVariable = "Hello, ";
    function innerFunction(name) {
      console.log(outerVariable + name);
    }
    return innerFunction;
  }
  var inner = outerFunction();
  inner("John"); // Output: "Hello, John"
  