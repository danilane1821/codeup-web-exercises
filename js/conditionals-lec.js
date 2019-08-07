 var raining = true;

if (raining){
 alert ("it is raining today!")
}

var numberOfLives = 0;

 if (numberOfLives){
     alert ("game over")
 }

//  //------------------------
 //if else


 var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');


 if (weShouldDeleteStuff) {
     // delete all the things...
 } else {
     alert("Operation Canceled!");
 }


 var whatShouldWeEat = confirm("Do you want tacos today?")

 if (whatShouldWeEat) {
     alert ('great, sounds good!')

 }else {
    alert ("boooo, okay")
 }

//  //----------------------------

 // if ... else if.....else

 var pizzaPreference = prompt("What kind of pizza do you like?");

 if (pizzaPreference === "pineapple and hot sauce") {
     alert("What a coincidence, that's my favorite!");

 } else if (pizzaPreference === "cheese") {
     alert("Just plain cheese? Okay...");

 } else {
     alert(pizzaPreference + " isn't my favorite, but let's order some!");
 }

//-----------------------------

 function evaluateTrafficLights(trafficLightColor) {

     if (trafficLightColor === "red") {
         return "You are approaching a red light";

     } else if (trafficLightColor === "yellow") {
         return "You are approaching a yellow light";

     } else if (trafficLightColor === "green") {
         return "You are approaching a green light";
 } else {
     return "Are you driving?"
     }
 }



 console.log(evaluateTrafficLights("red"))
//----------------------------------------------


var message;
var success = true;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}


console.log(message);
// the above if/else can be re-written as:

var success = true;
var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
console.log(message);


//-------------------------------------
//switch




var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;

    case "cheese":
        alert("Just plain cheese? Okay...");
        break;

    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}


function evaluateTrafficLights(trafficLightColor) {

    switch (trafficLightColor) {
        case "red":
            return 'You are approaching a red light';


        case "yellow":
            return "You are approaching a yellow light";


        case "green":
            return "You are approaching a green light";


        default:
            return "are you sure you are driving?";


    }
}

// ----------------------------------






