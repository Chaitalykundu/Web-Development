let age = 20;
switch(true){  
    case age >= 0 && age <= 10:
        console.log("WOW You Are " + age);
    break;
    
    case age >= 10 && age <= 20:
        console.log("WOW You Are " + age);
    break;
    
    case age >= 20 && age <= 30:
        console.log("WOW You Are " + age);
    break;

    default:
        age = "Undefined!! Enter Age Between 0 - 30";
        console.log("fgh");
    break;
    
}
    
const action = "say_hi";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}
