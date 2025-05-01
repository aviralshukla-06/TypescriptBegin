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

// difference between types and interface:
// 1 -> we can implement class and object using interface but not using types
// 2 -> We can give more than two primitive to single variable using type **(unions and intersections)** but not in interface
// e.g : type user = string | number
// interface user : string

// difference between interface and abstract class:
// they serve same but in interface you can not define inbuilt funcyion but in abstract class yo can
// e.g:
// interface user {
//     name:string,
//     age : number
// }

// abstract class user={
//     name : string,
//     age:number,

//     greet()=> {
//         console.log("Hey");
//     }
// }