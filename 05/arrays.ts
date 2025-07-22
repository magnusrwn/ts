const superHeroes: string [] = [] // this defines an array.
superHeroes.push("hello")
// doing this...
const _superHeroes:[] = []
// makes an EMPTY array. Nothing can be pushed to it, as it is typed to always be an expty array

// numbers:
const herosPower: number [] = []
herosPower.push(5)

// The above is fine. However, so is the below...
const newArray: Array<number> = []


// You can also say that lists must contain certain objects... for example...
type Users = {
    nume: string;
    sr_name: string;
}

const userList: Users[] = []
// then you must push things that comply with the Users obj...




// you can nest list types in lists (usefull for ml)... ex:
const mlList: number[][] = []
// the above needs a list of numbers in a list...
