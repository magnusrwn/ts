// This allows for creation of lists (tupples), but does not check for things in certain order/ location.
const user: (string | number | boolean)[] = []

// a person may want to check for types at certain locations when doing things like api calls
let user1: [string, number, boolean]
user1 = ["x", 1, true]


// a good use for this oculd be rgb.
let rgb: [number, number, number]
// rgb = [1, 2, 3] --  This works
// rgb = ["1", 2, 3] -- This does not



export{}