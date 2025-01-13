// function declaration 

// function singHappyBirthday(){
//   console.log("Happy Birthday")
// }

// singHappyBirthday()


//function expression

// const singHappyBirthday = function(){
//   console.log("Happy Birthday")
// }
// singHappyBirthday()

//Arrow functions

// const singHappyBirthday = () =>{
//   console.log("Happy Birthday")
// }

//hoisting

// hello()

// const hello = function (){
//   console.log("Hello World")
// }

// console.log(hello)
// let hello = "hello"
// console.log(hello)

//functions inside functions and lexical scope

// function myApp (){

//   const myVar = "value1"

//   function myfunc1(){
//     const myVar = "value59"
//     console.log("inside myfunc1",myVar)
//   }




//   console.log(myVar)
//   myfunc1()
// }

// myApp()

// A function tries to find the variablle or any property that is using in their lexical scope or environment and if they dont find it there they will try to find it in their parent's lexical environment. That is called lexical chaining 

// rest parameters

// function myfunc(a,b,c,...d){
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
// }

// myfunc(3,4,5,6,7,8,89)

// function addAll(...numbers){
//   let total = 0
//   for (const number of numbers) {
//       total =total + number
//   }

//   return total
// }

// console.log(addAll(1,2,3,4,5))


//Callback Function

//When you can pass a function as an arguement and another function can use it and call that function that's when wwe call callback functiom

// function myFunc2(){
//   console.log("Inside myFunc2")
// }

// function myFunc(Callback){
//  console.log("inside myfunc") 
//  Callback()
// }

// myFunc(myFunc2)

// function returning function

// function myFunc(){
//   return function hello() {
//     console.log("hello")
//   }
// }

// const ans = myFunc()

// ans()