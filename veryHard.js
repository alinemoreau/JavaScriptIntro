var firstNum = parseInt(prompt("Type your first number"));
var operator = prompt("Enter an operator: +, -, *, or /")
var secondNum = parseInt(prompt("Type your second number"));

function add(number, number){
    return result = firstNum + secondNum;
}

function subtract(number, number){
    return result = firstNum - secondNum;
}

function multiply(number, number){
    return result = firstNum * secondNum;
}

function divide(number, number){
     return result = firstNum/secondNum;
}

if (operator == "+"){
    console.log(`${firstNum} + ${secondNum} = ${add(firstNum, secondNum)}`)
} else if (operator == "-"){
    console.log(`${firstNum} - ${secondNum} = ${subtract(firstNum, secondNum)}`)
} else if (operator == "-"){
    console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`)
} else if (operator == "/"){
    console.log(`${firstNum} / ${secondNum} = ${divide(firstNum, secondNum)}`)
} else {
    console.log("Error. Please try again.")
}