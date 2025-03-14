import process from "process"

function filter(arg,arg1 = []){
    
    if(arg === "filter"){
       return arg1.filter(element =>{
        element > 4
       })
    }
    
}

let arg = process.argv[2]
let arg1 = JSON.parse(process.argv[3] || "[]")
let res = filter(arg,arg1)
console.log(res);
