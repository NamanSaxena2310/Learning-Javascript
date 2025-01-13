//methods
// fucntions inside objectgs is called methodks

// const person ={
//   firstname: "Naman",
//   age: 8,
//   about:function(){
//     console.log("person name is " + this.firstname)
//   }
// }


// person.about()

//call apply bind

// function about(hobby,favmusic){
//   console.log(this.firstname,this.age,hobby,favmusic)
// }

// const user1 = {
//   firstname:"Naman",
//   age:24,
//   // about:function(hobby,favmusic){
//   //   console.log(this.firstname,this.age,hobby,favmusic)
//   // }
// }


// const user2 = {
//   firstname:"mohit",
//   age:12,

// }

// //here you can see that user2 object does not have about function but we want to call about function for user2. So we can achieve this by below code, here we are calling about fucntion through user1 object because that is the only way to access the aboput function. But then we are passing user2 object in call fucntion and what this is doing is it binds the this keyword with user2 object and thus the output will be mohit 12.And we are passing the aparams as well

// user1.about.call(user2,"guitar","coldplay")

//apply
// about.apply(user2,["guitar","coldplay"])


//bind

//  const func = about.bind(user2,"guitar","coldplay")
//  func()

//Arrow functions takes the context of  "this " keyword from one level up and you cannot change the context of this in arraow functions even with call apply bind.

//example
// In below example this refers to window object not user object

// const user ={
//   firstname:"Naman",
//   lastName: "Saxena",
//   about:()=>{
//     console.log(this)
//     console.log("My Name is" + this.firstname +this.lastName)
//   }
// }

// user.about()

//short syntax

// const user ={
//   firstname:"Naman",
//   lastName: "Saxena",
//   about(){
//     console.log(this)
//     console.log("My Name is" + this.firstname +this.lastName)
//   }
// }



// this is an object for one user imagine you want to create this data for million people it will be heart wrenching 

// const user = {
//   firstname:"Naman",
//   lastname:"Saxena",
//   email:"namansaxena69@gmail.com",
//   age:23,
//   address:"397 hazel st",
//   about:function(){
//     return`${this.firstname} is ${this.age} years old`
//   },

//   is18:function(){
//     return this.age >= 18
//   }
// }

//We will create a function that will return us the object and it takes all the props as parameters

// function(that function create object)
// 2. add key value pair
// 3. returns an object

// const userMethods = {
//   about : function(){
//     return`${this.firstname} is ${this.age} years old`
//   },
//  is18 : function(){
//     return this.age >= 18
//   }
// }


// //if we write about and is18 inside this function then it will be created for every object that we create yusing this function. That's why we have created  a seperate object for these functions "userMethods" and we just pass the reference of these methods so whenver these methods are called then  only they take up some space in the memory.
// function createUser(firstname,lastName,email,age,address){
//   const user = {}
//   user.firstname = firstname
//   user.lastName =lastName
//   user.age=age
//   user.email =email
//   user.address= address
//  user.about = userMethods.about
//  user.is18 = userMethods.is18

//   return user
   
// }

// const user1 = createUser("Naman","Saxena","namansaxena69@gamail.com",23,"Address")

// console.log(user1)
// console.log(user1.about())
// console.log(user1.is18())

// const obj1 = {
//   key1:"value1",
//   key2:"value2"
// }

// const obj2 = Object.create(obj1)
// // //this line will create an empty object {} and store its reference in obj2 but it will inherit the props of obj1 in onj2 inside __proto_property look at console.

// obj2.key3 = "value3"

// console.log(obj2)

// Now to solve teh problem we wrer facing we can do :-

// const userMethods = {
//   about : function(){
//     return`${this.firstname} is ${this.age} years old`
//   },
//  is18 : function(){
//     return this.age >= 18
//   }
// }

// function createUser(firstname,lastName,email,age,address){
//   const user = Object.create(userMethods)
//   user.firstname = firstname
//   user.lastName =lastName
//   user.age=age
//   user.email =email
//   user.address= address


//   return user
   
// }

// const user1 = createUser("Naman","Saxena","namansaxena69@gamail.com",23,"Address")

// console.log(user1)

// console.log(user1.is18())

// You can add your own properties to functions as they behave as objects as well.


// function hello(){
//   console.log("Hello World")
// }

// console.log(hello.name)

// hello.myOwnProperty = "very unique value"

// console.log(hello.myOwnProperty)

// //when we create functions functions give us some free space in the form of empty object called prototype.
// // only functions provide prototype property
// console.log(hello.prototype)

// hello.prototype.abc = "abc"
// hello.prototype.xyz = "xyz"
// hello.prototype.sing = function(){
//  return console.log("lalalalala")
// }

// hello.prototype.sing()

// Now that we have an understanding of __Proto__ and prototype We will improve our code again 


// const userMethods = {
//   about : function(){
//     return`${this.firstname} is ${this.age} years old`
//   },
//  is18 : function(){
//     return this.age >= 18
//   }
// }

// function createUser(firstname,lastName,email,age,address){
//   const user =Object.create(createUser.prototype)
//   user.firstname = firstname
//   user.lastName =lastName
//   user.age=age
//   user.email =email
//   user.address= address
//   return user
   
// }


// createUser.prototype.about =  function(){
//   return`${this.firstname} is ${this.age} years old`
// }

// createUser.prototype.is18 = function(){
//   return this.age >= 18
// }

// const user1 = createUser("Naman","Saxena","namansaxena69@gamail.com",23,"Address")

// console.log(createUser.prototype)
// console.log(user1)
// console.log(user1.about()) 














//NEW KEYWORD

// SO what new keyword does is when we call a function with new keyword just like what we did at line 261 new keyword will create an object which we can call as this it is an empty object at first but then in function definition we have added som properties to this so  it will create "createUser {firstname: 'naman', age: 23}" Now since this is and object it will have __proto__ refrence property and since createUser is a function it will have prototype empty object.

// function createUser (firstname,age){
//   this.firstname = firstname
//   this.age = age
// }

// // Now when we do this 
// createUser.prototype.about = function(){
//   console.log(this.firstname,this.age)
// }


// const user1 = new createUser("naman",23)
// console.log(user1)
// user1.about()


// 1.) creates a  empty object this = {}
// 2.) retrun {}
// 3.) 



//Constructor function
// function CreateUser(firstname,lastName,email,age,address){

//   this.firstname = firstname
//   this.lastName =lastName
//   this.age=age
//   this.email =email
//   this.address= address
// }


// CreateUser.prototype.about =  function(){
//   return`${this.firstname} is ${this.age} years old`
// }

// CreateUser.prototype.is18 = function(){
//   return this.age >= 18
// }


// const user1 = new CreateUser("Naman","Saxena","namansaxena69@gamail.com",23,"Address")

// // I want to get all the keys of the user1 object it will print the proprerties from __proto__ as well 

// for (const key in user1) {
//   console.log(key)
// }

// // if we want to print just the properties of user1 and not the ones in __proto__ then we can do :-

// for (const key in user1) {
//   if (user1.hasOwnProperty(key)) {
//     console.log(key)
    
//   }
// }

// console.log(user1)
// console.log(user1.about())


// console.log(Object.prototype)

// console.log(String.prototype)