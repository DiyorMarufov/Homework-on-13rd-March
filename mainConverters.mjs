import {arrayToObj,objectToArray,strToBoolean} from "./converters/index.mjs"
import process from "process"

try {

    const arg1 = process.argv[2]
    const arg2 = process.argv[3]
    
    if(!arg1 || !arg2){
        throw new Error(`ERROR: Undefined ${arg1} and ${arg2}`)
    }

    let res;

    if(arg1 === "Object"){
        res = objectToArray(arg2)
    }else if(arg1 === "Array"){
        res = arrayToObj(arg2)
    }else if(arg1 === "String"){
        res = strToBoolean(arg2)
    }else{
        throw new Error("Invalid type")
    }

    console.log(res);
    
} catch (error) {
    console.error(error);
}



