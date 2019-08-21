// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types
// and returns an array of only the numbers type in ascending order.

var testInput = ["fred", true, 5, 3];

function filterNumbers(array) {
    var output = [];
    for (var i = 0; i < array.length; i += 1) {
        if (typeof array[i] === "number") {
            output.push(array[i]);
        }
    }
    output.sort();
    return output;
}

console.log(filterNumbers(testInput));




//write a function ---> filterNumbers
// Accepts an array ---> parameter ---> because its an array we have to loop
//mixed data types ----> check to see if this is a number
//return an array ----> we need an empty array to return
//ascending order ---> .sort()


function filterNumbers(array) {
    var newarray = [];
    array.forEach(function(data){
        //console.log(data); ---> check to see if loop is working
        if(typeof data === "number"){
            //console.log(data); --> check to see if it is catching numbers
            newarray.push(data);
        }

    });
    return newarray.sort();
}

console.log(filterNumbers(testInput));


//2. Write a function, `getOlder()` that takes in array of dog objects
// and increases the value of the age properties by 1.

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder(dogs) {
    for (var i = 0; i < dogs.length; i++){
        dogs[i].age +=1;
    }
    return dogs;
}

console.log(getOlder(dogs));



//write a function named getOlder
// takes in an array ---> parameter is an array ---> that means we have to loop
//.age + 1 or maybe .... or maybe .age +=1


function getOlder(array){
   array.forEach(function(dog){
       //console.log(dog.age); check to see if im getting the age
       dog.age += 1;

   });
    return array;
}

console.log(getOlder(dogs));


// Write a function, `washCars()` that takes in a array of car objects
// and sets the boolean properties of isDirty to false
var cars =
[
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

//write a function washCars()
// takes in an array of object ---> parameter is an array
// .isDirty needs to be set to false;




function washCars(Cars) {
    cars.forEach(function(car) {
        //console.log(car.isDirty) to see the loop and booleans
        car.isDirty = false;
    });
    return cars;
}

console.log(washCars(cars));








// 4. Write a function, `adminList()` that takes in an array of user objects
// and returns a count of all admins based on the isAdmin property.
// Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
var users =
[
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];



function adminList (users) {
   var numberOfAdmins = 0;
   users.forEach(function(user){
       if (user.isAdmin){
           numberOfAdmins++;
       }
    });
    return numberOfAdmins;
}

console.log(adminList(users));

function adminList (users) {
    var emails = [];
    users.forEach(function(user){
        if (user.isAdmin){
            emails.push(user.email);
        }
    });
    return emails;
}

console.log(adminList(users));

function adminList (users) {
    var adminObjects = [];
    users.forEach(function(user){
        if (user.isAdmin){
            adminObjects.push(user);
        }
    });
    return adminObjects;
}

console.log(adminList(users));





//function named AdminList
// takes in an array ---> as parameter & loop
// need counter variable & increases when isAdmin = true;
//should return how many users are admin



function adminList (users) {
    var areAdmins = 0;
    users.forEach(function(user){
       if (user.isAdmin === true){  // or just (user.isAdmin) because they are set to booleans anyway.
           areAdmins += 1 // or ++ instead of += 1
       }

    });
    return areAdmins;
}

console.log(adminList(users));


//function named adminList
// takes in an array ---> as parameter & loop
// need an empty array to push admin emails into.
//need to return the emails



function adminList (users) {
    var adminEmails = [];
    users.forEach(function(user){
        if (user.isAdmin){
            adminEmails.push(user.email)
        }

    });
    return adminEmails;
}


console.log(adminList(users));





//function named adminList
//takes in an array ---> as parameter & loop
//returns user objects that are admins in new array



function adminList (users) {
    var admins = [];
    users.forEach(function(user){
        if (user.isAdmin){
            admins.push(user)
        }

    });
    return admins
}


console.log(adminList(users));



//Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects
// that contain properties for bread and filling and values correspond to the same order of the two passed in arrays.
// Assume the two array inputs are the same length.

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];


// make a function ---> makeSandwichObjects()
// takes in two arrays----> breads, fillings that are our parameters and loops through the indexes
// new empty array;
//must return an array of objects that are sandwich objects with bread and fillings that match which their index values

function makeSandwichObjects(breads, fillings) {
 var sandwichArray = [];
    for(var i = 0; i < breads.length; i+=1 ){
        var sandwichObject = {};
        sandwichObject.bread = breads[i]
        sandwichObject.filling = fillings[i]

        sandwichArray.push(sandwichObject);
    }

    return sandwichArray;
}


















function makeSandwichObjects(breads, fillings) {
var output = [];
  for (var i = 0; i < breads.length; i++){
      output.push({
          breads: breads[i],
          fillings: fillings[i]
          });
  }
  return output ;
}
console.log(makeSandwichObjects(breads, fillings));

