function outer() {
    var x = 10;
  
    function inner() {
      var y = 5;
  
      console.log(x + y);
    }
  
    var x = 20;
  
    return inner;
  }
  
  var innerFunc = outer();
  
  innerFunc();
  