
export function arrayToObj(arg1){
    
    try {

        let arr = JSON.parse(arg1)

        if(!Array.isArray(arr) || arr.some(item => !Array.isArray(item) || item.length !== 2)){
            throw new Error("Invalid input")
        }
        return JSON.stringify(Object.fromEntries(arr),null,2)
    
    } catch (error) {
        console.error(error);
    }
}



 