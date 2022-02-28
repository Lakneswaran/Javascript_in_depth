// OOP -> Objects and Arrays
// Adding/pushing element to Array
// Finding/Filtering an element in an Array
// Removing an element in an Array
// Splitting the array
// Combining the array & so on.

// Adding/pushing element to Array

// const cart = ["Fruits", 1, true, undefined, null] 
const itemsY = [4, 5, 6]
console.log(itemsY[1]); // 5
itemsY[3] = "Orange";       // 4,5,6,Orange what if 1000?

// three methods

//push

itemsY.push("JackFruit", "Strawberries")    //4,5,6,Orange,Jack,Straw


//unshift

itemsY.unshift("Watermelon")    // watermelon,4,5,6,Orange


//splice

itemsY.splice(2, 0, "Melon", "Banana") // watermelon,4,melon, banana, 5, 6

// Finding/Filtering an element in an Array

const itemsX = ["Apple", "Lemon", "Grapes", "Apple"]
console.log(itemsX.indexOf("lemon"));    // -1 because of case sensitivity and lemon is not there in de array.

console.log(itemsX.lastIndexOf("Apple"));    //3

 console.log(itemsX.includes("Apple"));

// Finding an element in a Javascript Reference types.

const orders = [
    { id: 1, item: "smartphones", quanties: 1},
    { id: 2, item: "maggi", quanties: 3},
    { id: 3, item: "Tomatto", quanties: 5}
    //alt + shift + down arrow. to copy paste the line. 
]
// In primitive values takes directly from the memory, reference pointing on the memory. 
// call back function.
let result = orders.find(function(order){
   return  order.item === "maggi"
})

console.log(result);

let resultOne = orders.findIndex(function(order){
  return  order.item === "Tomatto"
})

console.log(resultOne);


// parameters : (order) and {is logic}
let result1 = orders.find(function(order){
    return  order.item === "maggi"
 })

 // ES6 : Arrow Function -> Mordern JS
// to separate para and logic using =>
 let result2 = orders.find((order) => {
    return  order.item === "maggi"
 })

 console.log(result2);

// Removing element in tht array
const number3 = [1, 2, 3, 4];

// END -> .push - add and pop to delete
number3.pop()

// Start -> .unshift
number3.shift()

// Middel -> .splice
number3.splice(2, 1)        // [1,2,4]

// Emptying an JS Array

const number4 = [1, 2, 3, 4];

// Solution 1

// number4 = []; // if we using let instead const. It's creat two memory, not big deal in js. it's remove
// automatically prevs ones.

// Solution 2

number4.length = 0;

// Solution 3

number4.splice(0,number4.length);

// Solution 4

while(number4.length) number4.pop();

console.log(number4);

// for big app solution 4 should not be used. Ram usage will increase
// solution 3 is length is big
// 1 is best make the variable let then empty.

// Combining & Extracting element in JS Array in primitive value and reference

const shopping_cart = ["Maagi", "Beans", "Masala"];
const referenceType = [{ item: "Maagi"}];
const additional_cart = ["Matchbox", "Salt"];
// combine
let maagi_recipe = shopping_cart.concat(additional_cart);
referenceType[0].item = "Noodles";

console.log(maagi_recipe);

// extract - Slice

let extractedInfo = maagi_recipe.slice(1,3);
console.log(extractedInfo);

// Spread Operator

const shopping_cartOne = ["Maagi", "Beans", "Masala"];
const referenceTypeOne = [{ item: "Maagi"}];
const additional_cartOne = ["Matchbox", "Salt"];

let recipe = [...shopping_cartOne,45, {id :1}, ...additional_cartOne];
console.log(recipe);

// Iterating element

const dailyRoutine = ["wake up", "Eat","Sleep"];

//For-of

for(let routine of dailyRoutine){
    // logics
    console.log(routine);
}

//for-in
for(let routine in dailyRoutine){
    console.log(routine);
    console.log(dailyRoutine[routine]);
}

// forEach
dailyRoutine.forEach((routine, RoutineIndex) => {
    console.log(RoutineIndex, routine);
})


// Joining and splitting

const dRoutine = ["wake up", "Eat", "Sleep"];

let dailyRoutineJoined = dRoutine.join("/ ");
console.log(dailyRoutineJoined);                // wake up/ Eat/ Sleep

let fullName = "Lakneswaran Krishnan";

let userName = fullName.split(" ");
let firstName = name[0];        // depreceted => it's reserved. name -> usename
let lastName = name[1];

console.log(`${firstName} ${lastName}`);

// Sorting a js Array 
// Primitive value

const students = [3, 8, 1];

const studentsOne = [3, 8, 1]

// students.sort();         //1,3,8
// console.log(students);

students.sort((a,b) =>{
    return b - a;               //3,8,1
})

console.log(students);

studentsOne.reverse();          // 1,8,3 right to left.

// for object 

const studentObject = [
    { id : 3, name: "Aak"},
    { id : 8, name: "Lakn"},
    { id : 1, name: "Nes"}
];
studentObject.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
});
//Symbol, numbers, operators, Capital letter, lower case

console.log(studentObject);

console.log();
 
// Testing a JS Array primitives
// Allow only adults above 18

const queue_by_aga = [16, 32, 45];      

// In every all parameters will be true.
let isAllowed = queue_by_aga.every((value, index, array) => {
    return value >= 18;
});

console.log("isAllowed: " + isAllowed);

// if one of parameter is true then is true.
let isAllowedSome = queue_by_aga.some((value, index, array) => {
    return value >= 18;
});

console.log("isAllowed: " + isAllowedSome);

// testing is it Odd or Even

// const number5 = [1,2,3,4,5];

// let isEven = number5.every( (value) => {
//     return value % 2 === 0;
// })

// Testing a reference type in JS Array

const item = [ 
    {id: 1, name: "Mobiles", isDeliverable: true},
    {id: 1, name: "Accessories", isDeliverable: true},
    {id: 1, name: "T.V.", isDeliverable: true}
]
//item.some
isDeliverable = item.every( (value) => {
    return value.isDeliverable = true;
});

console.log("AllDeliverable", isDeliverable);

// Filtering a JS Array

const queue_by_age = [16, 32, 45];

let adults = queue_by_age.filter( (value) => {
    return value >= 18;
});

console.log("adults: ", adults);            // 2 not true or false like every oe some

 // JS Array find() and findIndex()

 const itemFind = [ 
    {id: 1, name: "Mobiles", cost: 6500},
    {id: 1, name: "Accessories", cost: 5000},
    {id: 1, name: "T.V.", cost: 52000}
]

// to find only the first occurrence
// to find all with the logic => filter 
let affordable = itemFind.find( (value) => {
        return value.cost < 10000
})

console.log(affordable);

// Mapping a JS Array

const numbers2 = [1,2,3,4,5];

let final = numbers2.map( (val) => {
    return val * 2;
});

console.log(final);             // 2,4,6,8,10

const people = [
    { id: 1, first_name: "Ajith", last_name: "kumar"},
    { id: 1, first_name: "Vijay", last_name: "Joshep"},
    { id: 1, first_name: "Trisha", last_name: "Krishnan"},
]

let final1 = people.map( (val) => {
    let fullNames = [val.first_name, val.last_name].join(" ")
    let obj = { id: val.id, fullNames};
    return obj;
})
// with map using in array we can transform 
console.log(final1);

// Chaining methods.

let products = [
    { id: 1, title: "Android Phone", cost: 7500 },
    { id: 2, title: "Gaming Computer", cost: 90500},
    { id: 3, title: "HeadPhone", cost: 2400 },
]

// Sort it using lowest price.
// Sort it by title ascending
// Filter products less than 8000
// Map it like this: // Android phone - €7500

let lowestPrice = products.sort( (a,b) => {
    if(a.cost && a.title < b.cost && b.title ) return -1;
    if(a.cost && a.title > b.cost && b.title ) return +1;
    return 0;                       // working
    // a.cost - b.cost; // ascending
});

console.log(lowestPrice);

let filterd = lowestPrice.filter( (val) => {
    return val.cost <= 8000;
})

let finalOutput = filterd.map( (val) => {
    return val.title + " - €" + val.cost;
})

console.log(finalOutput);

// chaining method
// products.sort( (a,b) => {
//     if(a.cost && a.title < b.cost && b.title ) return -1;
//     if(a.cost && a.title > b.cost && b.title ) return +1;
//     return 0;                       // working
//     // a.cost - b.cost; // ascending
// }).filter( (val) => {
//     return val.cost <= 8000;
// }).map( (val) => {
//     return val.title + " - €" + val.cost;
// })


// reduce method JS Array.

const donation = [45, 78, 95, 65, 4851];

let totalDonation = donation.reduce( (previousValue, currentValue) => {
      return previousValue + currentValue;  
});

console.log("TotalDonation : ", totalDonation);


// reduce method for Object

const shoppingCart = [
    {id:1, item: "Bananan", cost: 45},
    {id:2, item: "Apple", cost: 20},
    {id:3, item: "Orange", cost: 20},
];

// let totalCost = shoppingCart.reduce( (accumulator, currentValue) => {
//     return accumulator + currentValue.cost;
// }, 0);
const addCost = (accumulator, currentValue) => {
        return accumulator + currentValue.cost;
}
let totalCost = shoppingCart.reduce(addCost, 0);


console.log(totalCost);


// Sort vs find vs filter vs map vs reduce
// '34'.charCodeAt() -> to find Ascii  -> sort
// find -> show only first result
// filter -> dhow all result
// map -> evaluate the condition with true or false.
// map -> can also concat return "#" + value; -> ["34"] - ["#34"]
// reduce -> prev. value temporally saved in acc and add with current value.


