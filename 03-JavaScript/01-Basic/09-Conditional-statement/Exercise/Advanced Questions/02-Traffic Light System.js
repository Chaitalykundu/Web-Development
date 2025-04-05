// Ask the user to input a traffic light color (red, yellow, green) and print the corresponding action:
//    Red → Stop
//    Yellow → Get Ready
//    Green → Go


// let light = prompt("Enter the color of the light (red, yellow, green) : ");
let light = "red";
let signal;

switch(light){
    case 'red':
        signal = 'Stop';
        break;
    case 'Yellow':
        signal = 'Get Ready';
        break;
    case 'Green':
        signal = 'Go';
        break;
    default:
        signal = "Enter the valid light"
        break;
}

console.log(`${signal}, The light is ${light}`);
