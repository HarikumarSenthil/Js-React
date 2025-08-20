
const fs = require('fs')
const { resolve } = require('path')
// example 1 
// function promiseFunction(){
//     return new Promise((resolve,reject)=>{
//         const condition = true 
//         if(condition){
//             setTimeout(resolve,3000,"condition satisfied!!!...")
//         }
//         else{
//             reject()
//         }
//     })
// }

// promiseFunction().then((msg)=> console.log(`Promise Fullfilled Successfully${msg}`))
// .catch(()=> console.log("Promise is not Fullfilled Successfully"))

// example 2 (using readFile API)
// const readFilePromise = (path)=>{
//     return new Promise((resolve,reject)=>{
//     fs.readFile(path,(error,result)=>{
//         if (!error){
//             resolve(result)
//         }
//         else{
//             reject(error)
//         }
//     })
//     })
// }


// readFilePromise("./index.js")
// .then((result)=> console.log(result))
// .catch((error)=> console.log(error))



// creating multiple promise and implementing the static promise methods 
// Static methods in promise 



// creating a sample of three promises and each promise assume a friends response for a message 


// let friend1 = new Promise((resolve, reject) => {
//     let messageresponse = true;  
//     if (!messageresponse) {
//         setTimeout(reject,"Friend 1 didn't reply", 5000);
//     } else {
//         setTimeout(resolve,"Friend 1: Hi Hari",3000);
//     }
// });

// let friend2 = new Promise((resolve, reject) => {
//     let messageresponse = false;
//     if (!messageresponse) {
//         setTimeout(reject,"Friend 2 is busy",1000);
//     } else {
//         resolve("Friend 2: Hello bro");
//     }
// });

// let friend3 = new Promise((resolve, reject) => {
//     let messageresponse = true;
//     if (!messageresponse) {
//         reject("Friend 3 is offline");
//     } else {
//         resolve("Friend 3: Wassup Hari");
//     }
// });


// Method: 1  Promise.all() it is returns all promise values as array when one promise fails it returns the failed promise value(priority value )

// Promise.all([friend1,friend2,friend3])
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((errmsg)=>{
//     console.log(errmsg)
// })

// Method 2 promise.allSettled() it returns all promise values wheather is fullfilled or not 

// Promise.allSettled([friend1,friend2,friend3])
// .then((msg)=>console.log(msg))
// .catch((msg)=>console.log(msg))

// Method 3 Promise.any() it excutes the first promise when it resolves

// Promise.any([friend1,friend2,friend3])
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((msg)=>{
//     console.log(msg)
// })



// Method 4 Promise.race() it excutes the first one Wheather it is resolve or reject it excutes first promise which excutes first!!.. 


// Promise.race([friend1,friend2,friend3])
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((msg)=>{
//     console.log(msg)
// })





// promise Chaining 



// let friend1 = new Promise ((resolve,reject)=>{
//     responsemessage = true 
//     if(responsemessage){
//         resolve("Friend1: respond")
//     }
//     else{
//         resolve("Friend1: not respond")
//     }
// })


// friend1.then((msg1)=>{

//     console.log(msg1)

//     return new Promise((resolve,reject)=>{
//        let responsemessage = false 
//         if (responsemessage){
//             resolve("Friend2: respond")
//         }
//         else{
//         reject("Friend2 : not respond")
//         }
//     })
// })
// .then((msg2)=>{
//     console.log(msg2)
//     return new Promise((resolve,reject)=>{
//         let responsemessage = true 
//         if(responsemessage){
//             resolve("Friend3: respond")
//         }
//         else{
//             reject("Friend3 : not respond")
//         }
//     })
// })

// .then((msg3)=>console.log(msg3))
// .catch((err)=> console.log(err))







