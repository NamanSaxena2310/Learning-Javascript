//Objects are referemce type

// const person = {
//   name : "Naman",
//   age : 22,
//   hobbies:["guitar","sleeping","music"]
// }

// How to access objects data

// console.log(person.name)
// console.log(person.hobbies[0])
// console.log(person["name"])
// how to add key value pair to object

// person.gender = "male"
// person["lastname"] = "saxena"
// console.log(person)

// difference between dot notation and bracket notation in objects

// if we want to add a key with a space in between then we are ought to convert that key into string as spaces are not allowed in javascript that is the reason we use bracket notation 

// person["middle name"] = "Subodh"
// console.log(person)

// //Second reason is that if the key stored in a varialble like 
// const key = "college name"
// //then if we do 
// // person.key ="conestoga"
// //this will result in key variable being considered as key not college  name same is the case with
// // person["key"]
// // but if we do 
// person[key] = "conestoga"
// //then we will get what we were expecting now the key will be "college name" and the value will be "conestoga"
// console.log(person)


//How to iterate Objects

// const person = {
//   name : "Naman",
//   age : 22,
//   hobbies:["guitar","sleeping","music"]
// }

// // for (let key in person) {
// //   console.log(person[key])
// // }

// const keys = Object.keys(person)

// for(let key of keys){
//   console.log(person[key])
// }

//computed properties

// const key1 = "obj1"
// const key2 = "obj2"

// const value1 = "myValue1"
// const value2 = "myValue2"

// let obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj)

//Spread operator in Objects

// const obj1 ={
//   key1 : "valu1",
//   key2 : "value2" 
// }

// const obj2 ={
//   key3 : "valu3",
//   key4 : "value4" 
// }

// const newObject = {...obj1,...obj2}
// const newObject = {..."abc"}
// console.log(newObject)


//Object Destructuring

// const band = {
//   name : "led zepplin",
//   famousSong : "stairway to heaven"
// }

// const {name, famousSong} = band
// const {name:banName, famousSong:song} = band

// console.log(name,famousSong)

//Objects inside Array

// const users = [
//     {
//       firstName: "Naman",
//       lastName : " Saxena",
//       gender : " male"
//     },
//     {
//       firstName: "Subodh",
//       lastName : " Saxena",
//       gender : " male"
//     },
//     {
//       firstName: "Rekha",
//       lastName : " Saxena",
//       gender : " female"
//     },

// ]

// for (const user of users) {
//     console.log(user)
// }

//nestetd desttructuring


// const users = [
//     {
//       firstName: "Naman",
//       lastName : " Saxena",
//       gender : " male"
//     },
//     {
//       firstName: "Subodh",
//       lastName : " Saxena",
//       gender : " male"
//     },
//     {
//       firstName: "Rekha",
//       lastName : " Saxena",
//       gender : " female"
//     },

// ]

// const [{firstName:user1Firstname,lastName},,{gender}] = users

// console.log(user1Firstname,gender,lastName)


//Object Cloning

// const obj = {
//   key1:"value1",
//   key2:"value2"
// }

// // const obj2 = {...obj}

// // console.log(obj)
// // console.log(obj2)

// // obj.key3 = "value3"

// // console.log(obj)
// // console.log(obj2)

// // Method 2

// const obj3 = Object.assign({},obj)

// console.log(obj3)

//optional chaining
// const user = {
//   firstName: "Naman",
//   // address:{housenumber:"397"}
// }

// // console.log(user.address.housenumber )
// console.log(user?.address?.housenumber)

//This is called optional chaining when a property does not exist and you try to get access of that property then javascript engine throws and error . but if you try to access that using ".?" this notation then javascript checks first whether that property exist or not if does not exist then it will return undefined otherwise you can access the property.