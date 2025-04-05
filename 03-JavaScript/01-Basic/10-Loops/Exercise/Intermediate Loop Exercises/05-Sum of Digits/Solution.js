// let num = parseInt(prompt("Enter the number : "))
let num = 12345;
let d,
  sum = 0;
while (num > 0) {
  d = num % 10;
  sum += d;
  num = Math.floor(num / 10);
}
console.log(sum);
