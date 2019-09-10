//
// //my version
// const wait = (number) => {
//
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//         resolve();
//      },1000)
//     });
//
//
// };
//
// console.log(wait(1000));
//
//     wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//     wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// walk through version


//
// function wait(ms){
//     return new Promise(function (resolve) {
//         setTimeout(function(){
//             resolve();
//         }, ms)
//     });
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



// fetch('https://swapi.co/api/people/1')
//     .then((response) => {
//         return response.json();
//     }).then((data) => {
//     console.log(data);
// }).catch(console.log);



// fetch exercise
function lastCommit (userName) {
    return fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': ` token ${githubToken}`}})
        .then((response) => {
            // console.log(response);
            return response.json();
        }).then(gitObject => gitObject.filter(function (object) {
                return object.type === "PushEvent";
            })).then(event => console.log(event[0].created_at));


}
console.log(lastCommit('danilane1821'));