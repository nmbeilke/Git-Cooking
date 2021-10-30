var getSavedLocal = JSON.parse(localStorage.getItem("favoriteCombo"));

var favoritesEl = document.querySelector("#favorites");
//I assume there's going to be a favorite button within the container that holds the recipies and the cocktail.
//  var favoriteFood = document.querySelector("#recipeContainer")
//  var favoriteContainer = document.querySelector("#favorites")
//  var favoriteCombo = {
//     favoriteFood: favoriteFood.innerHTML
// }


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
    // y.innerHTML = savedStuff.favoriteFood

    // favoriteContainer.append(y)
}
initialLoad()

//  function recipeClicked() {
//     console.log(favoriteFood)
//      console.log(favoriteFood.innerHTML)
//      var favoriteCombo = {
//          favoriteFood: favoriteFood.innerHTML,
//          favoriteDrink: favoriteFood.children[1]
//      }
//      console.log(favoriteCombo)

//      localStorage.setItem("favoriteCombo", JSON.stringify(favoriteCombo))

//      storeFoodFavorite()
//  }

//  function cocktailClicked() {

//      console.log(favoriteFood.innerHTML)
    //  var favoriteCombo = {
    //      favoriteFood: favoriteFood.innerHTML
    //  }
//      console.log(favoriteCombo)

//      localStorage.setItem("favoriteCombo", JSON.stringify(favoriteCombo))
//      console.log(favoriteCombo)

//      storeDrinkFavorite()
//  }

//  function storeFoodFavorite() {
//      var saveFoodFavorite = JSON.parse(localStorage.getItem("favoriteCombo"))
//          console.log(saveFoodFavorite)

//          document.getElementById("favorites").appendChild(saveFoodFavorite)
//  }

//  function storeDrinkFavorite() {
//     var saveDrinkFavorite = JSON.parse(localStorage.getItem("favoriteCombo"))
//         console.log(saveDrinkFavorite)

//         document.getElementById("favorites-drink").appendChild(saveDrinkFavorite)
// }
