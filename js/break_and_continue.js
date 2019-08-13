
var pickNumber = 0;

while (pickNumber % 2 === 0) {
    pickNumber = +prompt('Enter an odd number between 1 and 50');

}

for(var i =1; i < 50; i+=2){
    if(i === pickNumber){
        console.log('Yikes! skipping number ' + pickNumber);
        continue;
    }
    console.log('here is an odd number ' + i);
}



//------------------------------------------------------
// better way



while (true){
    var num = parseInt(prompt('Enter an odd number between 1 and 50'));
    if(num % 2 !== 0 && num > 0 && num < 51){
        break;
    }
}

console.log("user entered" + num);

for (var i = 1; i < 50; i+=2){
   if(num === i){
       console.log("Skip" + num);
       continue;
   }
    console.log(i);
}







