function calculate(a, b, operator) {
  let res;
  switch (operator) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
    case "%":
      res = a % b;
      break;

    default:
      "Invalid operator";
  }
  return res;
}

let a = parseInt(prompt("Enter a number"));
let b = parseInt(prompt("Enter another number"));
console.log(a);
console.log(b);

let opr = prompt("Enter a operator  (+, -, *, /, %)");
console.log(opr);

alert(calculate(a, b));
document.write(calculate(a, b));
