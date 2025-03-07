const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let lastItem = nums.pop();
let lastItem2 = nums.pop();
console.log(lastItem);
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
let firstItem = nums.shift();
let firstItem2 = nums.shift();
console.log(firstItem);
console.log(firstItem2);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(lastItem, lastItem2);
console.log(nums);
nums.unshift(firstItem, firstItem2);
