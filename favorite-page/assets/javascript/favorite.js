 //I assume there's going to be a favorite button within the container that holds the recipies and the cocktail.
var favoriteFood = document.querySelector("#recipeContainer")
// var favoriteContainer = document.getElementById("#favoriteContainer")


function recipeClicked() {

    console.log(favoriteFood.innerHTML)
    var favoriteCombo = {
        favoriteFood: favoriteFood.innerHTML
    }
    console.log(favoriteCombo)

    localStorage.setItem("favoriteCombo", JSON.stringify(favoriteCombo))

    storeFavorite()
}

function cocktailClicked() {

    console.log(favoriteFood.innerHTML)
    var favoriteCombo = {
        favoriteFood: favoriteFood.innerHTML
    }
    console.log(favoriteCombo)

    localStorage.setItem("favoriteCombo", JSON.stringify(favoriteCombo))
    console.log(favoriteCombo)

    storeFavorite()
}

function storeFavorite() {
    var saveFavorite = JSON.parse(localStorage.getItem("favoriteCombo"))
        console.log(saveFavorite, "There's an Array!")

        document.getElementById("favoriteContainer").appendChild(saveFavorite)
}

