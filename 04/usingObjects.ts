// defining an object...
const User = {
    name: "Magnus",
    age: 18,
    email: "myEmail@m.com",
    isActive: true
}
// Use of these are in functions... (of course)
function createUser( {name: string, age: number, isPaid: boolean} ){}
// createUser()         <- needs an object to run (is red lined like this)
// This is good...
createUser( {name: "magnus", age: 18, isPaid: true} )

// the '{}' means that the function must return an object
function createCourse():{}{
    return {}
}

export{}