nums = [1,2,3,4,5,6,7,8,"Nine", "Ten"]

// length 
console.log(nums.length);  // O.P: 10

// convert in a string
console.log(nums.toString());  // O.P: 1,2,3,4,5,6,7,8,Nine,Ten


// join
console.log(nums.join("-"));  // O.P: 1-2-3-4-5-6-7-8-Nine-Ten


// pop
num = nums.pop()
console.log(num);  // O.P: Ten
console.log(nums);  // O.P: [ 1, 2, 3, 4, 5, 6, 7, 8, 'Nine']


// push
num = nums.push("Ten")
console.log("push",num);   // O.P:  push 10
console.log(nums);  // O.P: [ 1, 2, 3, 4, 5, 6, 7, 8, 'Nine', 'Ten']



// shift
num = nums.shift()
console.log("shift",num);   // O.P:  shift 1
console.log(nums);  // O.P: [ 2, 3, 4, 5, 6, 7, 8, 'Nine', 'Ten']


// unshift
num = nums.unshift('15')
console.log("unshift",num);   // O.P:  unshift 10
console.log(nums);  // O.P: [ '15', 2, 3, 4, 5, 6, 7, 8, 'Nine', 'Ten']
