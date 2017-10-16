
// wrapping promises
var asyncAdd = (a, b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof a ==='number' && typeof b === 'number') {
                resolve(a+b);
            } else {
                reject('Arguments must  be numbers');
            }  
        }, 1500);
    });
};

// Chaining Promises
asyncAdd(5, '7').then((res) => {
    console.log(`Result: ${res}`);
    return asyncAdd(res, 29);
}).then((res) => {
    console.log(`New Result: ${res}`);
}).catch((errorMsg) => {
    console.log(errorMsg);
});


// var somePromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//     resolve('Hey it worked!');
//     resolve();
//     reject('Unable to fulfill promise');
//     },2500);
    
// });

// somePromise.then((message) => {
//     console.log('Success: ',message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// })