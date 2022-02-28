for(let number = 0; number <=10; number++){
if(number % 2 == 0){
    console.log(number);
}
}


// ctrl + b => nav bar on and off
// f12 -> console in browser


let firstName = "Lakneswaran" // string
let trophy = null              // object

// Object

let person = {
    // key: "value"
    name: " Lakneswaran",
    age: 22,
    gender: "Male",
    address: "Brazile, America",
    // sub object
    sibling: {
        brother: "Dada",
        sister: "mama"
    }
}
//  Dot Notation

console.log(person.name );
console.log(person.sibling.brother); // Dada

// How to change the value of the key inside an object?
// Can't change the key, but value well.

person.age = 24 //  We overwrite the age 22 into 24.

// Bracket Notation

console.log(person['name']);


// Javascript array

let favColors = ["red", "white"]
console.log(favColors[0]); // red

favColors[4] = "green"

console.log(favColors);

// What is the length af the array favColors?

console.log(favColors.length)


//  JS Function

//  Function declaration
 function greetUser(name){

    let name1 = "lakneswaran";
    let msg = "Hello" + name1 + "JS"
    console.log(msg);
 }

 greetUser(Lak)

// JS Arithmetic Opeartors

let number = 5;
let number2 = 20;

// console.log(++number); // 6
console.log(number++); // 5
console.log(number)   //6

// Strict Equality Operator (Datatype + value)

console.log(1 === 1); // number === number
console.log('1' === 1); // false

// Lose Equality Operator

console.log('1' == 1); // true 

// Ternary operator

let age = 24;

let type = age > 18 ? "Adult ticket" : "Child Ticket" // replace of if else statement


let testArray = [ '["(",")"]', '["{", "}"]', '["[", "]" ]' ];

// BitWise Operators

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | writePermission;

let message = (myPermission & readPermission) ? 'Yes' : 'No';

console.log(message);

// Operator Precedence

let x = 2 + 5 * 10 // 52

let hour = new Date();
console.log(hour.getHours());   // or let hour = new Data().getHours();

// For in loop object

const person1 = {
    name: 'Lakneswaran',
    age: 24
};

// for (let key in object)

for(let key in person){
    console.log(key+ ":" , person[key]);
}

// For in loop Array

let colors = ['red', 'blue', 'green'];

for(let index in colors){
    console.log(colors[index]);
}


// FOr of loop 

let Colors = ['red', 'blue', 'green'];

for(let Color of Colors){
    console.log("Colors: "+ Color);
}


                                             OOP




let personOne = {
    // key : value
name: "lakneswaran",
age : 24,
interest: ["Creating, teaching new things. "],
// nestsed object
address: {
    city: "amsterdam",
    state: "Central",
    },
    greeting: function(){
        let msg = `My name is ${this.name}, I love ${this.interest}`;
        console.log(msg);
    }

};

// -- the name and interest in an object. To access a variable in a oject use this
// console.log(person.greeting()); --

let fName
// let msg = "My name is "+ name +", I love " + interest; or
let msg = `My name is ${fName}, I love ${interest}`;

// -- it's greet wel, what if 100 users to greet use a method in OOP
// to solve this problem we have a fix/improvement factory Function and constructor function --

        //  Factory function

function createPerson(){ //creats a person
    let person = {
    
        name: "lakneswaran",
            greeting: function(){
                let msg = `My name is ${this.name}, I love ${this.interest}`;
                console.log(msg);
            }
        
        };

        return person;
}

// make dynamic
                    // parameter name
function createPerson(name){

return {
    // key name => name || In modern js key and value name are same we don't need to specify it. 
    // name: name, => name,
    name,
        greeting() {
            let msg = `My name is ${this.name}`;
            console.log(msg);
        }
    
    };

}

let lakneswaran = createPerson("Lakneshwaran");      // my name is lakneswaran
let trish = createPerson("trish");
lakneswaran.greeting();
trish.greeting();


// constructor_Function see in different file.

// Dynamic object

const personThree = {
    name : "lakneswaran"
}

// We can add from this method new key and value in the object. 
personThree.age = 24;
personThree.greeting = "Hello"
personThree.newFunction = function(){}

console.log(personThree);

// The object you have created is dynamic, which means you can access, create or delete. 

// How to delete in an object?

delete personThree.greeting;

console.log(personThree);

// The object is const How is that possible to add or delete? 
// the variable you can't directly approach, but you have access the values of the variable personThree.



// Javascript Constructor Property

// let x = {}; // -> when we execute this code is littery same as below.
// let x = new Object(){} -> object literals 

// string literals 

// let name = "Lakneswaran" -> new String("Lakneswaran")
// let age = 3; -> NuberLiterals -> new Number()
// let isAlive = true; -> BooleanLiterlas -> new Boolean()

let name = new String("Lakneswaran")
let age =  new Number(3)
let isAlive = new Boolean(true)

console.log(name, age, isAlive);  

// Function are Objects

// If we are using function in an object that's methods.

function Person(name) {
    this.name = name;
    this.greeting = function () {
        console.log(`My name is ${this.name}`);
    }
}

// Person.call({}, "Lakneswaran") -> you can replace that with new Person("").
// Js convert the new Person to Person.call and execute this behind the scene.
// const person = Person.call({}, "Lakneswaran")

const person = new Person("Lakneswaran");

// person.apply({}, ["Lakneswaran", "25"]) -> the length in array

// primitive value types vs reference types 
// variable pointing to value, objects pointing to references is not the value
// primitive just copt the value of other variable while mapping

// Enumerating Properties of an Object

const user = {
    name: "Lakneswaran",
    getFullName(){
        console.log(`My name is ${this.name}` );
    }
}

for (let key in user){
    console.log(key, user[key]);
}

for (let  key of Object.keys(user))
    console.log(key);

for (let entry of Object.entries(user)){    // if you need key and value use entries
    console.log(entry);
}

// I want to search a properties in a object.

if('name' in user){
    console.log("yes");         // yes -- age in user then it's give nothing.
}

// Cloning an JS Object

const user = {
    name: "Lakneswaran",
    getFullName(){
        console.log(`My name is ${this.name}` );
    }
}

// three ways to clone

let another = {};

for(let key in user){
   another[key] = user[key];
}

// second way
                         //  (a , b)    a copying b 
let another = Object.assign({}, user);  // Object is a construct function. 
console.log(another);

// Spread Operator ...
// copying a object and using somewhere then using spread operator

let another = { ...user } // another object copying user object.

// Garbage collection









