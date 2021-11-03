// Exercise 3 : Resolve & Reject

// 1.Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// 2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


  Promise.resolve(3).then((res)=>console.log(res))
  Promise.reject("Boo").catch((err)=>console.log(err))