//  String to Number
console.log("\t\t\t\t\t\t  String to Number");


// Using + sign
let s = "abc"
console.log(+s, typeof(+s));


// using Number
let str = "Chaitaly";
strconvo = Number(str);
console.log(str, typeof str);
console.log(strconvo, typeof strconvo);



let stri = "2021.05";
striconvo = Number(stri);
console.log(stri, typeof stri);
console.log(striconvo, typeof striconvo);




//  Boolean to Number
console.log("\t\t\t\t\t\t  Boolean to Number");

let bool = true;
boolconvo = Number(bool);
console.log(bool, typeof bool);
console.log(boolconvo, typeof boolconvo);



//  Boolean to Number
console.log("\t\t\t\t\t\t  Parse ");

{
    let arr = [1,2,3,4,5];
    arrconvo = Number(arr);
    console.log(arr, typeof arr);
    console.log(arrconvo, typeof arrconvo);
}

// parse int and parse float
{
    let number = "34.86";
    parnumint = parseInt(number);
    parsenumfloat = parseFloat(number);
    numconvo = Number(number);
    console.log(number, typeof number);
    console.log(parnumint, typeof parnumint);   // It outputs only integer part
    console.log(parsenumfloat, typeof parsenumfloat);    // It outputs integer and point both part
    console.log(numconvo, typeof numconvo);
}


// ( .toFixed)  how many decimal numbers will be shown after point.

console.log("\t\t\t\t\t\t  to.Fixed function ");

{
    let num = 34.86;
    console.log(num, num.toFixed(10) , typeof num);
}
