// class CreateUser{
//   constructor(firstname,lastName,email,age,address){
//     console.log("constructor called")
//   this.firstname = firstname
//   this.lastName =lastName
//   this.age=age
//   this.email =email
//   this.address= address
//   }

//   about(){
//     return`${this.firstname} is ${this.age} years old`
//   }

//   is18(){
//     return this.age >= 18
//   }
// }


// const user1 = new CreateUser("Naman","Saxena","namansaxena69@gamail.com",23,"Address")

// console.log(Object.getPrototypeOf(user1))

// class Animal{
//   constructor(name,age){
//     this.age = age
//     this.name = name 
//   }

//   eat(){
//     return `${this.name} is eating`
//   }


// }


// const animal1 = new Animal("Naman",23)
// console.log(animal1)
// console.log(animal1.eat()) 

// class Cat extends Animal{
//  constructor(name,age,speed){
//   super(name ,age)
//   this.speed = speed
//  }

//  run(){
//   return `${this.name} is running at ${this.speed}`
//  }
// }

// const tommy = new Cat("tommy",3,45)
// console.log(tommy.run())


///Getters and Setters

class Person{
  constructor(firstname,lastname,age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age

  }

  get fullname(){
    return `${this.firstname} ${this.lastname}`
  }

  setName(firstname,lastname){
    this.firstname = firstname
    this.lastname = lastname
  }

  set fullname(fullname){
    const[firstname,lastname]=fullname.split(" ")
    this.firstname = firstname
    this.lastname = lastname

  }


}

const person1 = new Person("Naman", "Saxena",6)

// console.log(person1.fullname)

// console.log(person1.firstname)
// console.log(person1.lastname)
// person1.setName("Mohit","Sharma")
// console.log(person1.firstname)
// console.log(person1.lastname)

person1.fullname = "Mohit Sharma"
console.log(person1.firstname)
console.log(person1.lastname)