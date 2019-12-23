
let fruits = ["apple", "banana", "orange", "apple", "pineapple"];
let emptyArr = [];


function allIndexesOf (fruit, value) {
    return fruit.indexOf(value);

}

console.log(allIndexesOf(fruits, "apple")); //should return the array [0, 3]
console.log(allIndexesOf(fruits, "guava"));//should return the array []
console.log(allIndexesOf(fruits, "pineapple")); //should return [4]


function firstLast6(nums){
    if(nums[0] === 6 ||nums[nums.length-1] === 6){
        return true;
    }else{
        return false;
    }
}

