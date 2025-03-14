export function strToBoolean(arg1){
               
    if(typeof arg1 === Boolean){
        return true
    }else if(arg1 === "true"){
        return true
    }else if(arg1 !== "0"){
        return true
    }else{
        return false
        }
         
        
          
        
}
