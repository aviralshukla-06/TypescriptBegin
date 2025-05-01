interface User1 {
    firstName: string,
    lastName: string,
    age: number

}

let users1: User1[] = [
    {
        firstName: "Aviral",
        lastName: "Shukla",
        age: 22
    }, {
        firstName: "Diksha",
        lastName: "Waghmare",
        age: 21
    }, {
        firstName: "Utkarsh",
        lastName: "Shukla",
        age: 17
    }

]

function isLegal(users1: User1) {
    if (users1.age > 18) {
        console.log(users1.firstName);
    }
}

users1.forEach(isLegal);
