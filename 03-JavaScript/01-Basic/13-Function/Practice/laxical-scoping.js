// function init() {
//   let name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

// Child can access the variable declared in parent

function outer() {
    let username = "Chaitaly";
  
    function inner1() {
      console.log("Inside Inner1", username);
    }
  
    inner1();
    console.log("inside outer", username);
  }
  outer();
  
  // Child can't access the variable declared in another child
  function outer() {
    let username = "Chaitaly";
  
    function inner1() {
      let lastname = "Kundu";
      console.log("Inside Inner1", username);
      console.log("Inside Inner1", lastname);
    }
  
    function inner2() {
      console.log("Inside Inner2", username);
      console.log("Inside Inner2", lastname); // This line will give error (ReferenceError: lastname is not defined)
    }
  
    inner1();
    inner2();
  
    console.log("inside outer", username);
  }
  outer();
  
  // Parent can't access the variable declared in child
  
  function outer() {
    function inner1() {
      let lastname = "Kundu";
  
      console.log("Inside Inner1", lastname);
    }
  
    inner1();
    console.log("Inside outer", lastname); // This line will give error (ReferenceError: lastname is not defined)
  }
  outer();
  
  
  
  
  
  // Overall
  
  function outer() {
    let username = "Chaitaly";
    function inner1() {
      let lastname = "Kundu";
      console.log("Inside Inner1", username);
      console.log("Inside Inner1", lastname);
    }
  
    function inner2() {
      console.log("Inside Inner2", username); 
      console.log("Inside Inner2", lastname); // This line will give error (ReferenceError: lastname is not defined)
    }
  
    inner1();
    inner2();
  
    console.log("inside outer", username);
    console.log("Inside outer", lastname); // This line will give error (ReferenceError: lastname is not defined)
  }
  outer();
  

  
  // if (Math.random() > 0.5) {
  //   var x = 1;
  // } else {
  //   var x = 2;
  // }
  // console.log(x);
  