// function outerFun(){
//   function innerFunction(){
//     console.log("hello world")
//   }
//   return innerFunction
// }

// const ans = outerFun()
// // console.log(ans)
// ans()


// function printFullName(firstName,lastName){
//   function printName(){
//     console.log(firstName,lastName)
//   }
//   return printName
// }

// const ans = printFullName("Naman", "Saxena")
// // console.log(ans)
// ans()

// function myFunction(power){
//     return function innerFunction(num){
      
//       console.log(num**power)
//     }
// }


// const square = myFunction(3)
// square(4)


// function func(){
//   let count = 0
//   return function print(){
//     if(count == 0){
//       console.log("Hi you called me")
//       count++
//     }else{
//       console.log("mai already ek baar call ho chuka hoon")
//     }
//   }
// }


// const myFunc = func();
// myFunc() // Hi you called me 
// myFunc()// mai already ek baar call ho chuka hoon
// myFunc()

// const myFunc2 = func()
// myFunc2()



// var createCounter = function(n) {
//   let count = 0
//   return function() {
//       if(count < 1){
//           count++
//           return n
         
//       }else{
//           m = n + 1
//           n = m
//           return m
//       }
//   };
// };

 
//  const counter = createCounter(10)
//  console.log(counter())  // 10
//  console.log(counter())  // 11
//  console.log(counter())  // 12
