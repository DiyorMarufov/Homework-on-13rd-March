export function sortArr(arr){
  try {
    let parse = JSON.parse(arr)

     if(parse.length === 1){
        throw new Error("Error: Not enough length")
     }else{
        return parse.sort((a,b) => a - b)
     }
  } catch (error) {
    console.error(error); 
  }
}


