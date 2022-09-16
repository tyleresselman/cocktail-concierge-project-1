var cocktailInputEl = $("#cocktail-name-input");
var cocktailBtn = $("#cocktail-btn");
var ingredientBtn = $("#ingredient-btn");
var nameButtonDiv = $(".name-button-div");
var ingButtonDiv = $(".ing-button-div");
var ingListSelectEl = $("#ing-list");

cocktailBtn.on("click", function(e) {
    e.preventDefault();
    var cocktailVal = cocktailInputEl.val();
    if(cocktailVal !== "") {
        cocktailInputEl.val("");
        window.location.replace(`./search-results.html?s=${cocktailVal}`)
    } else {
        var errMessage = $("<p class='has-text-danger'>");
        errMessage.text("Please enter a valid input");
        nameButtonDiv.append(errMessage);
    }
});

function ingInput() {
    var ingListUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  
  fetch(ingListUrl)
    .then(function(response){
      return response.json()
    }).then(function(data){
      for (let i = 0; i < data.drinks.length; i++) {
      var optionEl = $("<option>");
      optionEl.text(data.drinks[i].strIngredient1);
      optionEl.val(data.drinks[i].strIngredient1);
      ingListSelectEl.append(optionEl)
      }
    })
  }
  ingInput();

ingredientBtn.on("click", function(e) {
    e.preventDefault();
    var dropDownVal = ingListSelectEl.val();
    if (dropDownVal === null) {
        var errMessage = $("<p class='has-text-danger'>");
            errMessage.text("Please select an ingredient");
            ingButtonDiv.append(errMessage);
    } else {
        window.location.replace(`./search-results.html?i=${dropDownVal}`)};
});