import process from "process"

function arrayToObj(arg,arg1){
    
    try {
        let arr = []

        if(arg === "Array"){
           for(let i in arg1){
              arr.push(arg1[i])      
           }

           let key = arr.slice(2,7).join("")
           let value = arr.slice(8,arr.length - 2).join("")
           
           let obj = {key,value}
           
           let formatted = {[obj.key.slice(0,-1)]:obj.value}
           return JSON.stringify(formatted)
        }
        return arr
    } catch (error) {
        console.error(error);
        
    }
}

let arg = process.argv[2]
let arg1 = process.argv[3]
const obj = arrayToObj(arg,arg1)
export {obj}
 