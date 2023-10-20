// Q. 1,2,3

let runAgain = true

while(runAgain){
    let age = prompt("Enter the age : ")

    age = Number.parseInt(age)


    if(age<=0)
        console.error("Please enter a valid age")
    
    else if(age>=18)
        alert("Congratulations! You can drive")
    else
        alert("Sorry, You cannot drive")

    runAgain = confirm("Do you want to play again?")
}


// Q. 4

let num = prompt("Enter a number : ")
num = Number.parseInt(num)

if(num>40)
    location.href= "https://www.google.com"
else
    alert("You entered", num);


// Q. 5    

let color = prompt("Enter the background color you want")
document.body.style.background = color