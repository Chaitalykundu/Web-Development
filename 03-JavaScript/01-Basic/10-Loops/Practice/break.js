// for loop iterates over an array
let result = ["Harry", "Shubham", 123, "Shiv", "Rahul", "Ajay"];
for (let i = 0; i < result.length; i++) {
  if (typeof result[i] != "string") {
    console.log("Breaking loop at index", i);
    break;
  }
  console.log(result[i]);
}

// Using break in a while Loop
let n = 5;
while (n > 0) {
  if (n == 3) {
    console.log("Breaking loop at count", n);
    break;
  }
  console.log(n--);
}

// Using break in a switch case
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("It's a banana.");
    break;
  case "apple":
    console.log("It's an apple.");
    break;
  case "grape":
    console.log("It's a grape.");
    break;
  default:
    console.log("Unknown fruit.");
}

//  Labeled loop
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      console.log(`Breaking outer loop at i=${i}, j=${j}`);
      break outerLoop; // Exits both loops
    }
    console.log(`i=${i}, j=${j}`);
  }
}
