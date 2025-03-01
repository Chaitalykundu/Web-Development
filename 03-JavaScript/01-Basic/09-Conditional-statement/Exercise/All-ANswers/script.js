let result = document.getElementById("res");

let ans;
function checkEvenOdd() {
    let num = document.getElementById("number").value;
    if (num & 1) ans = "The number is Odd";
    else ans = "The number is Even";
  console.log(num)
  result.innerHTML = ans;
}

function checkNumber() {
    let num = document.getElementById("number").value;
    if (num == 0) ans = "The number is Zero";
    else if (num > 0) ans = "The number is Positive";
    else ans = "The number is Negative";
    result.innerHTML = ans;
    console.log(num)
}

function checkVotingEligibility() {
    let num = document.getElementById("number").value;
    if (num >= 18) ans = "Eligible for Vote";
    else ans = "Not Eligible for Vote";

    result.innerHTML = ans;
    console.log(num)
}
