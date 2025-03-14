import process from "process"

function strToBoolean(arg,arg1){
   
    try {
        if(arg === "String" && (arg1 === "true" || arg1 === "false")){
            if(arg1 === "true"){
               return 1
            }else if (arg1 === "false"){
               return 0
            }else{
                throw new Error("arg or ar1 does not match to the statement")
            }
        }else{
            throw new Error("arg or ar1 does not match to the statement")
        }
    } catch (error) {
        console.error(error);
    }
}

let arg = process.argv[2]
let arg1 = process.argv[3]
const boolean = strToBoolean(arg,arg1)
export {boolean}
