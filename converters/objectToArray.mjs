import process from "process"
function objectToArray(arg,arg1){
    
    try {
        let arr = []
        if(arg === "Object"){
           
            
        }else{
            throw new Error("It is not an Object")
        }
    } catch (error) {
        console.error(error);   
    }
}

let arg = process.argv[2]
let arg1 = process.argv[3]
const arr = objectToArray(arg,arg1)
export {arr}
