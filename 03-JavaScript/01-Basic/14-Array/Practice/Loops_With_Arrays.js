let nums = [1,2,3,4,5,6,7,8,9,10]


// using for
for(let i=0;i<nums.length;i++)
    console.log(nums[i] + " is at index "+ i);


// alternative (using forEach)
nums.forEach((element)=>{
    console.log(element);
})