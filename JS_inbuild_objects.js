// Math object

Math.PI    // PI is properties it has values in blue color
Math.atan // atan is a method a function.

// ctrl + space for description.

console.log(Math.abs(-3)); // 3

// ceil -> round to 1

Math.random() // 1 max
// 1 to 100
Math.random() * (100 - 1) +1;
// round
Math.round(1.2) // 1

let marks = [45,75,5,55];

let result = Math.max(...marks);        // copies the value of the array.
console.log("maximum mark: " + result);

// String Object

// Primitive Sting values 
// "Lakneswaran"; 'Lakneswaran'; `Lakneswaran`;

// let firstName = "Lakneswaran" => const firstName = new String("Lakneswaran");

// ctrl +l in console clear

let firstName = "Lakneswaran"
let lastname = "Kri"
firstName.length // 12
firstName.charAt(2) // k

let para = firstName.concat(' ', lastname);    // lakneswaran kri

includes // search in the value
index // which index of

// regex -> expression. to pull data

firstName.slice(1)
para.split(' ', 1)
para.substring(13)

firstName.toLowerCase();

let message = "This is some text "
message.trim(); // "this is some text"

// Escape notation

let hello_message = "This is my fifth\" message, please sub"

// new line \n 
// tab \t 

// Template literals

const message = `Thank "you" 'for' reading`;


// Data  Object

const now = new Date();
console.log(now.getDay);

let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
console.log(month, date, year);
 // to set date

 const newDate = new Date()
 newDate.setFullYear("1993")