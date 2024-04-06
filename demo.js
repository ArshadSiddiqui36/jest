// function myFunction(input) {
//     if (typeof input !== 'number') {
//         throw new Error('Invalid Input');
//     }
// }

// module.exports = myFunction;


// function fetchData(callback) {
//     setTimeout( () => {
//         callback('Peanut Butter');
//     }, 1000);
// }

// module.exports = fetchData;


function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Peanut Butter') ,1000);
    });
}

module.exports = fetchPromise;