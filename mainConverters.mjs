import {arr,obj,boolean} from "./converters/index.mjs"
import process from "process"

try {
    if(process.argv[2] === "Object"){
        console.log(arr);
    }else if(process.argv[2] === "Array"){
        console.log(obj);
    }else if(process.argv[2] === "String"){
        console.log(boolean);
    }else{
        throw new Error("Something went wrong")
    }
} catch (error) {
    console.error(error);
}



