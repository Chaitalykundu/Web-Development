// prompt function : This takes string as input
// it doesn't work in vs code directly, but works in browser
a = prompt("Hey what's your age? ");  
a = Number(a);

if(a>=18)
    alert("You are adult"); // alert function
else
    alert("You are not adult");