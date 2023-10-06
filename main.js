const display = document.querySelector(".display");
const btnClear = document.querySelector(".clear");
const btnEqual = document.querySelector(".equal");
const btn = document.querySelectorAll(".btn");

let listNum =[];
let calculationResult = 0;

btnClear.addEventListener("click", () => {
    clearDisplay();
    clearMemory();
})

btnEqual.addEventListener("click", () => {
    n = parseInt(display.innerText);
    listNum.push(n);
    clearDisplay();
    calculateResult();
})

btn.forEach(btn => {
    btn.addEventListener("click", function() {
        const btn = this;
        let btnValue = btn.innerText;

        if (btn.classList.contains("btn-operators")) {
            dataStorage(btnValue);
        } else {
            display.innerText += btnValue;
        }
    }); 
})

function clearDisplay() {
    printDisplay("");
}

function clearMemory() {
    listNum = [];
    calculationResult = [];
}

function printDisplay(info){
    display.innerText = info;
}

function dataStorage(btnOperatorsValue) {
    listNum.push(parseInt(display.innerText),);
    listNum.push(btnOperatorsValue);
    clearDisplay();
}

function calculateResult() {
    let result = listNum[0];

    for (let i = 1; i < listNum.length; i += 2) {
        let operator = listNum[i];
        let num = listNum[i + 1];
        
        switch (operator) {
          case "+":
            result += num;
            break;
          case "-":
            result -= num;
            break;
          case "*":
            result *= num;
            break;
          case "÷":
            result /= num;
            break;
          default:
            console.log("Invalid operator");
            break;
        }
    } 
    printDisplay(result);
    clearMemory();
}