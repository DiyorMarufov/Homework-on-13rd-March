export function changeToAscii(arg){
   
    try {

        if(typeof arg === "string"){
            let toAscii = []

            for(let i of arg){
                toAscii.push(i.charCodeAt())
            }
            return toAscii
        }else{
            throw new Error("It is not a string") 
        }
    } catch (error) {
        console.error(error)   
    }
}

