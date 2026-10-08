
// 26/05/26  Live Class

// var arr = [10, 20, 30,40, 50]

// arr.forEach(function(elem ,idx){
//     console.log( idx)
// })



//  var sum = 0
// arr.forEach(function(elem){
//   sum = sum + elem
    
// })
//     console.log(sum);


// var users = ['anuj', 'Meena', 'aayush' ,'harish']

// var newuser = users.map(function(elem){

//     return elem
// })
//     console.log(newuser);


// const prompt = require("prompt-sync")();

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            
            if(nums[i] + nums[j] === target && i != j){
                return [i,j];
            };
        };
    };
};


let nums = prompt("Enter array values separated by commas: ");
nums = nums.split(",").map(Number);

let target = Number(prompt("Enter target sum: "));

console.log(twoSum(nums, target));