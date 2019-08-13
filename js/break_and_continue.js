

var pickNumber = prompt('Please enter a odd number between 1 and 50');

console.log("odd number to skip is: " + pickNumber);

for (var a = 1; a < 50; a++) {
    if (a % 2 == 0) {
        continue;
    }
    if (pickNumber == a) {
        console.log("Yikes! Skipping number: " + a);
    } else {
        console.log("here is an odd number: " + a);

    }
    if (a >= 49) {
        break;
    }
}














