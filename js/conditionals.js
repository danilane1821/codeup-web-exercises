(function () {
    "use strict";

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     */


    var enterNumber = confirm("Do you want to enter a number?");


    if (enterNumber === true) {
        var num = prompt("Enter any number");

        if(isNaN(num)) {
            alert("That is not a number")
        }else {
            isNumberEvenOrOdd(num);
            addOneHundred(num);
            positiveOrNegative(num);
        }

    }else {
        return alert('okay...bye');
    }



    function isNumberEvenOrOdd(num) {
        if (num % 2 === 1) {
            return alert('Your number is odd');
        } else {
            return alert('Your number is even')
        }
    }



    function addOneHundred (num) {
        return alert('Your number + 100 is ' + (+num + 100));
    }


    function positiveOrNegative(num) {
        if (num > 0) {
            return alert(num + " is a positive number");
        } else {
            return alert(num + " is a negative number");
        }
    }


    /* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(str) {
    if(str === 'red') {
        return "strawberries are red";
    } else if(str === 'orange') {
        return "Oranges are orange";
    }else if (str === 'yellow') {
        return "The sun is yellow";
    }else if (str === 'green') {
        return "Grass is green sometimes";
    }else if (str === 'blue') {
        return "The sky is blue";
    }else if (str === 'indigo'){
        return "what is indigo anyway?";
    }else if (str === 'violet') {
        return "violets are flowers but they are blue";
    }else {
        return "Thats not a color I know";
    }

}
analyzeColor("blue");
console.log(analyzeColor("red"));


//-------------------------------------------
// better way












// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(str) {

    switch (str) {
        case 'red':
            return "strawberries are red";
            break;

        case 'orange':
            return "Oranges are orange";
            break;

        case 'yellow':
            return "The sun is yellow";
            break;

        case 'green':
            return "Grass is green sometimes";
            break;

        case 'blue':
            return "The sky is blue";
            break;

        case 'indigo':
            return "what is indigo anyway?";
            break;

        case 'violet':
            return "violets are flowers but they are blue";
            break;

        default:
            return "Thats not a color I know";
            break;


    }
}

console.log(analyzeColor("green"));
//-------------------------------------
// better way












/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var askForColor = prompt('Please enter a color');
var result = analyzeColor(askForColor);
console.log(result);
alert(result);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount) {
    // calculate discount %
   var discountPercent;
       if(luckyNumber === 0){
           discountPercent = 0;
       }else if (luckyNumber === 1){
           discountPercent = .10;
       }else if (luckyNumber === 2){
           discountPercent = .25;
       }else if (luckyNumber === 3){
           discountPercent = .35;
       }else if (luckyNumber === 4) {
           discountPercent = .50;
       }else if (luckyNumber === 5){
           discountPercent = 1;
       }else {
           discountPercent = 0;
       }

       var discountAmount = totalAmount * discountPercent;
       return totalAmount - discountAmount;

}

    console.log(calculateTotal(4, 100),50);

    /**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

var luckyNumberGen = Math.floor(Math.random() * 6);
var whatIsYourTotal = +prompt('Enter total bill');
var userCalulatedTotal = calculateTotal(luckyNumberGen, whatIsYourTotal);
alert("Your lucky number is " + luckyNumberGen);
alert ("Your initial price before discount is " + whatIsYourTotal);
alert('Your final price is ' + userCalulatedTotal);

})();