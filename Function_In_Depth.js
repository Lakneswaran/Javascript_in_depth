// // Function declaration vs function expression
// // DRY -> Don't repeat yourself
// // function - reuse


// // add two numbers
// let no1 = 45;
// let no2 = 448556;
// // Function declaration
// function addNo(){
//     let result = no1 + no2;
//     console.log(result);
// }

// // Function Expression (Named function expression)

// const addNo1 = function addNo1() {
//     let result1 = no1 + no2;
//     console.log(result1);
// };

// addNo();

// // Anonymous Function Expression 

// const addNo2 = function () {
//     let result1 = no1 + no2;
//     console.log(result1);
// };

// const addNo3 = new Function("console.log(no1 + no2)");

// addNo();
// addNo1();
// addNo2();
// addNo3();

// // Hoisting

// // function declaration can call before or after. -> get result
// //  when code runs FD going n top of the code.
// // function expression only by called after function created. -> get result
// // it's stays at same place.

// // IIFE - JS Self Invoking Function - after define it will execute it.
// // For automatically execute the function : Immediately Invoked Function expression

// let no3 = 5555;
// let no4 = 6544;

// // IIFE

// ( (num1, num2) => {
//     let result = num1 + num2;
//     console.log(result);
// })(no3, no4);          // we calling here -> good practice not declare global variable pass it.

// // Function Arguments

//  function sumExpense(){            //(tiffen, lunch, petrol) recive - parameters. - 1st option
//     let total = 0;

//     for (let value of arguments) total += value;            // second option
//     return total;
//  } 

//  let rst = sumExpense(65, 250, 99, 84, 95, 65);       // In function passing a value - called Arguments 
//  console.log(`Your Total Expence is: €${rst}`);

// // Rest Operator - ES6

// function sum(...expenses) {           // not spread operators that we are using in array.
//    return expenses.reduce((a, b) => {
//         return a + b;
//     });
//     console.log(expenses);
// }

// let resultOne = sum(5, 25, 5 ,66 ,55 ,48 ,55);
// console.log(`${resultOne}`);

// // Default parameters
// // default parameters should be last, for best practice.
// function calculateTax(cost,title, tax = 18){      // default 18 else other value 
//     taxAmount = cost * (tax / 100);

//     console.log(`Total cost of ${title} is: €${cost}
// Tax(${tax}%) is: €${taxAmount}
// Total Amount is: €${cost + taxAmount}`);
    
// }

// calculateTax(45, "Ship");       // no tax value so 18 is tax value

// // JS getter and Setter

// let student = {
//     firstName : "Lakneswaran",              // Dataproperties
//     lastName: "kris",
//     fullName(){
//         return student.firstName + " " + student.lastName;
//     }
// };

// console.log(student.fullName()); 

// // getters => used to get data
// // setters => used to set data

// let studentOne = {
//     firstName : "Lakneswaran",              // Data properties
//     lastName: "kris",
//     get fullName(){                                             // Accessor properties a method
//         return studentOne.firstName + " " + studentOne.lastName;
//     },
//     set fullName(value){
//         let values= value.split(" ");
//         console.log(values);
//         this.firstName = values[0];
//         this.lastName = values[1] ?? "";           //nullish operator
//     }
// };

// console.log(studentOne.fullName); 
// studentOne.fullName = "Trisha Kris"
// console.log(studentOne.fullName); 

// // Error Handling 
// // Something is working properly suddenly due some reason the app not working you get an error 
// // no internet connection, at the moment you need to handel with error handeling.
// // Try, Throw, catch
//  let studentTwo = {
//     firstName : "Lakneswaran",              
//     lastName: "kris",
//     get fullName(){                                             
//         return studentTwo.firstName + " " + studentTwo.lastName;
//     },
//     set fullName(value){
//         if(typeof value != "string"){
//             const err = new Error("it is not a string");
//             // console.log(err);
//             // return;                 // not to execute after an error code.
//             throw err;
//         }
//         if(value.length <= 3) throw new Error("Name Invalid");
//         let values= value.split(" ");
//         console.log(values);
//         this.firstName = values[0];
//         this.lastName = values[1] ?? "";           
//     }
// };
// try{
//     // Defensive Programming
//     studentTwo.fullName = "krish";          // 45, a error
// } catch(ex){
//     console.log(ex);                    // alert(ex) sg toastm msg
// }


// console.log(studentTwo.fullName);

// // Global scope vs local scope {inside is local scope}
// // Good practice  => limit yourself global variable declaration.
// (() => {
//     let msg =  "Hello world";
//     console.log(msg);

//     if(true){
//         let name = "lak"
//         console.log(name);
//     }
// })(); //IIFI

// Var => Function scoped
// let = > block-scoped
// var -> merging with window. var food = "meat"  In window => window.food => meat

// // this keyword

// // method => object
// // function => global (window, global)

// const dev = {
//     title: "FullStack",
//     languages: ["tamil", "malayalam", "telugu" ],
//     learning(){
//         console.log(this);
//     },
//     showBooks(){
//         this.languages.forEach(function (lang){
//             console.log(this.book,lang);
//         }, {book: "JS"});
//     }
// };

// dev.share = () => {
//     console.log(this);              // refer to the current object.
// }

// dev.learning();
// dev.showBooks();

// This best practice

const devOne = {
    title: "FullStack",
    book_title: "JS",
    languages: ["tamil", "malayalam", "telugu" ],
    learning(){
        console.log(this);
    },
    showBooks(){
        let that = this;
        this.languages.forEach(function (lang){
            console.log(that.book_title,lang);
        });
    }
};

devOne.showBooks();

// second option

function readBook(){
    console.log(this);
}
// call and apply execute while calling
readBook.call({bookTitle: "JS" });
readBook.apply({bookTitle: "JS Apply" });           
let newL = readBook.bind({bookTitle: "JS Bind"});
console.log(newL());

const devTwo = {
    title: "FullStack",
    book_title: "JS",
    languages: ["tamil", "malayalam", "telugu" ],
    learning(){
        console.log(this);
    },
    showBooks(){

        this.languages.forEach(function (lang){         // arrow function 
            console.log(this.book_title,lang);
        }.bind(this));                        // not bind needs          
    }
};

devTwo.showBooks();
 




