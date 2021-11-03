// Exercise 2 : Promises
// 1. Create a promise that resolves itself in 4 seconds and returns a “success” string.
// 2.Read about Promise.resolve() and Promise.reject().

// 3.How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// 4.Add code to catch errors and console.log ‘Ooops something went wrong’.

let part = new Promise( (resolve) => {
    setTimeout(()=>{
        resolve('success')
    },4000)
})
.then((res)=> console.log(res))
.catch("Ooops something went wrong")

setTimeout(()=>{
    Promise.resolve('success').then((res)=>console.log(res))
    .catch("Ooops something went wrong")
},4000)
