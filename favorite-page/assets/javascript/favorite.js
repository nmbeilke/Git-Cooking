var getSavedLocal = JSON.parse(localStorage.getItem("favoriteCombo"));

var favoritesEl = document.querySelector("#favorites");


function initialLoad() {
    for (let i = 0; i < getSavedLocal.length; i++) {
        console.log(getSavedLocal[i])

        var drinkFavoritedContainer = document.createElement("div")

        var drinkFavoritedHeader = document.createElement("div")
        var drinkTitle = document.createElement("h2")

        var drinkImageContainer = document.createElement("div")
        var drinkImgLink = document.createElement("a")
        var drinkImgDisplay = document.createElement("img")
        var drinkImgData = getSavedLocal[i].drink.strDrinkThumb

        var removeDrinkContainer = document.createElement("div")
        var removeFavoriteDrink = document.createElement("button")

        drinkFavoritedContainer.setAttribute = ("class", "card")
        drinkFavoritedHeader.setAttribute = ("class", "card-header customhead" )

        drinkImageContainer.setAttribute = ("class", "card-image")
        drinkImgDisplay.setAttribute("class", "image is-128x128")
        
        drinkImgDisplay.setAttribute("src", drinkImgData)
        drinkImgDisplay.setAttribute("alt", drinkImgData)

        removeDrinkContainer.setAttribute("class" ,"card-footer" )
        removeFavoriteDrink.setAttribute("class", "card-footer-item button is-primary is-danger")
       
        drinkTitle.textContent = getSavedLocal[i].drink.strDrink
       
        drinkFavoritedHeader.append(drinkTitle)
        drinkImageContainer.append(drinkImgLink)
        drinkImgLink.append(drinkImgDisplay)
        removeDrinkContainer.append(removeFavoriteDrink)
        

        drinkFavoritedContainer.append(drinkFavoritedHeader,drinkImageContainer,removeDrinkContainer)

        //styling for the food containers
        var foodFavoritedContainer = document.createElement("div")

        var foodFavoritedHeader = document.createElement("div")
        var foodTitle = document.createElement("h2")

        var foodImageContainer = document.createElement("div")
        var foodImgLink = document.createElement("a")
        var foodImgDisplay = document.createElement("img")
        var foodImgData = getSavedLocal[i].food.image;
        var foodImgUrl = getSavedLocal[i].food.url;

        var removeFoodContainer = document.createElement("div")
        var removeFavoriteFood = document.createElement("button")
        
        foodFavoritedContainer.setAttribute = ("class", "card")
        foodFavoritedHeader.setAttribute = ("class", "card-header customhead" )

        foodImageContainer.setAttribute = ("class", "card-image")
        foodImgLink.setAttribute("href", foodImgUrl)
        foodImgLink.setAttribute("target", "_blank")
        foodImgDisplay.setAttribute("class", "image is-128x128")
        foodImgDisplay.setAttribute("src", foodImgData)
        foodImgDisplay.setAttribute("alt", foodImgData)

        removeFoodContainer.setAttribute("class" ,"card-footer" )
        removeFavoriteFood.setAttribute("class", "card-footer-item button is-primary is-danger");


        foodTitle.textContent = getSavedLocal[i].food.label;


        foodFavoritedHeader.append(foodTitle)
        foodImageContainer.append(foodImgLink)
        foodImgLink.append(foodImgDisplay)
        removeFoodContainer.append(removeFavoriteFood)


        
        
        foodFavoritedContainer.append(foodFavoritedHeader,foodImageContainer,removeFoodContainer)
        
        //overall appending for the food and drinks
        favoritesEl.append(drinkFavoritedContainer, foodFavoritedContainer)
        
    }
    // var savedStuff = JSON.parse(localStorage.getItem("favoriteCombo"))
    // console.log(savedStuff)


    // var y = document.createElement("div")
    // y.innerHTML = savedStuff.getCurentSaved


    // favoritesEl.append(y)
}

// (removeFavoriteFood).click(function(){ 
// 	$(this).parent().remove() 
// }); 

initialLoad()