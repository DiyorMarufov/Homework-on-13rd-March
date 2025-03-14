export function filter(arg){
    
    try {
        if(arg.length === 0){
            throw new Error("Length of array is not enought to execute.")
        }else{
    
            let parseArr = JSON.parse(arg)
            return parseArr.filter(element => element > 4) 
        }
    } catch (error) {
        
    }
}

