var getSavedLocal = JSON.parse(localStorage.getItem('favoriteCombo'));
var favoritesEl = document.querySelector('#favorites');

function initialLoad() {
    for (let i = 0; i < getSavedLocal.length; i++) {
        console.log(getSavedLocal[i])

        var drinkFavoritesContainer = document.createElement('div')
        var drinkFavoritesHeader = document.createElement('header')
        var drinkTitle = document.createElement('p')
        var drinkImgContainer = document.createElement('div')
        var drinkImgLink = document.createElement('a')
        var drinkImgDisplay = document.createElement('img')
        var drinkImgData = getSavedLocal[i].drink.strDrinkThumb
        var drinkContentContainer = document.createElement('div')
        var drinkContent = document.createElement('div')

        drinkFavoritesContainer.setAttribute('class', 'card is-3')
        drinkFavoritesHeader.setAttribute('class', 'card-header custom-head')
        drinkTitle.setAttribute('class', 'card-header-title')
        drinkImgContainer.setAttribute("class", 'card-image')
        drinkImgDisplay.setAttribute('class', 'image is-128x128')
        drinkImgDisplay.setAttribute('src', drinkImgData)
        drinkImgDisplay.setAttribute('alt', drinkImgData)
        drinkContentContainer.setAttribute('class', 'card-content')
        drinkContent.setAttribute('class', 'content')

        drinkTitle.textContent = getSavedLocal[i].drink.strDrink

        drinkFavoritesHeader.append(drinkTitle)
        drinkImgLink.append(drinkImgDisplay)
        drinkImgContainer.append(drinkImgLink)
        drinkContentContainer.append(drinkContent)


        drinkFavoritesContainer.append(drinkFavoritesHeader, drinkImgContainer, drinkContentContainer)



        //styling for the food containers
        var foodFavoritesContainer = document.createElement('div')
        var foodFavoritesHeader = document.createElement('header')
        var foodTitle = document.createElement('p')
        var foodImageContainer = document.createElement('div')
        var foodImgLink = document.createElement('a')
        var foodImgDisplay = document.createElement('img')
        var foodImgData = getSavedLocal[i].food.image;
        var foodImgUrl = getSavedLocal[i].food.url;
        var foodContentContainer = document.createElement('div');
        var foodContent = document.createElement('div');



        foodFavoritesContainer.setAttribute('class', 'card is-3 ')
        foodFavoritesHeader.setAttribute('class', 'card-header custom-head')
        foodTitle.setAttribute('class', 'card-header-title')
        foodImageContainer.setAttribute('class', 'card-image')
        foodImgLink.setAttribute('href', foodImgUrl)
        foodImgLink.setAttribute('target', '_blank')
        foodImgDisplay.setAttribute('class', 'image is-128x128')
        foodImgDisplay.setAttribute('src', foodImgData)
        foodImgDisplay.setAttribute('alt', foodImgData)
        foodContentContainer.setAttribute('class', 'card-content')
        foodContent.setAttribute('class', 'content')

        foodTitle.textContent = getSavedLocal[i].food.label;

        foodFavoritesHeader.append(foodTitle)
        foodImgLink.append(foodImgDisplay)
        foodImageContainer.append(foodImgLink)
        foodContentContainer.append(foodContent)

        foodFavoritesContainer.append(foodFavoritesHeader, foodImageContainer, foodContentContainer)

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
