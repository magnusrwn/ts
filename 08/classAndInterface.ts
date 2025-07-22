// interfaces should be thought of as protocalls. Thay are things you can have in classes that limit/ type things to certain values/ atributes
// i.e they follow a predefined protocall.
interface Photo {
    cameraMode: string
    cameraFilter: string
    burst: number
}

class Camera implements Photo {
    cameraMode: string
    cameraFilter: string
    burst: number
    constructor(
        cameraMode: string,
        cameraFilter: string,
        burst: number
    ){}
}


class YouTube implements Photo {
    cameraMode: string
    cameraFilter: string
    burst: number
    story: string
    constructor(
        cameraMode: string,
        cameraFilter: string,
        burst: number,
        story: string
    ){}
}

// interafce jsut means that you must include the following items in a certain class.
// this just ads uniformity to things you delcare in classes, and makes things easier to edit