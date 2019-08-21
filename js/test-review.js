// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types
// and returns an array of only the numbers type in ascending order.

// var testInput = ["fred", true, 5, 3];
//
// function filterNumbers(input) {
//     var output = [];
//     for (var i = 0; i < input.length; i += 1) {
//         if (typeof input[i] === "number") {
//             output.push(input[i]);
//         }
//     }
//     output.sort();
//     return output;
// }
//
// console.log(filterNumbers(testInput));


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

// function getOlder(dogs) {
//     for (var i = 0; i < dogs.length; i++){
//         dogs[i].age +=1;
//     }
//     return dogs;
// }
//
// console.log(getOlder(dogs));


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

//
// function washCars(cars) {
//     cars.forEach(function(car) {
//         car.isDirty = false;
//     });
//     return cars;
// }
//
// console.log(washCars(cars));


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



// function adminList (users) {
//    var numberOfAdmins = 0;
//    users.forEach(function(user){
//        if (user.isAdmin){
//            numberOfAdmins++;
//        }
//     });
//     return numberOfAdmins;
// }
//
// console.log(adminList(users));

// function adminList (users) {
//     var emails = [];
//     users.forEach(function(user){
//         if (user.isAdmin){
//             emails.push(user.email);
//         }
//     });
//     return emails;
// }

// console.log(adminList(users));
//
// function adminList (users) {
//     var adminObjects = [];
//     users.forEach(function(user){
//         if (user.isAdmin){
//             adminObjects.push(user);
//         }
//     });
//     return adminObjects;
// }
//
// console.log(adminList(users));


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

