# Javascript

- it's a Dynamic Typing.  => let firstName ; 
- StaticCalling typing. => string firstName; String has declared as string, datatype.

- typeof firstName => output : string

- What is object? set of information are bundled. 

- Operators: Arithmetic Operators, Comparison Operators, Assignment operators, Logical operators, Bitwise OPe.

- Arithmetic : +,-,*,/,%,**

- Assignment  operators : x = x + 1; x += 2

-  comparison Operators : when we using this, js engine response boolean true or false.

- Relational operator: <,<=,>,>=

- Equality operators : ===, !==

- string comparison : 'Alen' > 'Anbu'

- Comparsion of different type: '1' < 5 // true => its check inside teh string a number.

- Logical operators AND (&&) OR (||) NOT (!)

- Logical Operator with Non Boolean values: Falsy, undefined, null, 0, false '', "", NaN -> not a number
- Truthy -> Anything that is not falsy is -> Truthy

-   Bitwise OR |, AND &

- in for in loop it takes the index, in for of loop takes teh value. 

- How to fix infinite loop ? close the tab in browser, in VS code live server end, 

## JS OOP

- In a Object should have key and value line: 154
- factory function : to write a efficient way.
- Constructor Function : 

*                     -  New keyword while we typing it's creating an empty object.
*                     -  With inside this all variables names or keys automatically mapped inside {new object}
*                     -  values will return by default with the person  name we can call it. 

-  Garbage collection -> In js automatically memory deleting

- Escape notation 

- An element inside an array can be of any typ, and different elements of the same array can be of different types.


# NPM & package.json & dependencies

## What is NPM?

- Node package manager
- It installs with Node.js
- NPM is a repo that contains js libraries/dependencies
- We can use command line manage packages
- Also it will be easier to ship your app to other computer
- using package.json. -> I'm creating a application. It's required a lot of dependencies.
- Men doesn't need to give all the dependencies to your colleague, just mention all the 
- dependencies in the package.json. He can install all of it.
- All libraries available in npm website and npm install from that.

## Package.json 

- To create package.json file, in command line : npm init. 
- to run scripts in package.json -> npm run nameOfTheKey
- dependencies: npm install exJquery. -> node_modules/jquery -> library 
- node_modules have all libaries and dependencies for our application.
- npm i(nstall) lodash -> utility libraries -> we can reuse the function in it.
- We have created a app index.js, how to transfer the folder?
- We just transfer/give index.js, not neccesarry to give node_modules.
- Your collegue get error when he is trying to run the app.
- npm i -> to install all dependencies. npm read teh package.json file and install it.
- then the app runs proper on his/her computer.

## Global vs Local installation

- we have installed teh dependencies only for this folder - local
-  npm i nodemon - g -> global -> its watch the file and run when changes happen in the file.

## What are those symbols

- ^  It install the lastest version.  
- ~  patch version install will be latest version
- without both symbol then it will instal exact version of what it's written in json file.
- *  latest version "*"

- 4 is major version, 17 is minor and 21 is patch in json


## Back to array

- Sort vs find vs filter vs map vs reduce
- '34'.charCodeAt() -> to find Ascii  -> sort
- find -> show only first result
- filter -> dhow all result
- map -> evaluate the condition with true or false.
- map -> can also concat return "#" + value; -> ["34"] - ["#34"]
- reduce -> prev. value temporally saved in acc and add with current value.

# Function

- In JS, Hoisting is the default behavior of moving all the declaration at the top of the scope 
- before code execution.

















