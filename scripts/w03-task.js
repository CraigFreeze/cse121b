/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    let formNum1 = Number(document.querySelector("#add1").value);
    let formNum2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(formNum1, formNum2);
}

document.querySelector("#addNumbers").addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2
}

function subtractNumbers() {
    let formNum1 = Number(document.querySelector("#subtract1").value);
    let formNum2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(formNum1, formNum2)
}

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;


function multiplyNumbers() {
    let formNum1 = Number(document.querySelector("#factor1").value);
    let formNum2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(formNum1, formNum2)
}

document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;


function divideNumbers() {
    let formNum1 = Number(document.querySelector("#dividend").value);
    let formNum2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(formNum1, formNum2)
}

document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector("#year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numArray.filter((number) => {
    switch (number % 2) {
        case 1:
            return number;
        default:
            break;
    }
});
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numArray.filter((number) => {
    switch (number % 2) {
        case 0:
            return number;
        default:
            break;
    }
});

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numArray.reduce((total, number) => total + number);
/* Output Multiplied by 2 Array */
let multBy2 = numArray.map((number) => 2 * number);
document.querySelector("#multiplied").innerHTML = multBy2;
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = multBy2.reduce((total, number) => total + number);