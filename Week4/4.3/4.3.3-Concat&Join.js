const arrOne = ["a", [0, 1], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
let mergeArray = arrOne.concat(arrTwo, "4", "e");
//console.log(arrOne);
console.log(mergeArray);
// print the new, merged array

// join the merged array and print the result
let joinedArray = mergeArray.join(" ");
console.log(joinedArray);
