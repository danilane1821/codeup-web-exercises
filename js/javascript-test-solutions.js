"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */


// 1. Define a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// isBoolean(true)             // true
// isBoolean(false)            // true
// isBoolean(0)                // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("kwiw")           // false
// isBoolean([1, 2])           // false
//



function isBoolean (input) {
    if (input === false){
        return true;
    }else if (input === true){
        return true;
    }else if(typeof(input) == 'number') {
        return false;
    }else if (input === undefined){
        return false;
    }else if (input === null){
        return false;
    }else if(toString.call(input) === "[object Array]"){
        return false;
    }else if (isNaN(input) === true){
        return false;
    }
}



//-----------------------
//solution




function isBoolean(input) {
    function isBoolean(input) {
        return typeof input == "boolean";
    }


// 2. Define a function named `isNumeric` that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
//
// isNumeric(23)               // true
// isNumeric("42")             // true
// isNumeric(3.141)            // true
// isNumeric("")               // false
// isNumeric(true)             // false
// isNumeric("Bob")            // false
// isNumeric([1,2,3])          // false
//


    function isNumeric(input) {
        if (isNaN(input) === false) {
            return true;
        } else if (input === true) {
            return false;
        } else if (input == null) {
            return false;
        } else if (input === false) {
            return false;
        } else if (toString.call(input) === "[object Array]") {
            return false;
        } else if (toString.call(input) === "object") {

        } else {
            return true;
        }
    }

//------------------------------
//solution

    function isNumeric(input) {
        if (input === true || input === false || input === null){
            return false;
        } else{
            return !isNaN(input)
        }
    }





// 3. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
//
// isString("Hello")           // true
// isString("Codeup")          // true
// isString("123")             // true
// isString(4)                 // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false
//


    function isString(input) {
        if (input == NaN) {
            return true;
        } else {
            return false;
        }
    }

//----------------------------------------
//solution


    function isString(input){
        return input === string(input);
    }




// 4. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.
//
// isArray([])                 // true
// isArray([1, 2, 3])          // true
// isArray(['a', 'b'])         // true
// isArray(false)              // false
// isArray(12)                 // false
// isArray("Bob")              // false
// isArray({'some': 'object'}) // false
// isArray(true)               // false
// isArray()                   // false
//

    function isArray(input) {
        if (toString.call(input) === "[object Array]") {
            return true;
        } else {
            return false;
        }

    }

//----------------------------------------
//solution


    function isArray(input) {
        if (input instanceof Array){
            return true;
        } else {
            return false;
        }
    }







// 5. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.
//
// isNegative(-1)              // true
// isNegative(-5)              // true
// isNegative("-3")            // true
// isNegative(0)               // false
// isNegative(6)               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false
//

    function isNegative(num) {
        if (num < 0) {
            return true;
        } else if (num === true) {
            return false;
        } else {
            return false;
        }
    }


//----------------------------------------
//solution



    function isNegative(num) {
        return num > 0;
    }








// 6. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.
//
// isPositive(1)               // true
// isPositive("6")             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
// isPositive("Bob")           // false
// isPositive(true)            // false
//


    function isPositive(num) {
        if (num === true) {
            return false;
        } else if (num > 0) {
            return true;
        } else if (num === 0) {
            return false;
        } else {
            return false;
        }
    }

//----------------------------------------
//solution

    function isPositive(num) {
        if(!isNumeric(input)){
            return false;
        } else {
            return input > 0;
        }
    }





// 7. Define a function named `increment` that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
//
// increment(0)                // 1
// increment("10")             // 11
// increment(-5)               // -4
// increment("Bob")            // false
// increment([1, 2, 3])        // false
// increment(true)             // false
// increment(null)             // false
//


    function increment(input) {

        if (input === true) {
            return false;
        }
        if (input === false) {
            return false;
        } else if (input === null) {
            return false;

        } else if (isNaN(input) === true) {
            return false;

        } else if (isNaN(input) === false) {
            return (++input);
        } else {
            return false;
        }
    }


//----------------------------------------
//solution


    function increment(input){
        if(isNumeric(input)){
            return input +1
        }else {
            return false;
        }
    }









// 8. Define a function named `decrement`. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, `decrement` should return false.
//
// decrement(19)               // 18
// decrement(0)                // -1
// decrement("4")              // 3
// decrement("Bob")            // false
// decrement([1, 2, 3])        // false
// decrement(false)            // false
// decrement(null)             // false
//


    function decrement(input) {

        if (input === true) {
            return false;
        }
        if (input === false) {
            return false;
        } else if (input === null) {
            return false;

        } else if (isNaN(input) === true) {
            return false;

        } else if (isNaN(input) === false) {
            return (--input);
        } else {
            return false;
        }
    }


//----------------------------------------
//solution


    function decrement(input){
        if(isNumeric(input)){
            return input -1
        }else {
            return false;
        }
    }




// 9. Define a function named `square`. If the provided input is numeric, `square` should return the number multiplied by itself. If the input is not numeric, `square`, should return false.
//
// square(2)                   // 4
// square(3)                   // 9
// square(-4)                  // 16
// square("5")                 // 25
// square(0.5)                 // .25
// square("Bob")               // false
// square(true)                // false
// square(false)               // false
// square(null)                // false
// square([1, 2, 3])           // false
// square()                    // false
//


    function square(input) {
        if (input === true) {
            return false;
        }
        if (input === false) {
            return false;
        } else if (input === null) {
            return false;

        } else if (isNaN(input) === true) {
            return false;
        } else if (isNaN(input) === false) {
            return Math.pow(input, 2);
        } else {
            return false;
        }
    }

//----------------------------------------
//solution


    function square(input) {
        if (isNumeric(input)){
            return Math.pow(input, 2)
        }else {
            return false;
        }
    }





// 10. Define a function named `upperCase` that takes in a single input. If the input is not a string, return `false`. If the input is a non-numeric string, then return it with all the letters capitalized.
//
// upperCase("Codeup")         // "CODEUP"
// upperCase("javascript")     // "JAVASCRIPT"
// uppercase("45")             // false
// upperCase(23)               // false
// upperCase(null)             // false
// upperCase([1, 2, 3])        // false
// upperCase(true)             // false
// upperCase()                 // false
//
    var emptyString = '';

    function upperCase(input) {
        if (input === true) {
            return false;
        } else if (input === null) {
            return false;
        } else if (isNaN(input) === false) {
            return false;
        } else {
            return input.toUpperCase(input);
        }
    }
}

//----------------------------------------
//solution

function upperCase(input) {
    if(isString(input) && !isNumeric(input)){
        return imput.toUpperCase();
    }else {
        return false;
    }

}








//
// 11. Write a function named `isPalindrome` that takes in a single input. If the input is a numeric string, then return `false`. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
//
// isPalindrome("Bob")         // true
// isPalindrome("radar")       // true
// isPalindrome("ufotofu")     // true
// isPalindrome("Monday")      // false
// isPalindrome(232)           // false
// isPalindrome(null)          // false
//
//

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}



function isPalindrome(input) {
    if(isString(input)) {
        return reverseString(upperCase(input) === upperCase(input));
    }else {
        return false;
    }
}














// 12. Write a function named `getHighestNumber` that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return `false`.
//
// getHighestNumber(1, 3, 2)           // 3
// getHighestNumber(0, 1, "2")         // 2
// getHighestNumber(9, 3, -20)         // 9
// getHighestNumber(2, 2, 2)           // 2
// getHighestNumber(2, 5, 5)           // 5
// getHighestNumber(1, 2, 'x')         // false
// getHighestNumber("a", "b")          // false
// getHighestNumber()                  // false
//


function getHighestNumber (input1, input2, input3){
    if (!isNumeric(input2) || !isNumeric(input2) || !isNumeric(input3)){
        return false;
    } else {
        return Math.max(input1, input2, input3);
    }

}




//
// 13. Write a function named `containsVowel` that takes in a single input as its argument. If the argument is not a string, then return `false`. If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'. If the string does not contain any of these vowels, then return `false`.
//
// containsVowel("Index")      // true
// containsVowel("Codeup")     // true
// containsVowel("Jane")       // true
// containsVowel("bb8")        // false
// containsVowel("")           // false
// containsVowel(34)           // false
// containsVowel([1, 2, 3])    // false
//

function containsVowel (input) {
    if (!isString(input)) {
        return false;
    }

    var caseInsensitive = upperCase(input);
    if (caseInsensitive.indexOf("A") > -1 || caseInsensitive.indexOf("E") > -1 || caseInsensitive.indexOf("I") > -1 || caseInsensitive.indexOf("O") > -1 || caseInsensitive.indexOf("U") > -1) {
        return true;
    }else {
        return false;
    }

}






// 14. Write a function named `add` that takes in two inputs. If both inputs provided are numeric, `add` will return the sum of both inputs. If one or both inputs is not numeric, `add` should return false.
//
// add(1, 2)                   // 3
// add(0, 0)                   // 0
// add(-5, 10)                 // 5
// add("2", 4)                 // 6
// add(5, true)                // false
// add(true, false)            // false
// add("Monday", "Tuesday")    // false
// add(null)                   // false
//




function add (num1, num2) {
    if(isNumeric(num1) && isNumeric(num2)){
        return parseFloat(num1) + parseFloat(num2);
    }else{
        return false;
    }
}

















//
// 15. Write a function named `multiply` that takes in two inputs. If both inputs provided are numeric, `multiply` returns the product of the first input multiplied by the second. If either or both inputs are not numeric, `multiply` should return false.
//
// multiply(4, 2)              // 8
// multiply(0, 44)             // 0
// multiply(-5, 10)            // -50
// multiply(5, true)           // false
// multiply(true, false)       // false
// multiply("Monday")          // false
//

function multiply (num1, num2) {
    if(isNumeric(num1) && isNumeric(num2)){
        return parseFloat(num1) * parseFloat(num2);
    }else{
        return false;
    }
}






// 16. Write a function named `sumOfSquares` that takes in two inputs. If both inputs are numeric, `sumOfSquares` should square each input and return the sum of them added together. For example, if we pass `a` and `b` then we should square `a` and add it to the square of `b`. If either or both inputs are not numeric, `sumOfSquares` should return false.
//
// sumOfSquares(2, 3)          // 13
// sumOfSquares(1, 0)          // 1
// sumOfSquares("4", 5)        // 41
// sumOfSquares(2, false)      // false
// sumOfSquares(null)          // false
// sumOfSquares()              // false


function sumOfSquares (num1, num2){
    if(isNumeric(num1) && isNumeric(num2)){
        return add(square(num1), square(num2));
    } else {
        return false;
    }
}
