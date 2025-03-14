function reduce(nums,fn,init){
    
    if(nums.length === 0){
       return init
    }

    let res = init

    for(let i = 0; i < nums.length;i++){
        res = fn(res,nums[i])
    }
    return res
}

let nums = [1,2,3,4]
function sum(accum,curr){
    return accum + (curr * curr) 
}
let init = 100
let res = reduce(nums,sum,init)
console.log(res);
