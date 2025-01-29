function createCounter() {
  var count = 0;

  function counter() {
    count++;
    console.log(count);
  }
  return counter;
}
var increment = createCounter();

increment();
increment();
increment();
