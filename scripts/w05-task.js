/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples')
let templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName
        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(templeImage);
        templesElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json()
        displayTemples(templeList)
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector('#sortBy').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter((temple) => {
                console.log("Utah");
                console.log(temple.location);
                console.log(temple.location.indexOf('Utah'));
                return temple.location.indexOf('Utah') != -1;
            }));
            break;
        case 'notutah':
            displayTemples(temples.filter((temple) => {
                console.log("Not Utah");
                console.log(temple.location);
                console.log(temple.location.indexOf('Utah'));
                return temple.location.indexOf('Utah') === -1;
            }));
            break;
        case 'older':
            displayTemples(temples.filter((temple) => {
                console.log("older");
                console.log(temple.templeName);
                console.log(new Date(temple.dedicated) < new Date(1950, 0, 1));
                return new Date(temple.dedicated) < new Date(1950, 0, 1);
            }));
            break;
        case 'all':
            console.log(temples);
            displayTemples(temples);
            break;
    }
}


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => { sortBy(templeList) });