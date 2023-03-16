console.log("\t\t\t\t\t\t  Type Conversion");
console.log("\t\t\t\t\t\t  Others to String");

// Number to string

console.log("\t\t\t\t\t\t  Number to String");

let num=34;
numConvo = String(num);
console.log(num, num.length , (typeof num));
console.log(num.toString(), typeof num.toString());     // var_name.toString()
console.log(numConvo, numConvo.length , (typeof numConvo));     // String(var_name)


// Boolean to String

console.log("\t\t\t\t\t\t  Boolean to String");

let boolean = true;
booleanconvo = String(boolean);
console.log(boolean, boolean.length , (typeof boolean));
console.log(boolean.toString(), typeof boolean.toString());
console.log(booleanconvo, booleanconvo.length , (typeof booleanconvo));


// Date to String

console.log("\t\t\t\t\t\t  Date to String");

let totaysdate = new Date();
dateconvo = String(totaysdate);
console.log(totaysdate, totaysdate.length, (typeof totaysdate));
console.log(totaysdate.toString(), typeof totaysdate.toString());
console.log(dateconvo, dateconvo.length, (typeof dateconvo));


// Array to String

console.log("\t\t\t\t\t\t  Array to String")

let ar = [1,2,3,4,5];
arrConvo = String(ar);
console.log(ar, ar.length , (typeof ar));
console.log(ar.toString(), typeof ar.toString());
console.log(arrConvo, arrConvo.length, (typeof arrConvo));




console.log("\t\t\t\t\t\t  Type Conversion");
console.log("\t\t\t\t\t\t  Others to Number");

//  String to Number
console.log("\t\t\t\t\t\t  String to Number");

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