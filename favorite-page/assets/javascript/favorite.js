//placemarker
var cocktailSaveBtn = cocktailFooterBtn;
var recipeFooterBtn =  recipeFooterBtn //I assume there's going to be a favorite button within the container that holds the recipies and the cocktail.

var favoriteContainer = document.querySelector("#favoriteContainer")


recipeFooterBtn.addEventListener("click", function(event){
    event.preventDefault()
    var favoriteFood = document.querySelector(".card-header-title")
   

var favoriteCombo = {
    favoriteFoodKey: favoriteFood.innerHTML
}


localStorage.setItem("favoriteCombo", JSON.stringify(favoriteCombo))


storeFavorite()
})

cocktailSaveBtn.addEventListener("click", function(event){
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
    // if (saveFavorite !== null){
    //     console.log (saveFavorite.favoriteFoodKey)

    
    // }
    for(var i=0; i<saveFavorite.length;i++) {
        //for every food title saved it will find the title, image and link for you and then create the cards again
        fetchRecipe(saveFavorite.favoriteFoodKey).then(renderRecipe(whateverItreturned))
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
card.setAttribute('class', 'card');
cardImgContainer.setAttribute('class', 'card-image');
imgFigure.setAttribute('class', 'image is-4by4');
cardImg.setAttribute('src', data.image)
cardImg.setAttribute('alt', data.label)

//append image container to card
imgFigure.append(cardImg);
cardImgContainer.append(imgFigure);

//append card to foodContainer
card.append(cardImgContainer);
foodContainer.append(card);



function renderCocktail(beer){
console.log(beer)
var cocktail = beer[0] 
drinkContainer.innerHTML = '';


//create card elements
var card= document.createElement('div');
var cardImgContainer= document.createElement('div');
var imgFigure = document.createElement('figure');
var cardImg = document.createElement('img');

//set classes for styling from bulma
card.setAttribute('class', 'card');
cardImgContainer.setAttribute('class', 'card-image');
imgFigure.setAttribute('class', 'image is-4by4');
cardImg.setAttribute('src', cocktail.strDrinkThumb)
cardImg.setAttribute('alt', cocktail.label)

//append image container to card
imgFigure.append(cardImg);
cardImgContainer.append(imgFigure);

//append card to foodContainer
card.append(cardImgContainer);
drinkContainer.append(card);

}


submitBtn.onclick = fetchRecipe;