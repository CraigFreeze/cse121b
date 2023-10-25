import { easterEgg1, easterEgg2 } from "./easter-eggs.js";

let index = 0;
let quotes = [];
let quoteAuthors = [];
let quoteLength = [];
let results = null;

const url = 'https://quotable.io/random';


async function newQuote() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        await addQuote(data);
        renderQuote(index);
    }
}

function addQuote(data) {
    results = data;
    quotes.push(results.content);
    quoteAuthors.push(results.author);
    quoteLength.push(results.length);
    index = quotes.length - 1;
}

const errorCode = `BOUNDARY ERROR`;
function prevQuote() {
    if (index > 0) {
        index--;
        renderQuote(index);
    } else {
        console.log(`${errorCode}: Not in range`)
    }
}

function nextQuote() {
    if (index < quotes.length - 1) {
        index++;
        renderQuote(index);
    } else {
        console.log(`${errorCode}: Not in range`)
    }
}

function renderButtons(index) {
    if (index == 0) {
        document.getElementById('previousQuote').setAttribute("disabled", "true");
    } else if (index > 0) {
        document.getElementById('previousQuote').removeAttribute("disabled");
    } else {
        console.log("Button escaped Bounds")
    }

    if (index == quotes.length - 1) {
        document.getElementById('nextQuote').setAttribute("disabled", "true");
    } else if (index < quotes.length - 1) {
        document.getElementById('nextQuote').removeAttribute("disabled");
    } else {
        console.log("Button escaped Bounds")
    }

}
function renderQuote(index) {
    renderButtons(index);
    document.querySelector("#quote").textContent = quotes[index];
    document.querySelector("#quote-author").textContent = `Author: ${quoteAuthors[index]}`;
    document.querySelector("#quote-length").textContent = `Number of Characters: ${quoteLength[index]}`;
    console.log(`Quote Length: ${quoteLength}`);
    document.querySelector("#quote-reduce").textContent = `Total Number of Characters from all generated quotes: ${quoteLength.reduce((total, item) => total + item)}`;

    //EASTER EGGS ARE PRINTED TO CONSOLE EACH TIME THE QUOTES ARE RENDERED.
    const letterI = `I`
    easterEgg1(`President Russell M. Nelson: “My dear brothers and sisters, ${letterI} promise that as you prayerfully study the Book of Mormon every day, you will make better decisions—every day. I promise that as you ponder what you study, the windows of heaven will open, and you will receive answers to your own questions and direction for your own life. I promise that as you daily immerse yourself in the Book of Mormon, you can be immunized against the evils of the day, even the gripping plague of pornography and other mind-numbing addictions” (“The Book of Mormon: What Would Your Life Be Like without It?” Ensign or Liahona, Nov. 2017, 62–63).`);
    easterEgg2(`${letterI} love you more than a pig!`);
}

newQuote();


document.querySelector("#generateQuote").addEventListener("click", newQuote);
document.querySelector("#previousQuote").addEventListener("click", prevQuote);
document.querySelector("#nextQuote").addEventListener("click", nextQuote);


