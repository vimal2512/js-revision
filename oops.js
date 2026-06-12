// OOPS
// Javascript is not a traditional class-based OOP language like java. It is prototype based 
// but modern javascript added class syntax which behaves similarly

// encapsulation - hide data
// abstraction - hide implementation
// inheritance - reuse code
// polymorphism - same method, different behaviour

// ENCAPSULATION
// code (method) and data binded together in a single unit while restricting direct access to internal data
// meaning:- Hide internal data control access through methods

// Bad approach

const user = {
    balance: 1000
}

user.balance = -5000

// Dangerorus , anyone can directly modify data

// Encapsulation approach

function BankAccount() {
    let balance = 1000

    return {
        deposit(amount) {
            balance += amount
        },

        getBalance() {
            return balance
        }
    }
}


const account = BankAccount()
account.deposit(500)

console.log(account.getBalance());

// Output 1500

console.log(account.balance);

// output: undefined because balance is private
// this is encapsulation using closure



// Inheritance
// Child class acquires properties and methods from parent class
// code reusability and maintainability

class Animal {
    eat() {
        console.log("Eating")
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking")
    }
}

const dog = new Dog()

dog.eat();
dog.bark();

// output Eating, Barking

// POLYMPORPHISM
// Polymorphism means same method behaves differently depending on object


// Method overriding
// child class overrides parent method

class Animals {
    sound() {
        console.log("Animal sound")
    }
}

class Dogs extends Animals {
    sound() {
        console.log("Bark")
    }
}

class Cats extends Animals {
    sound() {
        console.log("Meow")
    }
}

const dogs = new Dogs()
const cats = new Cats()

dogs.sound()
cats.sound()



// Abstraction 
// Abstraction means hiding complex implementation details and showing only essential features


class CoffeeMachine {
    startMachine() {
        this.#boilWater()
        console.log("Coffee Ready")
    }

    #boilWater() {
        console.log("Boiling water")
    }
}

const coffee = new CoffeeMachine();
coffee.startMachine();

// Output Boiling water, Coffee Ready

// coffee.#boilWater()
// Error:- SyntaxError: Private field '#boilWater' must be declared in an enclosing class


// Abstraction vs Encapsulation

// Encapsulation focus protecting data
// Ex:- private balance variable
// restricted direct access

// Abstraction focus hiding complexity
// Ex:- coffee machine internals hidden
// show only necessary functionality

// Encapsulation(protect data)                     Abstraction (hide complexity)
// hides data                                      hides complexity
// security/control                                simplicity
// focus on access restriction                     focus on implementation hiding

