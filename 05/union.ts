// union allows for multiple types to be allowed for different variables (thorugh notation as seen)
let score: number | string = 55
score = "hello"


// you can also do essentialy the ame thing with types. This can be usefull for Users and Admins/ superusers etc... So, this is very usefull... Ex:
type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    adminId: string;
}
// this can be either-or
let user__: User | Admin = {
    name: "x",
    id: 123,
}
// but it can also be redefined later, as such...
user__ = {
    username: "y",
    adminId: "fefr"
}


// Anotehr example
function getDbId(id: number | string) {
    console.log(id)
    // For manipulating this, i must use mathods that apply to both number and strings, as it could be passed in as either.
    // you CAN preform things AFTER you have used conditionals to verify its type (if x === string...)
}

// array-with-union
const data: number[] = []
//data.push(1, 2, 3, 4, 5, 6, "str")

const data1: string[] = []
//data1.push("1", "2", 3)

// This allows them all.
const data2: (string | number | boolean)[] = []


// Absolute assignment: (This means that this var can only be one of three things)
let seatAlignment: 'isle' | "middle" | "window"


