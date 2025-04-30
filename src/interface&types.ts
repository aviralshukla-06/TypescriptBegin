interface Address {
    street: string,
    landmark: string,
    country: string,
    pincode: number
}

interface User {
    name: string,
    age: number,
    address?: Address  // to make any param optional add ? in front of it
}

interface Office {
    address: Address
}

let users: User = {
    name: "Avi",
    age: 22,
    // address: {
    //     street: "Mharal",
    //     landmark: "Priti",
    //     country: "Ind",
    //     pincode: 421301
    // }
}

console.log(users.address);


// this is how we can use interface in Typescript classes 
// this is same as we do in java
interface Person {
    name: string,
    age: number
    isLegal(): boolean
}

class Manager implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name,
            this.age = age
    }

    isLegal(): boolean {
        return this.age > 18
    }
}

let Avi = new Manager("Aviral", 22);
console.log(Avi.name, Avi.age, Avi.isLegal());


// Note: We can extra things  in class but not less than defined one 