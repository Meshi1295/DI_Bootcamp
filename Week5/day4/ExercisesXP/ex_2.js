// Exercise 2: Analyze
// Analyze the code provided above what will be the outcome?


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// My guess
// asyncCall();
//   console.log('calling');
// asyncCall function is stop and call to resolveAfter2Seconds()
//after 2 secondes - 
// back to  asyncCall()
// console.log(result); => "resolved";

//------

//  ex_2.js:14 calling
// ex_2.js:16 resolved
