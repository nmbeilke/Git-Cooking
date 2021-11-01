var getSavedLocal = JSON.parse(localStorage.getItem('favoriteCombo'));
var favoritesEl = document.querySelector('#favorites');

// drink URL generator //
// let stringUrl = "http://www.google.com/search";
//     let url = new URL(stringUrl);
//     let params = url.searchParams;
//     params.append("q", getSavedLocal[i].drink.strDrink + " drink recipe");
//     var savedDrinkURL = url.toString()

function initialLoad() {

    for (let i = 0; i < getSavedLocal.length; i++) {
        console.log(getSavedLocal[i])

        let stringUrl = "http://www.google.com/search";
            let url = new URL(stringUrl);
            let params = url.searchParams;
            params.append("q", getSavedLocal[i].drink.strDrink + " drink recipe");
            var savedDrinkURL = url.toString()

        var drinkFavoritesContainer = document.createElement('div')
        var drinkFavoritesHeader = document.createElement('header')
        var drinkTitle = document.createElement('p')
        var drinkImgContainer = document.createElement('div')
        var drinkImageFigure = document.createElement('figure')
        var drinkImgDisplay = document.createElement('img')
        var drinkImgData = getSavedLocal[i].drink.strDrinkThumb
        //var drinkImgUrl = savedDrinkURL
        var drinkRecipeBtn = document.createElement('a');
        var drinkCardFooter = document.createElement('footer');

        drinkFavoritesContainer.setAttribute('class', 'card column is-2 is-offset-1')
        drinkFavoritesHeader.setAttribute('class', 'card-header')
        drinkTitle.setAttribute('class', 'card-header-title')
        drinkImgContainer.setAttribute("class", 'card-image')
        drinkImgDisplay.setAttribute('class', 'image is-1x1')
        drinkImgDisplay.setAttribute('src', drinkImgData)
        drinkImgDisplay.setAttribute('alt', drinkImgData)
        drinkCardFooter.setAttribute('class', 'card-footer')
        drinkRecipeBtn.setAttribute('class', 'card-footer-item button is-light')
        drinkRecipeBtn.setAttribute('href', savedDrinkURL)
        drinkRecipeBtn.setAttribute('target', '_blank')
       

        drinkTitle.textContent = getSavedLocal[i].drink.strDrink
        drinkRecipeBtn.textContent = "View Recipe"

        drinkFavoritesHeader.append(drinkTitle)
        drinkImageFigure.append(drinkImgDisplay)
        drinkImgContainer.append(drinkImageFigure)
        drinkCardFooter.append(drinkRecipeBtn)


        drinkFavoritesContainer.append(drinkFavoritesHeader, drinkImgContainer, drinkCardFooter)



        //styling for the food containers
        var foodFavoritesContainer = document.createElement('div')
        var foodFavoritesHeader = document.createElement('header')
        var foodTitle = document.createElement('p')
        var foodImageContainer = document.createElement('div')
        var foodImgFigure = document.createElement('figure')
        var foodImgDisplay = document.createElement('img')
        var foodImgData = getSavedLocal[i].food.image;
        var foodImgUrl = getSavedLocal[i].food.url;
        var foodRecipeBtn = document.createElement('a');
        var foodCardFooter = document.createElement('footer');



        foodFavoritesContainer.setAttribute('class', 'card column is-2')
        foodFavoritesHeader.setAttribute('class', 'card-header')
        foodTitle.setAttribute('class', 'card-header-title')
        foodImageContainer.setAttribute('class', 'card-image')
        foodImgFigure.setAttribute('class', 'image is-1x1')
        foodImgDisplay.setAttribute('src', foodImgData)
        foodImgDisplay.setAttribute('alt', foodImgData)
        foodCardFooter.setAttribute('class', 'card-footer');
        foodRecipeBtn.setAttribute('class', 'card-footer-item button is-light');
        foodRecipeBtn.setAttribute('href', foodImgUrl)
        foodRecipeBtn.setAttribute('target', '_blank')

        foodTitle.textContent = getSavedLocal[i].food.label;
        foodRecipeBtn.textContent = "View Recipe"

        foodFavoritesHeader.append(foodTitle)
        foodImgFigure.append(foodImgDisplay)
        foodImageContainer.append(foodImgFigure)
        foodCardFooter.append(foodRecipeBtn);

        foodFavoritesContainer.append(foodFavoritesHeader, foodImageContainer, foodCardFooter)

        //overall appending for the food and drinks
        favoritesEl.append(drinkFavoritesContainer, foodFavoritesContainer)

    }

}

// clear button
function clear() {
    localStorage.clear();
    window.location.reload();
}
document.querySelector('#clear').onclick = clear;


initialLoad()
