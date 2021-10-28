//placemarker
var saveBtn = document.getElementsByClassName("card-footer-item button is-primary"); //I assume there's going to be a favorite button within the container that holds the recipies and the cocktail.
var favoriteFood = document.querySelector("#recipeContainer")
var favoriteContainer = document.querySelector("#favoriteContainer")


saveBtn.addEventListener("click", function(event){
    event.preventDefault()

var favoriteCombo = {
    favoriteFood: favoriteFood.value
}
console.log(favoriteCombo)

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

function createTiles(){
    var tileContainer = document.createElement("article")
    tileContainer.classList.add("tile", "is-child", "box")

    var tileTitle = document.createElement("p")
    tileTitle.classList.add("title")
    tileTitle.innerHTML = foodName
    tileContainer.append(tileTitle)
    //the title page is going to come from the user input.
    //there's going to be a variable called "food name"
    //the variable is going to take whatever the user inputted from a texable area when the user favorites a recipe.

    var tileFrame = document.createElement("figure")
    tileFrame.classList.add("image", "is-128x128")

    favoriteContainer.append(tileContainer)
}