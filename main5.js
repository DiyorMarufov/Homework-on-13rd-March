import os from "os"
import process from "process"

function freeSpace(word){
   
    try {
        if(word === "check-memory"){
           return `Free Memory on RAM ${Math.round(os.freemem() / (1024 ** 3))}GB`
        }else{
            throw new Error("Invalid word, Please input check-memory")
        }
    } catch (error) {
        console.error(error);
        
    }
   
}

let word = process.argv[2]
let res = freeSpace(word)
console.log(res);



