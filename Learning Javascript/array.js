//ternary Operator
// let age = 20
// let result = age > 18 ? "adult" : "teenager"
// console.log(result)


//arrys
// let fruits = ["Apple", "Mango", "Pineapple","Banana"]
// fruits[2] = "Banana"
// console.log(fruits)
//arrays are objects
// console.log(typeof fruits)
// console.log(Array.isArray(fruits)) 


//Array push pop
// fruits.push("Naman")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

//array shift(remove from start) unshift(add )
// fruits.unshift("Saxena")
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

//how to clone an array
// let arr1 = ["item1","item2"]
// // // let arr2 = ["item1","item2"] //Not efficient

// // let arr2 = arr1.slice(0) 

// // // let arr2 = [].concat(arr1)
// // console.log(arr2)

// //spread operattor to clone

// let arr2 = [...arr1].concat(["item3","item4"])
// console.log(arr2)


//How to iterate arrays

//Method 1
// for (let index = 0; index < fruits.length; index++) {
//   const element = fruits[index];
//   console.log(element)
// }


//forof loop
// for(let fruit of fruits){
//   console.log(fruit)
// }


//forin loop
// for (let index in fruits) {
//   console.log(fruits[index])
// }

//array destruturing

// const myArray = ["value1" , "value2" ,"value3","value4"]
// const [val1 ,val2,...myNewArray] = myArray
// console.log(val1,val2,myNewArray)
