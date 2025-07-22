// Type alias-es examples

// This is essentually modeling inputs. It allows you to create a structured req that is very re-usable.
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user:User):User {
    return {name:"", email:"", isActive:true}
}

createUser( {name:"", email:"", isActive:true})

export{}