const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.


let newLanguages = users.filter(user => user.languages.length >= 3);
// console.log(newLanguages);

// Use .map to create an array of strings where each element is a user's email address

let userEmails = users.map(user => `${user.email}`);
// console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// let totalYearsExp = users.reduce((total, user) => {
// return total + user.yearsOfExperience}
//         ,0);
// console.log(totalYearsExp);


let totalYearsExp = users.reduce((total, user)=> {
    return total + user.yearsOfExperience / users.length;

}, 0);
// console.log(totalYearsExp);


// Use .reduce to get the longest email from the list of users.

let longestEmpEmail = users.reduce((longestEmail, user) => {
    // console.log(user.email);
    if(user.email.length >= longestEmail.length){
        longestEmail = user.email;
    }
    return longestEmail;

},"");

// console.log(longestEmpEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


let instructorNames = users.reduce((namesTogether, user, i) => {
    if(i < users.length -1){
        namesTogether += user.name + ",";
    }else {
        namesTogether += `and ${user.name}.`
    }
    return namesTogether;
}, "Your instructors are: ");

console.log(instructorNames);



///Bonus

const uniqueLangs = users.reduce((listOfLangs, user) => {
    for (const lang of user.languages){
        if (listOfLangs.indexOf(lang) === -1){
            listOfLangs.push(lang);
        }
    }
    return listOfLangs;
}, []);

console.log(uniqueLangs);

// bonus v 2



