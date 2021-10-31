// javascript
var food;
var drink;
var submitBtn = document.querySelector('#submit');
var foodContainer = document.querySelector('#recipeContainer');
var btnContainerEl = document.querySelector("#btnContainer")
var saveBtn = document.querySelector("#save")

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
            var recipeData = data.hits[0].recipe;
            console.log(recipeData);

            fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?c=' + drink, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "2e52245529msh07cfec66fbb7b81p1371cbjsnc6d6e5003628"
                }
            })
                .then(res => {

                    return res.json();
                })
                .then(cocktail => {
                    console.log(cocktail);
                    var randomDrink = cocktail.drinks[Math.floor(Math.random() * cocktail.drinks.length)];
                    console.log(randomDrink);

                    render(recipeData, randomDrink)

                    savedComboToLocal(recipeData, randomDrink);

                })
        })
}
function render(food, drinks) {
    foodContainer.innerHTML = '';
    renderRecipe(food)
    renderDrink(drinks)
    btnContainerEl.removeAttribute("class")
}


var savedComboToLocal = function (food, drink) {

    var savedFoodAndDrinks = {
        food: food,
        drink: drink
    }

    var getCurentSaved = JSON.parse(localStorage.getItem("favoriteCombo")) || [];

    function saveFunc(event) {

        getCurentSaved.push(savedFoodAndDrinks);
        localStorage.setItem("favoriteCombo", JSON.stringify(getCurentSaved));
    }

    saveBtn.addEventListener("click", saveFunc)

}








function renderRecipe(recipes) {
    console.log(recipes)
    var data = recipes
    foodContainer.innerHTML = '';

    //create card elements
    var card = document.createElement('div');
    var cardHeader = document.createElement('header');
    var cardTitle = document.createElement('p');
    var cardImgContainer = document.createElement('div');
    var imgFigure = document.createElement('figure');
    var cardImg = document.createElement('img');
    var cardContentContainer = document.createElement('div');
    var cardContent = document.createElement('div');
    var recipeUrl = document.createElement('a');
    // var cardFooter = document.createElement('footer');


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
    recipeUrl.setAttribute('target', "_blank")
    // cardFooter.setAttribute('class', 'card-footer');
    // recipeFooterBtn.setAttribute('class', 'card-footer-item button is-primary');
    // recipeFooterBtn.setAttribute("onclick", "recipeClicked()")


    //set content to new elements
    cardTitle.textContent = data.label;
    recipeUrl.textContent = data.label;
    // recipeFooterBtn.textContent = "Save to Favorites"


    //button click goes here
    // recipefooterBtn.onclick = recipeClicked();

    //append all children to parent containers 
    cardHeader.append(cardTitle);
    imgFigure.append(cardImg);
    cardImgContainer.append(imgFigure);
    cardContent.append(recipeUrl);
    cardContentContainer.append(cardContent);
    // cardFooter.append(recipeFooterBtn);


    //append card to foodContainer
    card.append(cardHeader, cardImgContainer, cardContentContainer);
    foodContainer.append(card);

}
var cocktailFooterBtn = document.createElement('a');


function renderDrink(liquid) {
    console.log(liquid)
    var cocktail = liquid

    //create card elements
    var card = document.createElement('div');
    var cardHeader = document.createElement('header');
    var cardTitle = document.createElement('p');
    var cardImgContainer = document.createElement('div');
    var imgFigure = document.createElement('figure');
    var cardImg = document.createElement('img');
    var cardContentContainer = document.createElement('div');
    var cardContent = document.createElement('div');
    var cocktailURL = document.createElement('a');
    var cardFooter = document.createElement('footer');

    // var drinkTitleForGoogle = cocktail.strDrink.split(" ")
    // console.log(drinkTitleForGoogle)
    let stringUrl = "http://www.google.com/search";
    let url = new URL(stringUrl);
    let params = url.searchParams;
    params.append("q", cocktail.strDrink + " drink recipe");

    console.log(url.toString());

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
    cocktailURL.setAttribute('href', url.toString())
    cocktailURL.setAttribute('target', "_blank")
    cardFooter.setAttribute('class', 'card-footer');
    cocktailFooterBtn.setAttribute('class', 'card-footer-item button is-primary');
    cocktailFooterBtn.setAttribute("onclick", "cocktailClicked()")

    //set content to new elements
    cardTitle.textContent = cocktail.strDrink;
    cocktailURL.textContent = cocktail.strDrink;
    cocktailFooterBtn.textContent = "Save to Favorites"


    //button click goes here

    // cocktailFooterBtn.onclick = cocktailClicked();

    //append all children to parent containers 
    cardHeader.append(cardTitle);
    imgFigure.append(cardImg);
    cardImgContainer.append(imgFigure);
    cardContent.append(cocktailURL);
    cardContentContainer.append(cardContent);
    cardFooter.append(cocktailFooterBtn);

    //append card to foodContainer
    card.append(cardHeader, cardImgContainer, cardContentContainer, cardFooter);
    foodContainer.append(card);

}

submitBtn.onclick = fetchRecipe;

// var btnContainerEl = document.querySelector("#btnContainer")
// function submitBtn() {
//     btnContainerEl.setAttribute(display)

// }

