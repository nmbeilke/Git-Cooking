//placemarker
var saveBtn = document.getElementById("save"); //I assume there's going to be a favorite button within the container that holds the recipies and the cocktail.
var favoriteFood = document.getElementById("foodContainer")
var favoriteDrink = document.getElementById("drinkContainer")


saveBtn.addEventListener("click", function(event){
    event.preventDefault()

var favoriteCombo = {
    favoriteDrink: favoriteDrink.value,
    favoriteFood: favoriteFood.value,
    
    console.log(favoriteDrink)
    console.log(favoriteDrink)
}


localStorage.setItem("favoriteCombo", JSON.stringify(favoriteCombo))
console.log(favoriteCombo)

storeFavorite()
})

function storeFavorite() {
    var saveFavorite = JSON.parse(localStorage.getItem("favoriteCombo"))
    if (saveFavorite !== null){
        console.log ("There's an Array!")
    }
}
