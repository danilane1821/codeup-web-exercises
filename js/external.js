"use strict";

// rest of js here //

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var favColor = prompt("Please enter your favorite color");

alert('Cool, ' + favColor + ' is my favorite color too!');

// problem 1

var littleMermaidDaysRented = prompt('How many days did you rent The Little Mermaid?');
var brotherBearDaysRented = prompt ("How many days did you rent Brother Bear?");
var herculesDaysRented = prompt ('How many days you rent Hercules?');
var pricePerDayDollars = 3;
var rentalTotal;
var rentalTotal = alert('Your total for all movies is ' + ((Number(littleMermaidDaysRented) * pricePerDayDollars ) + ((Number(brotherBearDaysRented) * pricePerDayDollars))  +
    (Number(herculesDaysRented) * pricePerDayDollars)));

// problem 2

var googlePayPerHour = 400;
var amazonPayPerHour = 380;
var facebookPayPerHour = 350;

var googleHoursWorked = prompt('How many hours did you work for Google?');
var amazonHoursWorked = prompt('How many hours did you work for Amazon?');
var facebookHoursWorked = prompt('How many hours did you work for Facebook?');
var totalPay;
var totalPay = alert('Your total pay is ' + ((Number(googleHoursWorked) * googlePayPerHour) + ((Number(amazonHoursWorked) * amazonPayPerHour)) + (Number(facebookHoursWorked) * facebookPayPerHour)));

// problem 3


var classIsNotFull = confirm('Is class full? Please select OK if no');
var classScheduleDoesNotConflict = confirm('Does class conflict with schedule? If no please select OK');
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict + alert("You are now enrolled");
var studentNotEnrolled = !classIsNotFull && !classScheduleDoesNotConflict + alert("You can not enroll.");




// Problem 4

var numberOfItems = prompt('How many items do you have?'); // number
var offerIsValid = confirm('Is the offer expired? Please select OK if no'); // boolean
var isPremiumMember = confirm('Are you a premium member? Select OK if yes'); // boolean
var productDiscountApplied = offerIsValid && (isPremiumMember || Number(numberOfItems) > 2) + alert("Discount applied");
var discountNotApplied = !offerIsValid  && (!isPremiumMember || Number(numberOfItems) < 2) + alert("Discount not applied");

// DO I NEED TO MERGE BRANCHES?
