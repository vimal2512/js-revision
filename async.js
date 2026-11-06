// Javascript is single threaded meaning one call stack and one instruction at time
// then question ?
// How does js handles timers, api calls and asysnc tasks ?
// Event loop


// callback hell

// simple callback
setTimeout(() => {
    console.log("Step 1")
}, 1000)

// output step 1

// multiple different tasks
// Old style

setTimeout(() => {
    console.log("Login")

    setTimeout(() => {
        console.log("Fetch Profile")

        setTimeout(() => {
            console.log("Fetch orders")
        }, 1000)

    }, 1000)

}, 1000)

// output after delays
// login
// Fetch Profile
// Fetch Orders

// Problem
// code becomes deeply nested, unreachable, hard to debug
// shape becomes
// (
//   (
//     (
//       (

// called pyramid of doom
// This is callback hell
// callback hell causes difficult error handling, difficult maintenance, hard debugging, impossible scaling
// so promise were introduced


// Promises
// promise represents future value 
// promise has three states
// pending      still running
// fullfilled   success
// rejected     failed


// Basic promise

// Promise created
// ↓
// async work happens
// ↓
// resolve OR reject
// ↓
// then/catch executes

const promise = new Promise((resolve,reject) => {
    let success = true

    if(success) {
        resolve("Success")
    }else{
        reject("Failed")
    }
})


promise
  .then(result => {
    console.log(result)
  }) 
  .catch(error => {
    console.log(error)
  })


// output success
// resolve() means success, reject() means failure
// then() handles success, catch() handles error

// Callback hell fix using promises

// login()
//   .then(getProfile)
//   .then(getOrders)
//   .then(() => {
//     console.log("Done")
//   })
//   .catch(err => {
//     console.log(err)
//   })

// Async and await modern async synatax
// built on top of promises
// async await does not replace promises it simplifice promise usage
// await can only be used inside async function

// basic promise

function fetchData() {
    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Data recieved")
        },2000)
    })
}

fetchData()
  .then(data => {
    console.log(data)
  })


  // Usinf async and await

  async function getData() {
    const result = await fetchData()
    // await fetchData() pause this async function until promise completes not entire js
    // only this function pauses
    console.log(result);
  }

  getData();


  // Error handling

  async function test() {
    try{
      const result = await fetchData()
      console.log(result)
    }catch(err){
        console.log(err)
    } 
  }

  // Event loop refer js-internals.txt


  // missing concepts
  // dom events like event handlers, event bubbling, event listeners, deboucing, throttling