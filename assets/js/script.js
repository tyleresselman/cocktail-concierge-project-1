var cocktailInputEl = $("#cocktail-name-input");
var ingredientInputEl = $("#ingredient-name-input");
var cocktailBtn = $("#cocktail-btn");
var ingredientBtn = $("#ingredient-btn");
var nameButtonDiv = $(".name-button-div");
var ingButtonDiv = $(".ing-button-div");

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

ingredientBtn.on("click", function(e) {
    e.preventDefault();
    var ingredientVal = ingredientInputEl.val();
    if(ingredientVal !=="") {
        ingredientInputEl.val("");
        window.location.replace(`./search-results.html?i=${ingredientVal}`);
    } else {
        var p = $("<p class='has-text-danger'>");
        p.text("Please enter a valid input");
        ingButtonDiv.append(p);
    }
});