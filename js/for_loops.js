var i;
function showMultiplicationTable (num) {
for(i = 1; i <= 10; i++){
    console.log( num + " X " + i + " = " + num*i);

    }
}
showMultiplicationTable(7);




var x;


function isOddOrEven() {
    for (x=1; x <= 10; x++){
        var random = Math.floor(Math.random() * 181) + 20;
        if(random % 2 === 0){
            console.log(random + " is an even number");
        }else{
            console.log(random + " is an odd number");
        }

    }
}
isOddOrEven();


for (var i = 1; i <= 9; i++)

{
    var num = "";

    for (var j = 0; j < i; j++)
    {
        (num = num + i);
    }

    console.log(num);
}


for (var d= 100; d >= 5; d--) {
   if(d % 5 === 0){
       console.log(d)
   }else{
       continue;
   }

}


