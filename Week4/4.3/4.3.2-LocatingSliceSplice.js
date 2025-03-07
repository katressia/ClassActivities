const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let LastB = arr.lastIndexOf("b");
let LastC = arr.lastIndexOf("c");
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
while (arr.indexOf("a") !== arr.lastIndexOf("a")) {
    arr.splice(arr.lastIndexOf("a"),1)
}
console.log(arr);