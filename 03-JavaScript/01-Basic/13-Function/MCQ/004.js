function outer() {
    var x = 10;
  
    function inner() {
      var y = 5;
  
      console.log(x + y);
    }
  
    return inner;
  }
  
  var innerFunc = outer();
  
  innerFunc();
  