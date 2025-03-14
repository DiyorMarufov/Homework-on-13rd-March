export function objectToArray(arg1){
    
    try {
        
        let obj = JSON.parse(arg1)
        if(typeof obj !== "object" || Array.isArray(obj) || obj === null){
            throw new Error("it is not an Object")
        }
        return Object.entries(obj)
    
    } catch (error) {
        console.error(error);   
    }
}



