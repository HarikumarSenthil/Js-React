const array=[12,3,4,5,7,2]


// Adding and removing elements

// array.push(8) add at last
// array.pop() remove at last
// array.unshift(13) add a begin 
// array.shift()  remove a begin
// array.splice(1,2,100) (startIndex, removeCount, additems)



// searching & checking

// index = array.indexOf(12) index of an element 
// lastindex  = array.lastIndexOf(12) last index an element
// ispresent = array.includes(12) returns boolean wheather it is present or not 
// find = array.find(n => n < 12) it is callback functions it returns the first condition satastify value
// findIndex = returns the first matching elememt 
// value = array.some(n=> n ===12) if atleast one condition satisfies 
// value  = array.every(n=> n ===12) all should satisfy


// array.forEach(element => {  iterates loop elements 
//     console.log(element)
// });

// value = array.filter((eachvalue)=>( creates and new array 
//     eachvalue < 10
// ))


// value = array.reduce((previousValue,currentValue)=>  reduce array into single value 

// previousValue + currentValue)

// console.log(value)


// async function demo() { iterates over values 
//   let promises = [Promise.resolve(1), Promise.resolve(2)];
//   for await (let val of promises) {
//     console.log(val); // 1, 2
//   }
// }
// demo();



