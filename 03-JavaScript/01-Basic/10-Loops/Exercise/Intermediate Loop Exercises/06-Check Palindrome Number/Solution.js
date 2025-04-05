// let num = 123;
function checkPalindrome(num) {
  let originalNum = num,
    rev = 0,
    d;
  while (num > 0) {
    d = num % 10;
    rev = rev * 10 + d;
    num = Math.floor(num / 10);
  }
  return originalNum == rev;
}
console.log(checkPalindrome(121));
