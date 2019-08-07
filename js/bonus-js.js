(function () {

"use strict";

function isOdd (num) {
    return num % 2 === 1;

}

console.log(isOdd(2));

// -----------------------------------




function isEven (num) {
    return num % 2 === 0;

}

console.log(isEven(4));


//-------------------------------------


function identity (input) {
    return input;
}

console.log(identity(5));


//--------------------------------------


function isFive (five) {
    return 5;
}

console.log(isFive());


//--------------------------------------


function addFive(input) {
    return input + 5;
}

console.log(addFive(10));


//--------------------------------------


function isMultipleOfFive (input) {
    return input % 5 === 0;
}

console.log(isMultipleOfFive(18));


//--------------------------------------


function isThree (three) {
    return 3;
}

console.log(isThree());

//--------------------------------------


function isMultipleOfThree (input) {
    return input % 3 === 0;
}

console.log(isMultipleOfThree(9));

//--------------------------------------


function isMultipleOfThreeAndFive (input) {
    return input % 3 === 0 && input % 5 === 0;
}

console.log (isMultipleOfThreeAndFive(15));


//--------------------------------------


function isMultipleOf(target, n) {
    return (target % n) === 0;
}

console.log(isMultipleOf(12, 6));

//--------------------------------------

function isTrue (input) {
    return true;
}

console.log(isTrue());

//--------------------------------------


function isFalse (input) {
    return false;
}

console.log(isFalse());

//--------------------------------------

function isTruthy(input) {
 return input = !!0 || !!undefined || !!null || !!"" || !!NaN;
}

    console.log(isTruthy(""));

//--------------------------------------

function isFalsey(input) {
 return input = !0 || !undefined || !null || "" || !NaN;
}

    console.log(isFalsey(undefined));


//--------------------------------------

    function isVowel(char) {
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
    }

    console.log(isVowel('b'));


//--------------------------------------




})();