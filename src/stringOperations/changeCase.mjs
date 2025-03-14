export function changeCase(arg,word){
    
   try {
     if(typeof word !== "string"){
        throw new Error("Second argument does not match")
     }
        
     if(arg === "lowercase"){
        return word.toLowerCase() 
    }else if(arg === "uppercase"){
        return word.toUpperCase()
    }else{
        throw new Error("First argument should be lowercase or uppercase")
    }

   } catch (error) {
       console.error(error);   
   }

    
}



