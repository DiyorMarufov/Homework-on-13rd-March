import {filter,sortArr,changeCase,changeToAscii} from "./src/index.mjs"
import process from "node:process"

function Main(arg1,arg2){
    
   try {
     switch (arg1){
        case "filter":
            return filter(arg2)
 
        case "sort":
            return sortArr(arg2)
             
        case "ascii":
            return changeToAscii(arg2)
             
        case "uppercase":
            return changeCase(arg1,arg2)
         
        case "lowercase":
            return changeCase(arg1,arg2)
 
        default:
            throw new Error("Arg1 does not match")
     }
   } catch (error) {
      console.error(error);
   }
    
}

let arg1 = process.argv[2]
let arg2 = process.argv[3]
let res = Main(arg1,arg2)
console.log(res);
