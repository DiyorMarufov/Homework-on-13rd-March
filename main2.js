class CaesarCipher{
    constructor(shift){
       this.shift = shift
    }
    
    encode(words = ""){

        let unicode = []
        
        words = words.toUpperCase()
        for(let i of words){
           
            let ascii = i.charCodeAt()

            if(ascii >= 65 && ascii <= 90){
               ascii = ((ascii - 65 + this.shift) % 26) + 65
            }
            unicode.push(ascii)
        }
        
        let encoded = ""
        for(let i of unicode){
           encoded += String.fromCharCode(i).toUpperCase()
        }
        return encoded
    }

    decode(words = ""){
        
        let unicode = []
        
        words = words.toUpperCase()
        for(let i of words){
           
            let ascii = i.charCodeAt()

            if(ascii >= 65 && ascii <= 90){
               ascii = ((ascii - 65 - this.shift + 26) % 26) + 65
            }
            unicode.push(ascii)
        }
        
        let encoded = ""
        for(let i of unicode){
           encoded += String.fromCharCode(i).toUpperCase()
        }
        return encoded
    }
        
}

let ceaser = new CaesarCipher(5)
console.log(ceaser.encode("Codewars"));
console.log(ceaser.decode("BFKKQJX"));

