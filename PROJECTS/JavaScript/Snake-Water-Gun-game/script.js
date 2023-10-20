let user = prompt("Enter S, W or G")
let computerIP = Math.floor(Math.random()*2)
document.write(computerIP,"\n")

let computer = ["S","W","G"][computerIP]


const match = (user, computer)=>{
    if(computer==user)
        return "Both"
    else{
        if((computer=="S" && user=="W") || (computer=="W" && user=="G") || (computer=="G" && user=="S"))
            return "Computer"
        else if((user=="S" && computer=="W") || (user=="W" && computer=="G") || (user=="G" && computer=="S"))
            return "User"
        else
            return "Enter valid letter"
    }
}

let result = match(user,computer)
document.write(`\nUser's value ${user} and Computer's value : ${computer}. \nThe winner is ${result}`)