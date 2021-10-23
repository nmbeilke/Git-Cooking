// javascript
var food;
var drink;
var submitBtn = document.getElementById('submit');
var foodContainer = document.getElementById('foodContainer');
var drinkContainer = document.getElementById('drinkContainer');

function foodSelect() {
    var select = document.getElementById('recipeSelect');
    food = select.options[select.selectedIndex].value;
    console.log(food)
}

function drinkSelect() {
    var selectDrink = document.getElementById('drinkSelect');
    drink = selectDrink.options[selectDrink.selectedIndex].value;
    console.log(drink);
}



function fetchRecipe() {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=c802a2ec&app_key=687e250fe13f028dca68ea450a6de6ee&random=true`)
        .then(res => res.json())
        .then(data => {
            var recipeData = data.hits;
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(res => res.json()).then(cocktail => {
                console.log(cocktail.drinks)
                var cocktailData = cocktail.drinks;
                render(recipeData, cocktailData)
            })
        })
}
function render(food, drinks) {
    renderRecipe(food)
    renderCocktail(drinks)
}

function renderRecipe(recipes) {
    console.log(recipes[0].recipe)
    var data =recipes[0].recipe
    foodContainer.innerHTML = '';

    //create card elements

    var card= document.createElement('div');
    var cardImgContainer= document.createElement('div');
    var imgFigure = document.createElement('figure');
    var cardImg = document.createElement('img');

    //set classes for styling from bulma
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

}

function renderCocktail(drinkInfo){

}

submitBtn.onclick = fetchRecipe;