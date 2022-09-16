var cocktailInputEl = $("#cocktail-name-input");
var ingredientInputEl = $("#ingredient-name-input");
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
        var p = $("<p class='has-text-danger'>");
        p.text("Please enter a valid input");
        nameButtonDiv.append(p);
    }
});

function validatingIngInput() {
    var ingListUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  
  fetch(ingListUrl)
    .then(function(response){
      return response.json()
      
    }).then(function(data){
      // console.log(data); 
      // strIngredient1
      for (let i = 0; i < data.drinks.length; i++) {
        // console.log(data.drinks[i].strIngredient1);
      var optionEl = $("<option>");
      optionEl.text(data.drinks[i].strIngredient1);
      optionEl.val(data.drinks[i].strIngredient1);
      ingListSelectEl.append(optionEl)
        
      }
  
    })
  }
  validatingIngInput();

ingredientBtn.on("click", function(e) {
    e.preventDefault();
    var ingredientVal = ingredientInputEl.val();
    var dropDownVal = ingListSelectEl.val();
    console.log(dropDownVal);
    if(ingredientVal !=="") {
        ingredientInputEl.val("");
        window.location.replace(`./search-results.html?i=${ingredientVal}`);
    } else {
        var p = $("<p class='has-text-danger'>");
        p.text("Please enter a valid input");
        ingButtonDiv.append(p);
    }
});