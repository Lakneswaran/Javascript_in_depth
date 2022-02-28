// Factory Funtion

function createPerson(name){        // camelCase: myFirstName -> variableName, function

    return {

        name,
            greeting() {
                let msg = `My name is ${this.name}`;
                console.log(msg);
            }
         };
    
    }

// Constructor Function -> your are creating a thing

function Person(name){      // Pascal -> MyFirstName -> Classes / Constructor function

    this.name = name;
    this.greeting = function() {
        let msg = `My name is ${this.name}`;
        console.log(msg);
    }

}

let person = new Person("Lakneswaran"); // When we using 'new' it's creat a new empty object for us.
// 1) new => let x = {} 2) and 'this' reference to '{}' and 3) 'return this'.
person.greeting();

  