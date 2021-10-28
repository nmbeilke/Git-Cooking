//placemarker
//wtf am i writing?
var saveBtn = document.getElementById("save");
//I assume there's going to be a favorite button within the container that
//holds the recipies and the cocktail.


//------------script part that displays the favorite on the page
function displayFavorite() {
    // either get scores from localstorage or set to empty array
    var favorite = JSON.parse(window.localStorage.getItem("favorite")) || [];
  
  
    favorite.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
  
      // display on page
      var olEl = document.getElementById("favorite");
      olEl.appendChild(liTag);
    });
  }
//------------/end script part that displays the favorite on the page  

//------------ script for removing a favorited recipe
function clearFavorite() {
    window.localStorage.removeItem("favorite");
    window.location.reload();
}
  
document.getElementById("clear").onclick = clearFavorite;
  
// run function when page loads
displayFavorite();

//------------ script for removing a favorited recipe


//------------script part that puts favorites in local storage
function saveFavorite() {
    // get value of input box
    var initials = initialsEl.value.trim();
    }
      // save to localstorage
      window.localStorage.setItem("favorite", JSON.stringify(favorite));
  
//user clicks save button and it'll run the function that saves in local storage?

saveBtn.onclick = saveFavorite;
  
//------------script part that puts favorites in local storage