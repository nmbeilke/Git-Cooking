var getSavedLocal = JSON.parse(localStorage.getItem("favoriteCombo"));

var favoritesEl = document.querySelector("#favorites");


function initialLoad() {
    for (let i = 0; i < getSavedLocal.length; i++) {
        console.log(getSavedLocal[i])
        var drinkFavoritedContainer = document.createElement("div");
        var drinkImageContainer = document.createElement("div")
        var drinkTitle = document.createElement("h2");
        var drinkImgDisplay = document.createElement("img");
        var drinkImgData = getSavedLocal[i].drink.strDrinkThumb;

        drinkFavoritedContainer.setAttribute = ('class', 'card-custom')
        drinkImageContainer.setAttribute = ('class', 'card-image card-custom')
        drinkImgDisplay.setAttribute('class', 'image is-128x128');
        drinkTitle.textContent = getSavedLocal[i].drink.strDrink;
        
        drinkImgDisplay.setAttribute('src', drinkImgData)
        drinkImgDisplay.setAttribute('alt', drinkImgData)

        drinkFavoritedContainer.append(drinkTitle,drinkImgDisplay)

        

        var foodTitle = document.createElement("h2");
        var foodFavoritedContainer = document.createElement("div");
        var foodImageContainer = document.createElement("div")
        var foodTitle = document.createElement("h2");
        var foodImgLink = document.createElement("a")
        var foodImgDisplay = document.createElement("img");
        var foodImgData = getSavedLocal[i].food.image;
        var foodImgUrl = getSavedLocal[i].food.url;

        var removeFavoriteFood = document.createElement("button")
        
        foodFavoritedContainer.setAttribute = ("class", "custom")
        foodImageContainer.setAttribute = ("class", "card-image")
        foodImgLink.setAttribute('href', foodImgUrl)
        foodImgLink.setAttribute('target', "_blank")
        foodImgDisplay.setAttribute('class', 'image is-128x128')
        removeFavoriteFood.setAttribute('class', 'card-footer-item button is-primary is-light');


        foodTitle.textContent = getSavedLocal[i].food.label;

        foodImgDisplay.setAttribute('src', foodImgData)
        foodImgDisplay.setAttribute('alt', foodImgData)

    
        foodImgLink.append(foodImgDisplay)
        foodImageContainer.append(foodTitle,foodImgLink)
        foodFavoritedContainer.append(foodImageContainer,removeFavoriteFood)
        favoritesEl.append(drinkFavoritedContainer, foodFavoritedContainer)
        
    }


    // var savedStuff = JSON.parse(localStorage.getItem("favoriteCombo"))
    // console.log(savedStuff)


    // var y = document.createElement("div")
    // y.innerHTML = savedStuff.getCurentSaved


    // favoritesEl.append(y)
}
initialLoad()