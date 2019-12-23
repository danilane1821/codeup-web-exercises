
let fruits = ["apple", "banana", "orange", "apple", "pineapple"];
let emptyArr = [];


function allIndexesOf (fruit, value) {
    return fruit.indexOf(value);

}

console.log(allIndexesOf(fruits, "apple")); //should return the array [0, 3]
console.log(allIndexesOf(fruits, "guava"));//should return the array []
console.log(allIndexesOf(fruits, "pineapple")); //should return [4]



// Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
//     Examples
// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false


function firstLast6(nums){
    if(nums[0] === 6 ||nums[nums.length-1] === 6){
        return true;
    }else{
        return false;
    }
}

// or

function firstLast6(nums){
    return nums[0] === 6 || nums[nums.length-1] === 6

}


// Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

//     Examples
// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true

function sameFirstLast(nums){
    return nums[0] === nums[nums.length -1] && nums.length > 0;
}


// Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

function makePi(){
    return [3,1,4];
}