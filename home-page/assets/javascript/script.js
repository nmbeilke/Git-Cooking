// global variables
var food
var drink
var submitBtn = document.querySelector('#submit')
var foodContainer = document.querySelector('#recipeContainer')
var drinkSelected = document.querySelector('#drinkSelect').children
var drinkCategoriesNotRandom = document.getElementsByClassName('category')
var btnContainerEl = document.querySelector('#btnContainer')
var saveBtn = document.querySelector('#save')

// dropdown selections
function foodSelect() {
    var select = document.querySelector('#recipeSelect')
    food = select.options[select.selectedIndex].value
    console.log(food)
}
function drinkSelect() {
    var selectDrink = document.querySelector('#drinkSelect')
    drink = selectDrink.options[selectDrink.selectedIndex].value  
    var drinkSelection = drink
    console.log(drinkSelection)

// to randomize the drink 'random' dropdown selection
if (drinkSelection === 'random') { 
    function getRandomInt(max) {
            return Math.floor(Math.random() * max)
        }
        var randomNumber = getRandomInt(10)
        console.log(randomNumber)
        var newCategory = drinkCategoriesNotRandom[randomNumber].value
        console.log(newCategory)
        drink = newCategory
        console.log(drink)
    }
}

// fetch recipe and drink api
function fetchRecipe() {
    var dropdownFood = document.querySelector('#recipeSelect')
    if (dropdownFood.options[dropdownFood.selectedIndex].value === 'esc') {
        return
    }
    var dropdownDrink = document.querySelector('#drinkSelect')
    if (dropdownDrink.options[dropdownDrink.selectedIndex].value === 'esc') {
        return
    }
   
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=c802a2ec&app_key=687e250fe13f028dca68ea450a6de6ee&random=true`)
        .then(res => res.json())
        .then(data => {
            var recipeData = data.hits[0].recipe
            console.log(recipeData)

            fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?c=' + drink, {
                'method': 'GET',
                'headers': {
                    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
                    'x-rapidapi-key': '2e52245529msh07cfec66fbb7b81p1371cbjsnc6d6e5003628'
                }
            })
                .then(res => {
                    return res.json()
                })
                .then(cocktail => {
                    var randomDrink = cocktail.drinks[Math.floor(Math.random() * cocktail.drinks.length)]
                    console.log(randomDrink)

                    render(recipeData, randomDrink)

                    savedComboToLocal(recipeData, randomDrink)
                })
        })
}

// submit recipe pairing button
submitBtn.onclick = fetchRecipe

// render random recipe and drink to the page
// unhide 'save to favorites' button
function render(food, drinks) {
    foodContainer.innerHTML = ''
    renderRecipe(food)
    renderDrink(drinks)
    btnContainerEl.removeAttribute('class')
}

// saving to localStorage and saveBtn change attributes
var savedComboToLocal = function (food, drink) {

    var savedFoodAndDrinks = {
        food: food,
        drink: drink
    }

    var getCurrentSaved = JSON.parse(localStorage.getItem('favoriteCombo')) || []

    function saveFunc(event) {
        (function(){
              show = function(){
                saveBtn.setAttribute('class', 'button is-primary is-loading')
                setTimeout(hide, 1500) 
              },
              hide = function(){
                saveBtn.setAttribute('class', 'button is-primary')
              }
            show()
          })()

        getCurrentSaved.push(savedFoodAndDrinks)
        localStorage.setItem('favoriteCombo', JSON.stringify(getCurrentSaved))
    }

    saveBtn.addEventListener('click', saveFunc)

}

// render the food card
var recipeBtn = document.createElement('a')

function renderRecipe(recipes) {
    var data = recipes
    foodContainer.innerHTML = ''

    // create card elements
    var card = document.createElement('div')
    var cardHeader = document.createElement('header')
    var cardTitle = document.createElement('p')
    var cardImgContainer = document.createElement('div')
    var imgFigure = document.createElement('figure')
    var cardImg = document.createElement('img')
    var cardContentContainer = document.createElement('div')
    var cardContent = document.createElement('div')
    var cardFooter = document.createElement('footer')

    // set classes for styling - from bulma
    card.setAttribute('class', 'card column is-3 is-offset-2')
    cardHeader.setAttribute('class', 'card-header')
    cardTitle.setAttribute('class', 'card-header-title')
    cardImgContainer.setAttribute('class', 'card-image')
    imgFigure.setAttribute('class', 'image is-4x3')
    cardImg.setAttribute('src', data.image)
    cardImg.setAttribute('alt', data.label)
    cardContentContainer.setAttribute('class', 'card-content')
    cardContent.setAttribute('class', 'content')
    cardFooter.setAttribute('class', 'card-footer')
    recipeBtn.setAttribute('class', 'card-footer-item button is-primary is-light')
    recipeBtn.setAttribute('href', data.url)
    recipeBtn.setAttribute('target', '_blank')

    // set content to new elements
    cardTitle.textContent = data.label
    recipeBtn.textContent = 'View Recipe'

    // append all children to parent containers 
    cardHeader.append(cardTitle)
    imgFigure.append(cardImg)
    cardImgContainer.append(imgFigure)
    cardContentContainer.append(cardContent)
    cardFooter.append(recipeBtn)

    // append card to foodContainer
    card.append(cardHeader, cardImgContainer, cardContentContainer, cardFooter)
    foodContainer.append(card)

}

// render the drink card
var cocktailBtn = document.createElement('a')

function renderDrink(liquid) {
    var cocktail = liquid

    // create card elements
    var card = document.createElement('div')
    var cardHeader = document.createElement('header')
    var cardTitle = document.createElement('p')
    var cardImgContainer = document.createElement('div')
    var imgFigure = document.createElement('figure')
    var cardImg = document.createElement('img')
    var cardContentContainer = document.createElement('div')
    var cardContent = document.createElement('div')
    var cardFooter = document.createElement('footer')

    // generate drink recipe url
    let stringUrl = 'http://www.google.com/search'
    let url = new URL(stringUrl)
    let params = url.searchParams
    params.append('q', cocktail.strDrink + ' drink recipe')
    var drinkURL = url.toString()

    // set classes for styling - from bulma
    card.setAttribute('class', 'card column is-3 is-offset-2')
    cardHeader.setAttribute('class', 'card-header')
    cardTitle.setAttribute('class', 'card-header-title')
    cardImgContainer.setAttribute('class', 'card-image')
    imgFigure.setAttribute('class', 'image is-4x3')
    cardImg.setAttribute('src', cocktail.strDrinkThumb)
    cardImg.setAttribute('alt', cocktail.strDrink)
    cardContentContainer.setAttribute('class', 'card-content')
    cardContent.setAttribute('class', 'content')
    cardFooter.setAttribute('class', 'card-footer')
    cocktailBtn.setAttribute('class', 'card-footer-item button is-primary is-light')
    cocktailBtn.setAttribute('href', drinkURL)
    cocktailBtn.setAttribute('target', '_blank')

    // set content to new elements
    cardTitle.textContent = cocktail.strDrink
    cocktailBtn.textContent = 'View Recipe'

    // append all children to parent containers 
    cardHeader.append(cardTitle)
    imgFigure.append(cardImg)
    cardImgContainer.append(imgFigure)
    cardContentContainer.append(cardContent)
    cardFooter.append(cocktailBtn)

    // append card to foodContainer
    card.append(cardHeader, cardImgContainer, cardContentContainer, cardFooter)
    foodContainer.append(card)

}


