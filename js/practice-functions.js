// Make a function named isNumeric(input) that returns if the input is a number like 5 or 2.3
// or a string containing only a number like "2".
// Example isNumeric(3) is - true. isNumeric("banana") should return false.


// should return true if input is a number or numeric string
//should return false if input is a non numeric string

function isNumeric (input){
    if(isNaN(input) === true){
        return false;
    }else{
        return true;
    }
}

console.log(isNumeric("12"));





//Make a function named isEqual(input1, input2) 
// that returns if both inputs have the same value.areEqual

//both inputs must be equal in value, but do not have to be equal in type


function isEqual(input1, input2) {
    if(input1 == input2){
        return true;
    } else {
        return false;
    }
}

console.log(isEqual(6, "6"));



//Make a function named isIdentical(input1, input2)
//that returns if both inputs are same value and data type.

//both inputs must be equal in value and type in order to return true

function isIdentical (input1, input2) {
    if (input1 === input2){
         return true;
    }else {
        return false;
    }
}

console.log(isIdentical("apple", "apple"));


//Make a function named not(input) returns the input with a flipped boolean

// return should equal either true or false
// return to be the opposite boolean

function not(input) {
    if (input === true || input === undefined){
        return false;
    }else{
        return true;
    }
}

console.log(not(NaN));


//Make a function named isOdd(number)
// that returns true if the number is odd

//need to return true or false

function isOdd (number) {
    if(number % 2 === 1) {
        return true;
    }else {
        return false;
    }
}

console.log(isOdd(2));

//Make a function named isEven(number)
// that returns true if the number is even or zero

// need to return true or false

function isEven (number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven("6"));

//Make a function named isPositive(number)
// that returns true if the provided input is a positive number.
// False for zero or any other number or data type.

// true or false return
// 0, and data types other than numbers = false


function isPositive (number) {

    if(typeof number === "string" || number === 0){
        return false;
    }else if(number > 0){
        return true;
    }
}

console.log(isPositive("12"));