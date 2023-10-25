// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
//   // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];

//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];

//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];

//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];

//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// const foodsUl = document.querySelector('#favorite-foods');
// myInfo.favoriteFoods.forEach(food => {
//     let favoriteFoodLi = document.createElement("li");
//     favoriteFoodLi.textContent = food;
//     foodsUl.appendChild(favoriteFoodLi);
// });

const foodsUl = document.querySelector('#favorite-foods');

const foodLiEls = myInfo.favoriteFoods.map((food) => {
    return `<li>${food}</li>`;
});

foodsUl.innerHTML = foodLiEls.join('');

//next activity

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived")

function embedFoodIntoLi(food) {
    return `<li>${food}</li>`;
}

function embedPlaceIntoHtml(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function generateList(list, elCallback) {
    const htmlList = list.map(elCallback);
    return htmlList.join("");
}

foodsElement.innerHTML = generateList(
    myInfo.favoriteFoods,
    embedFoodIntoLi
);
placesElement.innerHTML = generateList(
    myInfo.placesLived,
    embedPlaceIntoHtml
);


let pagination = 10;
let i = 1;
while (i >= pagination) {
    console.log(`pass ${i}`);
    i++;
};