//Activity 1

////Arrow Function
const sequence = ["one", "two", "three"];
const sequenceTags = sequence.map((sequenceItem) => (`<li>${sequenceItem}</li>`));

document.getElementById("myList1").innerHTML = sequenceTags.join('');


////Normal Function call
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});

const insideJoin = stepsHtml.join('')
document.getElementById("myList").innerHTML = insideJoin;

//Activity 2 - map

const letterGrades = ['A', 'B', 'A', 'C', 'B', 'A']
const gpaPoints = letterGrades.map(function (letter) {
    switch (letter) {
        case 'A':
            return 4;
        case 'B':
            return 3;
        case 'C':
            return 2;
    }
});

console.log(gpaPoints)

//Activity 3 - Reduce

const totalPoints = gpaPoints.reduce((total, points) => total + points) / gpaPoints.length
console.log(totalPoints)

//Activity 4 - Filter

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const greaterThanSix = fruits.filter((fruit) => fruit.length > 6);

console.log(greaterThanSix);

//Activity 5 - indexOf
const numbers = [12, 34, 21, 54];
const luckNumber = 21;

const index = numbers.indexOf(luckNumber)

if (index === -1) {
    console.log("Not in the array!")
} else {
    console.log("In the array!")
}


//////////////////////////////
// Event handler

const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    // take a look at the event!
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}