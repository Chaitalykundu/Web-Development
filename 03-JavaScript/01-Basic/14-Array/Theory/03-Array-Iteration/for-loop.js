const arr = [1,2,3,4,5];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}


/*  o.p :
1
2
3
4
5

*/


// Sum of array elements


let num = 0;
for(let i=0;i<arr.length;i++){
    num+= arr[i];
}

console.log(num); // 15