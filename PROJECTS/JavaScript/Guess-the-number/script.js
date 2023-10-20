// Generate random number
let randomNum = Math.floor(Math.random()*100 + 1)

console.log(randomNum);

// initialize chance
let chances = 0;
let userInput;



// Loop through 
do{
    userInput = prompt("Enter a number between 1 to 100");

    // if we cancel then the loop will get terminated
    if(userInput == null) break;


    console.log(userInput);

    if(userInput>100)
        alert("This number is out of bound");    
    else {
        if(userInput<randomNum)
            alert("Your guessed number is smaller than random number" );
        else if(userInput>randomNum)
            alert("Your guessed number is greater than random number ");
    }

        chances += 1; // increment the number of chances taken
}
while(userInput!=randomNum) //break the loop if random number & guessed number are same


// if random number & guessed number are same then show the message & score
if(userInput == randomNum){
alert("Congrats Champ!")

alert(`You get the actual number in ${chances} chances. So your score is ${100-chances}`)
}
