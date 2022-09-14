var cocktailInputEl = $("#cocktail-name-input");
var ingredientInputEl = $("#ingredient-name-input");
var cocktailBtn = $("#cocktail-btn");
var ingredientBtn = $("#ingredient-btn");

cocktailBtn.on("click", function(e) {
    e.preventDefault();
    var cocktailVal = cocktailInputEl.val();
    if(cocktailVal !== "") {
        cocktailInputEl.val("");
        window.location.replace(`./search-results.html?s=${cocktailVal}`)
    } else {
        alert("Please enter a valid input");
    }
});

ingredientBtn.on("click", function(e) {
    e.preventDefault();
    var ingredientVal = ingredientInputEl.val();
    if(ingredientVal !=="") {
        ingredientInputEl.val("");
        window.location.replace(`./search-results.html?i=${ingredientVal}`);
    } else {
        alert("Please enter a valid input");
    }
});