type User = {
    readonly _id: string; // Makes this unchangable... forever. (use could be for db... or something similar)
    name: string;
    email: string;
    isActive: boolean;
    creditCardInfo?: number; // This defines it as OPTIONAL!!
}

let myUser: User = {
    _id: "1234",
    name: "magnus",
    email:"hello@email.com",
    isActive: false,
}

myUser.email = "new_email@email.com"
myUser._id = "newid" // error as is defined as reaad only......


// You can also combine things to create larger models/ types based on others. As such...
type cardNumber = {
    num: number
}
type  cardCvv = {
    cvvNum: number
}
type cardDetails = cardCvv & cardNumber & {
    cvv: number
}

