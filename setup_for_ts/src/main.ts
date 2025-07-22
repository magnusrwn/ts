// In terminal:
// tsc --init
// init npm ('npm init -y)


// all code written here, and ot goes to the js file in the './dist/main.js/ (or whatever your file name)
// This is done by filling in 'outDir' in ts config
// the path to the output dir is from the ts config file as fake-root, if that makes sense

console.log('x')
//('tsc -w' whips this into the js file)


// Calsses
// you must define the inps to the function before youdefine them as inputs... if that makes sense...
class User {
    email: string
    name: string
    friends: string[] = []
    constructor(email:string, name:string){
        this.email = email,
        this.name = name
    }
}

const mag = new User("x@wmail.com", "mag")
mag.friends


// you can make things public or private. Private means you can not access it ever again throguh dot notation, but it is saved for use within the class only. Ex:
class UserPriv {
    name: string
    username: number
    private readonly dbId: number = 12 // this is un seeable, and unedutable.
    constructor (name:string, username:number){{
        this.name = name,
        this.username = username
    }}
    // you can make 'getters', these are mini functions that return vals that are in the class
    get userData(): User{
        return {email:"email", name:"mag", friends:["x"] }
    }
    private countNum: number = 1 
    set setCountForSomething(countNum: number) {
        if (countNum > 1) {
            throw new Error("err")
        } else {
            this.countNum = countNum
        }
    }
    // following is a method thats good to use in this class only
    protected deleteToken():void{
        console.log(`token deleted`)
    }
}
const magn = new UserPriv("name", 123)



// getters and setters are essentially jsut things to get and set values in classes with conditionals.


// to inherit classes you can use 'extends' as well, as shown:
class AnotherUser extends UserPriv {
    isMasterUser: boolean = true
    //deleteToken:() // this cant be used when set to private in the parent, and it also has to be called in a function, as currently, this is just re-defining it
}