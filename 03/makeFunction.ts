// PART ONE ON TS FUNCTIONS

function addTwo(num){
    return num + 2
}
// This shows 'any' as the type. This is bad. This means that the functionc is allowed to accept any type without any error
addTwo("5")


// To set types for functions:
function addThree(num:number){
    return num + 3
}
addThree(4)
// Now, this shows that it NEEDS to take a number as input

// Example for gettign methods
// function getUpper(val){
//     val.toUpperCase()
// }
// getUpper(4)
// This is BAD... same issue as before...
// Fix..
function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("hello")



// Ex:
function signUp(name, email, password){}
signUp(1, 2, 3)
// This is BAD
//You must define each.
// Like...
function sign_up(name:string, email:string, password:number, isPaid:boolean){}
sign_up("magnus", "my@email", 1234, true)




// Adding default values... Ex:
let logginUser = (name:string, email:string, isPaid:boolean = false) => {}
// JUST LIKE PYDANTIC MODELS...
// The default here is a bool of value false









// PART TWO ON TS FUNCTIONS
// defining functions return types
function getValue(myVal: number){
    // This returns two types, so I dont need to learn this yet, but it will be fine
    if (myVal > 5){
        return true
    } else {
        return "200 OK"
    }
}

// defining output (in this ex it is string)
const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", "iron man",  "spiderman"]
heroes.map((itter): string => { // 'itter' shows that it needs to be a string... if i change the value of heroes to something like [1, 2, 3], it will say 'number'
    // this also says (above) that the output must be a string
    return itter.toUpperCase()
})

// returning 'void' as the function returns no value... this is the hardcoded axample
function consoleError(errorMessage: string): void {
    console.log(errorMessage)
}

// 'never' is similar to 'void' but, apart from returning nothing, it raises, or 'throws' an error.
function handleError(msg: string): never{
    throw new Error(msg);
}

