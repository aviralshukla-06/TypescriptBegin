let a: number = 6

console.log(a);


function greetings(user: string) {
    console.log(`Hello ${user}`);
}

greetings("Aviral")



// two functions 
function logger() {
    console.log("Hey");
}

function delaying(fn: () => void) {
    setTimeout(fn, 1000)
}

delaying(logger)



// interfaces 
// used for more complex data types like objects 
// folllowing is the example 

interface userType {
    userName: string,
    lastName: string,
    age: number
}

let user: userType = {
    userName: "Aviral",
    lastName: "Shukla",
    age: 22

}


function greetUser(user: userType) {
    console.log(`Hello ${user.userName}`);
}

greetUser(user)


// types : these are similar to interfaces but are little advanced as the provide with combined datatypes 
// e.g : 

type detail = {
    firstName: string,
    age: number
}

type student = {
    class: string,
    year: number
}

interface Aviral {
    firstName: "Aviral",
    age: 22,
    class: "BE",
    year: 4
}



type S = string | number

let x: S = 5;
let y: S = "A";

