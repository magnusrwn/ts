// 
interface UserX {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    paidUser: boolean,
    startTrial(): string
    getCoupon(couponName: string, cuponValue: number): number
}

// How is interface different from 'type'?
// You can 're-open' them. What is this?...
// Re-opening the interface esentially means that you can add more declerations in the interface afetr it hsa been made... as such...

interface UserX {
    githubLinked: boolean
}
// Allows for the return of function within definition of things
const magnus: UserX = {dbId:123, email: "myemail@email.com", userId: 123, paidUser:false, startTrial: () =>{return "trial started"}, getCoupon: (couponName:"xCoup", couponValue:10) =>{return couponValue},
    githubLinked:false }



// Interface allows inheretance. As seen ehre, and in pydantic models.
interface AdminX extends UserX{
    adminKey: number
}
let magnusAdmin: AdminX = {dbId:123, email:"x", userId:123, paidUser:false, startTrial:() =>{return "tri started"}, getCoupon: (couponName:"xCoup", couponValue:10) =>{return couponValue}, githubLinked:true, adminKey:123456789}


