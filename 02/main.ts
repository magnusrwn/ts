// number
let num: number = 4
// or, type inference...
let numb = 4
// Both are ok. Ts knows how to auto-define most things... this is called 'type inference'.

// More examples of defining...
let isLoggedIn: boolean = false


// Defining things as any...
let x
function y(){
    return "hello"
}
x = y()
// This is BAD practice, as it goes against the reason for typescript.
// This can be removed by the compiler edit to 'noImplicitAny'