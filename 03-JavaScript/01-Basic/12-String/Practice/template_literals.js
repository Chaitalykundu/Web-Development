// Variable Substitutions

let firstName = "John";
let lastName = "Doe";

console.log(`Welcome Mr ${firstName} ${lastName}!`)




// Expression Substitution

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);



// HTML Templates

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

console.log(html);