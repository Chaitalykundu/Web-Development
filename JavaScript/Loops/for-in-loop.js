let obj = {
    Harry : 84,
    Shbham : 65,
    Shiv : 98,
    Rahul : 64,
    Ajay : 23
}

let result = {
    Harry : 'Pass',
    Shbham : 'Fail',
    Shiv : 'Pass',
    Rahul : 'Fail',
    Ajay : 'Fail'
}


for( let a in obj)
    console.log("Marks of", a , "is", obj[a]);
for( let value in result)
    console.log("Status of", value, "is", result[value])
