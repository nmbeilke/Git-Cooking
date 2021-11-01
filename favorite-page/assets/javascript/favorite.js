var getSavedLocal = JSON.parse(localStorage.getItem("favoriteCombo"));
var favoritesEl = document.querySelector("#favorites");


function initialLoad() {
    for (let i = 0; i < getSavedLocal.length; i++) {
        console.log(getSavedLocal[i])

        //create card elements
        var drinkFavoritesContainer = document.createElement("div")
        var drinkFavoritesHeader = document.createElement("header")
        var drinkTitle = document.createElement("p")
        var drinkImgContainer = document.createElement("div")
        var drinkImgFigure = document.createElement('figure')
       // var drinkImgLink = document.createElement("a")
        var drinkImgDisplay = document.createElement("img")
       // var drinkImgData = getSavedLocal[i].drink.strDrinkThumb
        var drinkContentContainer = document.createElement('div')
        var drinkCardContent = document.createElement('div');
        var drinkCardFooter = document.createElement('footer')

        var drinkRecipeBtn = document.createElement('a');

        // removing card
        var removeDrinkContainer = document.createElement("div")
        var removeFavoriteDrink = document.createElement("button")

        let stringUrl = "http://www.google.com/search";
        let url = new URL(stringUrl);
        let params = url.searchParams;
        params.append("q", cocktail.strDrink + " drink recipe");
    
        console.log(url.toString());

        
        //set classes for styling - from bulma
        drinkFavoritesContainer.setAttribute = ("class", "card column")
        drinkFavoritesHeader.setAttribute = ("class", "card-header custom-head")
        drinkTitle.setAttribute = ("class', 'card-header-title")
        drinkImgContainer.setAttribute("class", "card-image")
        drinkImgFigure.setAttribute("class", "image is-128x128")
        drinkImgDisplay.setAttribute("src", drink.strDrinkThumb)
        drinkImgDisplay.setAttribute("alt", drink.strDrink)
        drinkContentContainer.setAttribute('class', 'card-content')
        drinkCardContent.setAttribute('class', 'content')
        drinkCardFooter.setAttribute('class', 'card-footer')
        drinkRecipeBtn.setAttribute('class', 'card-footer-item button is-primary is-light');
        drinkRecipeBtn.setAttribute('href', url.toString())
        drinkRecipeBtn.setAttribute('target', "_blank")
            //remove btn
        removeDrinkContainer.setAttribute("class" ,"card-footer" )
        removeFavoriteDrink.setAttribute("class", "card-footer-item button is-primary is-danger")
        
        // set content to new elements
        drinkTitle.textContent = getSavedLocal[i].drink.strDrink
        
        // append children to parent containers
        drinkFavoritesHeader.append(drinkTitle)
        drinkImgFigure.append(drinkImgDisplay)
        drinkImgContainer.append(drinkImgFigure)
        drinkContentContainer.append(drinkCardContent)
        drinkCardFooter.append(drinkRecipeBtn)
        removeDrinkContainer.append(removeFavoriteDrink)
        

        drinkFavoritesContainer.append(drinkFavoritesHeader, drinkImgContainer, drinkContentContainer, drinkCardFooter, removeDrinkContainer)







        //styling for the food containers
        var foodFavoritesContainer = document.createElement("div")

        var foodFavoritesHeader = document.createElement("div")
        var foodTitle = document.createElement("h2")

        var foodImageContainer = document.createElement("div")
        var foodImgLink = document.createElement("a")
        var foodImgDisplay = document.createElement("img")
        var foodImgData = getSavedLocal[i].food.image;
        var foodImgUrl = getSavedLocal[i].food.url;

        var removeFoodContainer = document.createElement("div")
        var removeFavoriteFood = document.createElement("button")
        
        foodFavoritesContainer.setAttribute = ("class", "card")
        foodFavoritesHeader.setAttribute = ("class", "card-header customhead" )

        foodImageContainer.setAttribute = ("class", "card-image")
        foodImgLink.setAttribute("href", foodImgUrl)
        foodImgLink.setAttribute("target", "_blank")
        foodImgDisplay.setAttribute("class", "image is-128x128")
        foodImgDisplay.setAttribute("src", foodImgData)
        foodImgDisplay.setAttribute("alt", foodImgData)

        removeFoodContainer.setAttribute("class" ,"card-footer" )
        removeFavoriteFood.setAttribute("class", "card-footer-item button is-primary is-danger");


        foodTitle.textContent = getSavedLocal[i].food.label;


        foodFavoritesHeader.append(foodTitle)
        foodImageContainer.append(foodImgLink)
        foodImgLink.append(foodImgDisplay)
        removeFoodContainer.append(removeFavoriteFood)


        
        
        foodFavoritesContainer.append(foodFavoritesHeader,foodImageContainer,removeFoodContainer)
        
        //overall appending for the food and drinks
        favoritesEl.append(drinkFavoritesContainer, foodFavoritesContainer)
        
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