var getSavedLocal = JSON.parse(localStorage.getItem("favoriteCombo"));

var favoritesEl = document.querySelector("#favorites");



function initialLoad() {
    for (let i = 0; i < getSavedLocal.length; i++) {
        console.log(getSavedLocal[i])
        var drinkTitle = document.createElement("h2");
        drinkTitle.textContent = getSavedLocal[i].drink.strDrink;

        var foodTitle = document.createElement("h2");
        foodTitle.textContent = getSavedLocal[i].food.label;

        favoritesEl.append(drinkTitle, foodTitle)
    }


    // var savedStuff = JSON.parse(localStorage.getItem("favoriteCombo"))
    // console.log(savedStuff)


    // var y = document.createElement("div")
    // y.innerHTML = savedStuff.getCurentSaved


    // favoritesEl.append(y)
}
initialLoad()


