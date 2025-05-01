// here we will learn an API called "Pick" in ts
// it is used to create a shallow copy of some data from already created object 
// e.g : 

interface A {
    name: string,
    email: string,
    age: number,
    password: string
}

// now i want a db call to update name , password and age 
// so either create a new interface against DRY concept 
// or use Pick . 
// here is implementation od it:

type updatedA = Pick<A, "name" | "age" | "password">

const updateDb = (updatedA: updatedA) => {
    console.log(updatedA.name);
}