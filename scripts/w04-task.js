/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Craig Freeze",
    photo: "images/craig-freeze-profile.png",
    favoriteFoods: ["Orange Chicken", "Steak", "Honey Bunches of Oats"],
    hobbies: ["Ultimate Frisbee", "Disc Golf", "Chess", "YouTube"],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Reno, NV",
        length: "7 years",
    },
    {
        place: "Boise, ID",
        length: "6 years",
    },
    {
        place: "Huntington Beach, CA",
        length: "4 years",
    },
    {
        place: "Orting, WA",
        length: "2 years",
    },
    {
        place: "Orlando, FL",
        length: "1 years",
    },
    {
        place: "São Paulo, Brazil",
        length: "1 years",
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('img').src = myProfile.photo;
document.querySelector('img').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let newLi = document.createElement('li');
    newLi.textContent = food;
    document.querySelector('#favorite-foods').appendChild(newLi);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let newLi = document.createElement('li');
    newLi.textContent = hobby;
    document.querySelector('#hobbies').appendChild(newLi);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let newDt = document.createElement('dt');
    newDt.textContent = place.place;
    let newDd = document.createElement('dd');
    newDd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(newDt);
    document.querySelector('#places-lived').appendChild(newDd);
    
});


