function calculation(firstNum,operation,secondNum){
    
    try {
        
        firstNum = Number(firstNum)
        secondNum = Number(secondNum)

        if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
            throw new Error("Please input valid integers.");
        }

        switch (operation) {
            case "+":
                return firstNum + secondNum;
            case "-":
                return firstNum - secondNum;
            case "*":
                return firstNum * secondNum;
            case "/":
                if (secondNum === 0) throw new Error("Division by zero is not allowed");
                return firstNum / secondNum;
            default:
                throw new Error("Invalid operation. Use +, -, *, or /");
        }
    } catch (error) {
        console.error(error);
        
    }

}

import process from "process"
let firstNum =  process.argv[2]
let operation = process.argv[3]
let secondNum = process.argv[4]
const res = calculation(firstNum,operation,secondNum)
console.log(res);

