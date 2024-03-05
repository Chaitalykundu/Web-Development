let str = "Hello 'Yash', How are you?"

console.log(str);   // O.P: Hello 'Yash', How are you?


// backspace
console.log("backspace-------","Hello 'Yash',\b How are you?");

// O.P: backspace------- Hello 'Yash' How are you?


// Form Feed 
console.log("Form Feed  ---------","Hello 'Yash',\r How are you?");
// O.P:  How are you?------- Hello 'Yash',

// new line
console.log("New line -------","Hello 'Yash',\n How are you?");
/* O.P: New line ------- Hello 'Yash',
 How are you?
*/


// Carriage Return 
console.log("Carriage Return ---------","Hello 'Yash',\r How are you?");
// O.P: How are you?rn --------- Hello 'Yash',


// Horizontal Tabulator
console.log("Horizontal Tabulator ---------","Hello 'Yash',\t How are you?");
// O.P: Horizontal Tabulator --------- Hello 'Yash',     How are you?


// Vertical Tabulator
console.log("Vertical Tabulator ---------","Hello 'Yash',\v How are you?");
/* O.P: Vertical Tabulator --------- Hello 'Yash',
 How are you?  
 */