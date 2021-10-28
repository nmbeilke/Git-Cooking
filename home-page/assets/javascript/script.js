// javascript
var food;
var drink;
var submitBtn = document.querySelector('#submit');
var foodContainer = document.querySelector('#recipeContainer');
// var drinkContainer = document.querySelector('#drinkContainer');

function foodSelect() {
    var select = document.querySelector('#recipeSelect');
    food = select.options[select.selectedIndex].value;
    console.log(food)
}

function drinkSelect() {
    var selectDrink = document.querySelector('#drinkSelect');
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
    foodContainer.innerHTML = '';
    renderRecipe(food)
    renderCocktail(drinks)
}
var recipeFooterBtn = document.createElement('a');

function renderRecipe(recipes) {
    console.log(recipes[0].recipe)
    var data =recipes[0].recipe
    // foodContainer.innerHTML = '';

    //create card elements
    var card= document.createElement('div');
    var cardHeader = document.createElement('header');
    var cardTitle = document.createElement('p');
    var cardImgContainer= document.createElement('div');
    var imgFigure = document.createElement('figure');
    var cardImg = document.createElement('img');
    var cardContentContainer = document.createElement('div');
    var cardContent = document.createElement('div');
    var recipeUrl = document.createElement('a');
    var cardFooter = document.createElement('footer');



    //set classes for styling from bulma
    card.setAttribute('class', 'card column is-3 is-offset-2');
    cardHeader.setAttribute('class', 'card-header')
    cardTitle.setAttribute('class', 'card-header-title')
    cardImgContainer.setAttribute('class', 'card-image');
    imgFigure.setAttribute('class', 'image is-4x3');
    cardImg.setAttribute('src', data.image)
    cardImg.setAttribute('alt', data.label)
    cardContentContainer.setAttribute('class', 'card-content');
    cardContent.setAttribute('class', 'content')
    recipeUrl.setAttribute('href', data.url)
    cardFooter.setAttribute('class', 'card-footer');
    recipeFooterBtn.setAttribute('class', 'card-footer-item button is-primary');

    //set content to new elements
    cardTitle.textContent = data.label;
    recipeUrl.textContent = data.label;
    recipeFooterBtn.textContent = "Save to Favorites"


    //button click goes here
        // footerBtn.onclick = ;

    //append all children to parent containers 
    cardHeader.append(cardTitle);
    imgFigure.append(cardImg);
    cardImgContainer.append(imgFigure);
    cardContent.append(recipeUrl);
    cardContentContainer.append(cardContent);
    cardFooter.append(recipeFooterBtn);


    //append card to foodContainer
    card.append(cardHeader, cardImgContainer, cardContentContainer, cardFooter);
    foodContainer.append(card);

}
var cocktailFooterBtn = document.createElement('a');


function renderCocktail(liquid){
    // console.log(liquid)
    var cocktail = liquid[0] 

    //create card elements
    var card= document.createElement('div');
    var cardHeader = document.createElement('header');
    var cardTitle = document.createElement('p');
    var cardImgContainer= document.createElement('div');
    var imgFigure = document.createElement('figure');
    var cardImg = document.createElement('img');
    var cardContentContainer = document.createElement('div');
    var cardContent = document.createElement('div');
    var cardFooter = document.createElement('footer');



    //set classes for styling from bulma
    card.setAttribute('class', 'card column is-3 is-offset-2');
    cardHeader.setAttribute('class', 'card-header')
    cardTitle.setAttribute('class', 'card-header-title')
    cardImgContainer.setAttribute('class', 'card-image');
    imgFigure.setAttribute('class', 'image is-4x3');
    cardImg.setAttribute('src', cocktail.strDrinkThumb)
    cardImg.setAttribute('alt', cocktail.strDrink)
    cardContentContainer.setAttribute('class', 'card-content');
    cardContent.setAttribute('class', 'content')
    cardFooter.setAttribute('class', 'card-footer');
    cocktailFooterBtn.setAttribute('class', 'card-footer-item button is-primary');

    //set content to new elements
    cardTitle.textContent = cocktail.strDrink;
    cardContent.textContent = cocktail.strInstructions;
    cocktailFooterBtn.textContent = "Save to Favorites"


    //button click goes here

    // footerBtn.onclick = ;

    //append all children to parent containers 
    cardHeader.append(cardTitle);
    imgFigure.append(cardImg);
    cardImgContainer.append(imgFigure);
    cardContentContainer.append(cardContent);
    cardFooter.append(cocktailFooterBtn);

    //append card to foodContainer
    card.append(cardHeader, cardImgContainer, cardContentContainer, cardFooter);
    foodContainer.append(card);

}

submitBtn.onclick = fetchRecipe;
