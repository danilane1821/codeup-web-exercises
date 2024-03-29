(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
    firstName: "Danielle",
    lastName: "Lane"

};

    console.log(person.firstName) // "Danielle"
    console.log(person.lastName) // "Lane"




    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function() {
       return "Hello " + this.firstName + " " + this.lastName;
    };

    console.log(person.sayHello());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //shopper > 200 = 12% discount
        // return name, amount before discount, the discount, and amount after discount
        //access our properties and do comparison there

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        if(shopper.amount >= 200){
           var discountedAmount = shopper.amount - (shopper.amount * .12);
            console.log("hi " + shopper.name + " Your original amount is " + shopper.amount + " Your discount amount is 12%." + " your total after discount is  " + discountedAmount);
        }else{
            console.log("Sorry, " + shopper.name + " You do not get a discount, your total is still " + shopper.amount);
        }
    });






    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: 'The Giving Tree',
            author: {
                firstName: "Shel",
                lastName: "Silverstein"
            }
        },

        {title: 'How to be A Better Programmer',
            author: {
                firstName: "Danielle",
                lastName: "Lane"
            }
        },

        {title: 'Why Codeup is the Best School Ever',
            author: {
                firstName: "Cody",
                lastName: "The Duck"
            }
        },

        {title: 'How to Not Lose Your Mind When Problem Solving',
            author: {
                firstName: "Danielle",
                lastName: "Lane"
            }
        },

        {title: 'Coding For Dummies',
            author: {
                firstName: "Cody",
                lastName: "The Duck"
            }
        }


    ];


    console.log(books[0].title);
    console.log(books[0].author.firstName) ;
    console.log(books[0].author.lastName) ;

    console.log(books[1].title);
    console.log(books[1].author.firstName) ;
    console.log(books[1].author.lastName) ;

    console.log(books[2].title);
    console.log(books[2].author.firstName) ;
    console.log(books[2].author.lastName) ;

    console.log(books[3].title);
    console.log(books[3].author.firstName) ;
    console.log(books[3].author.lastName) ;

    console.log(books[4].title);
    console.log(books[4].author.firstName) ;
    console.log(books[4].author.lastName) ;








    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book) {

        console.log("Book #" + (books.indexOf(book) + 1));
        console.log(" Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " +  book.author.lastName);
        console.log("---");


    });







    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously.
     *   Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above.
     *   Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook (title, first, last) {
        return {
            title: title,
            author: {
                firstName: first,
                lastName: last,
            }

        }
    }

    var book = [createBook()];
    console.log(book);

    book.push(createBook("dog", "danielle", "lane"));
    console.log(book);




    function showBookInfo (bookObj) {
        return "Title: " + bookObj.title + " " + "Author: " + bookObj.author.firstName + " " + bookObj.author.lastName;
    }

    console.log(showBookInfo(createBook('title' , "first" , "last")));

    books.forEach(function(book ,i) {

        console.log("Book #" + (i + 1));
        console.log(showBookInfo(book));


    });
    //----------------------------------------------

     function createAuthor (firstName, lastName){
         return {
             firstName: 'danielle',
             lastName: 'lane'
         }
     }

     function createBook(title, author){
         return {
             title: title,
             author: author
         }
     }



     books.push(createBook("the giving tree", createAuthor("danielle", "lane")));

     books.forEach(function (book, i) {
         console.log("Book #" + (i + 1));
         console.log(showBookInfo(book));


     });


})();
