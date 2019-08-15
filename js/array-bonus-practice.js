
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
var emptyArr = [];


function allIndexesOf (fruit, value) {
    return fruit.indexOf(value);

}

console.log(allIndexesOf(fruits, "apple")); //should return the array [0, 3]
console.log(allIndexesOf(fruits, "guava"));//should return the array []
console.log(allIndexesOf(fruits, "pineapple")); //should return [4]