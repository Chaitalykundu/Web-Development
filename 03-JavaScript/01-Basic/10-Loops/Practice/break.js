// for loop iterates over an array
let result = ["Harry" , "Shubham", 123, "Shiv" , "Rahul" , "Ajay" ];

for(let i=0;i<result.length;i++){
    if(typeof result[i] != "string")
        break;
    console.log(result[i]);
}