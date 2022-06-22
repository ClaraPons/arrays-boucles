// 01 - Fruits
// const fruits = ["mango", "lemon", "blueberry"]
// console.log(fruits)
// console.table(fruits)

// 02 - Access
// const ingredients = ["eggs", "milk", "butter"]
// console.log(ingredients[1])
// console.log(ingredients.indexOf("butter"))

// 03 - Add and Remove
// const objects = ["pen","book", "lamp"]
// objects.unshift("chair")
// console.log(objects)

// objects.pop()
// console.log(objects)

// objects.push("laptop")
// console.log(objects)

// objects.shift()
// console.log(objects)

// 04 - Order
// const numbers = [4,10,8,12,6]
// numbers.reverse()

// console.log(numbers)

// 05 - Boucle
// const limit = 10
// let total = 0
// for (let i = 0; i <= limit; i++) {
//     total += i
//     console.log(total)
// }

// 06 - Reverse

// const sentence = "Hello Konexio !"
// const sentenceArray = sentence.split("")
// console.log(sentenceArray)
// sentenceArrayBis = []

// for(i = 0; i < sentenceArray.length; i++){
//     console.log(i)
//     sentenceArrayBis.unshift(sentenceArray[i])
// }

// console.log(sentenceArrayBis.join(''))

// 07 - Fizzbuzz
// for (let i = 0; i < 100; i++){
//     if(i % 7 === 0 ){
//         console.log("Fizz")
//     }else if(i % 3 === 0 && i % 5 === 0){
//         console.log("Buzz")
//     }else if(i % 5 === 0){
//         console.log("fizzbuzz")
//     }else if (i % 3 === 0){
//     }else{
//         console.log(i)
//     }
// }

// 08 - While
// const limit = 10 
// let total = 0
// let i = 0

// while (i < limit){
//     i++
//     console.log(total += i)
// }

//  09 - Sans boucle
// const students = ["Dahn", "Arthur", "Wallid", "Edaly", "Lynda", "Jade"]
// const min = 0
// const max = 5

// const random = Math.floor(Math.random() * max) + min
// console.log(students[random])

// // 10 - Random and max
// const array = []
// const max = 100
// const min = 0

// for(let i = 0; i < 20; i++){
//     let random = Math.round(Math.random() * (max)) + min
//     array.push(random)
// }

// console.log(array)
// let maxArray = array[0]

// for(let i = 0; i < 20; i++){
//     if (array[i] > maxArray){
//         maxArray = array[i]  
//     }
// }

// console.log(maxArray)