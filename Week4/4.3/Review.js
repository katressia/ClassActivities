const fruitArray = [
    "apple",
    "banana",
    "cherry",
    ["grape", "orange"],
    "pear",
    ["strawberry", "blueberry"],
    "kiwi",
    "peach",
    "banana",
    "plum"
];
//slice values from kiwi and after

console.log(fruitArray);

//if (fruitArray.includes("cherry")) {
 //   fruitArray[5].reverse();
//};

let fruitNo = fruitArray.splice(-4, 4, "watermelon", "pineapple");
console.log(fruitNo);
//change kiwi to uppercase
//let fruit1 = fruitArray[6]; 
//fruit1.toUpperCase;

//console.log(fruit1.toUpperCase());

//check if mango exist in array and if it doesn't exist add to array
//if (!fruitArray.includes("mango")) {
//    fruitArray.unshift("mango"); 
//}
//console.log(fruitArray);
//fruitArray[6].pop();

console.log(fruitArray);

//slice the first 3 fruit from the array apple,banana and cherry
let fruitA =fruitArray.slice(0, 3);
let cat =fruitArray.concat(fruitA);
fruitArray.push(fruitA);
console.log(fruitArray);
