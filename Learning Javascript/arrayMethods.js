//important array methods

//forEach

// const numbers = [4,2,5,8]

// function multiplyBy2(number , index){
//   console.log("index is " + index)
//   console.log(number * 2)
// }

// for (let index = 0; index < numbers.length; index++) {
//   multiplyBy2(numbers[index], index)
  
// }

// numbers.forEach(function(number){
//     console.log(number*3)
// })

// const users = [
//  {firstname:"Naman", age: 24},
//  {firstname:"Mohit", age: 24},
//  {firstname:"Abhu", age: 24},
//  {firstname:"Dada", age: 24},
//  {firstname:"Namabcdan", age: 24}


// ]

// users.forEach((obj)=>{
//   console.log(obj.firstname)
// })


//map

// const numbers = [3,4,5,6,7]



// const squareNumber = numbers.map((number)=>{
//   return number*number
// }) // new array of squared numbers

// console.log(squareNumber)


// const users = [
//  {firstname:"Naman", age: 24},
//  {firstname:"Mohit", age: 24},
//  {firstname:"Abhu", age: 24},
//  {firstname:"Dada", age: 24},
//  {firstname:"Namabcdan", age: 24}
// ]

// const firstNameArray = users.map((user)=>{
//   return user.firstname
// })

// console.log(firstNameArray)

//filter

// const numbers = [1,3,4,5,6,7,8,9]

// const evenNumbers = numbers.filter((number)=>{
//   return number % 2 == 0
// })

// console.log(evenNumbers)

//reduce

// const numbers = [1,2,3,4,5]

// const sum  = numbers.reduce((acc,curr)=>{
//   return acc + curr
// },0)

// console.log(sum)


// const userCart = [
//   {productId: 1, productName:"mobile",price:12000},
//   {productId: 2, productName:"laptop",price:18000},
//   {productId: 3, productName:"tv",price:10000},
// ]


// const subtotal = userCart.reduce((acc,curr)=>{
//     return acc + curr.price
// },0)

// console.log(subtotal)

//  sort method

// by default it will sort everything according to ascii numbers even in below case but if we want to sort the number actually we need to do

// const numbers = [5,9,1200,400,3000];
// // numbers.sort()
// // console.log(numbers)

// console.log(numbers.sort((a,b)=>{
//   return a-b
// })) 


//find

// const myArray = ["Hello","cat", "dog", "lion"]


// const ans = myArray.find((string)=>{
//   return string.length === 3 ;
// })

// console.log(ans)

// const users = [
//   {userId: 1 ,username: "Naman"},
//   {userId: 2 ,username: "abcd"},
//   {userId: 3 ,username: "hiya"},
//   {userId: 4 ,username: "abhu"},
//   {userId: 5 ,username: "rekha"},

// ]

// const myUser = users.find((user)=> user.userId === 3)

// console.log(myUser)

//every (retruns true or false)

// const numbers = [2,4,6,9,10]

// const ans = numbers.every((number)=>number % 2 === 0 )

// console.log(ans)

// const userCart = [
//   {productId: 1, productName:"mobile",price:12000},
//   {productId: 2, productName:"laptop",price:18000},
//   {productId: 3, productName:"tv",price:10000},
// ]

// const ans = userCart.every((cartItem)=>cartItem.price < 30000)

// console.log(ans)

//some

// const numbers =[3,5,11,9]

// const ans=numbers.some((number)=> number%2 === 0)

// console.log(ans)

// const userCart = [
//   {productId: 1, productName:"mobile",price:12000},
//   {productId: 2, productName:"laptop",price:18000},
//   {productId: 3, productName:"tv",price:10000},
//   {productId: 3, productName:"tv",price:25000},
// ]

// const ans = userCart.some((cartItem)=>cartItem.price>100000)

// console.log(ans)

//fill Method

// value , start ,end

// const myArray = new Array(10).fill(0)
// console.log(myArray)

// const myArray = [1,2,3,4,5,6,7,8]
// myArray.fill(0,2,5)

// console.log(myArray)

//splice
// start, delete, insert



//iterables 

