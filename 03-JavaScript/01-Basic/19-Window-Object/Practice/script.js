// prompt function : This takes string as input
// it doesn't work in vs code directly, but works in browser

a = prompt("Hey what's your age? ");  
a = Number(a);

document.write(a);
if(a>=18)
    alert("You are adult"); // alert function
else
    alert("You are not adult");


    
// Confirm
confirm("Press a button!")

let text;
if (confirm("Press a button!") == true) {
  text = "You pressed OK!";
} else {
  text = "You canceled!";
}
document.write(text)
