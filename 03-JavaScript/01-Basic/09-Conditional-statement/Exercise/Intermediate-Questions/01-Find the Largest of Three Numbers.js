let a = 34, b = 21, c = 33;
var res;

switch(true){
    case (a>b && a>c):
        res = a;
        break;
    case (b>a && b>c):
        res = b;
        break;
    case (c>a && c>b):
        res = c;
        break;
    default:
        res = "All are equal"
}
console.log(res);

