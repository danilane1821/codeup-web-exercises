function frontTimes(str, n){
    if(str.length > 3){
        str = str.substring(0,3);
        return str.repeat(n);
    }else{
        str = str.substring(0,3);
        return str.repeat(n)
    }
}

// console.log(frontTimes('danielle', 3));

function doubleX(str){
    var newArr;
    newArr = str.split("");

    return newArr;
}

// console.log(doubleX("Hello"));

function extractMiddle(str) {

    var position;
    var length;

    if(str.length % 2 == 1) {
        position = str.length / 2;
        length = 3;
    } else {
        position = str.length / 2 - 1;
        length = 2;
    }

    return str.substring(position, position + length)
}

// console.log(extractMiddle("handbananna"));


function middleThree(str){
    var position;
    var length;
    if(str.length <= 3) {
        return str;
    }else if(str.length % 2 == 1) {
        position = str.length / 3;
        length = 3;
        return str.substring(position, position + length);
    }
}

console.log(middleThree("rower"));
console.log(middleThree("row"));



function seeColor(str){
    if(str.slice(0,3) == "red"){
        return str.slice(0,3);
    }else if(str.slice(0,4) == "blue"){
        return str.slice(0,4);
    }else{
        return "";
    }
}

function firstTwo(str){
    if(str.length <= 2){
        return str;
    }else if(str.length > 2){
        return str.slice(0,2);
    }else {
        return "";
    }

}

function makeTags(tag, word){
    return "<" + tag + ">" + word + "</" + tag + ">";

}

function hasBad(str){
    if(str.slice(0,3) === "bad" || str.slice(1,4) === "bad"){
        return true;
    }else{
        return false
    }
}