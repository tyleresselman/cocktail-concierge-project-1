var searchResults;

// Store variable that grabs first letter after query in URL to determine whether it is a cocktail search("s") or ingredient search("i")
var searchType = location.search.split("=")[0].split("")[1];
var searchQuery = location.search.split("=")[1];
var cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`;
var ingredientUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchQuery}`;
var cocktailByIdUrl;

// Create fetch for cocktail type search query
if (searchType === "s") {
  console.log("This is a cocktail search");
    fetch(cocktailUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
        displayInfo(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to CocktailDB');
    });
    
};

// Create fetch for ingredient type search query
if (searchType === "i") {
    console.log("This is an ingredient search");
    fectch(ingredientUrl)
    .then(function (response){
      if (response.ok){
        response.json().then(function (data){
          displayInfo(data);
        });
      } else{
        alert('Error' + response.statusText);
      }
    })
    .catch(function (error){
      alert('unable to connect to CocktailDB')
    })
}

function displayInfo(info) {
    console.log(info.drinks);
    for(var i = 0; i < info.drinks.length; i++) {
        var drinkId = info.drinks[i].idDrink;
        var cocktailName = info.drinks[i].strDrink;
        var typeGlass = info.drinks[i].strGlass;
        var instructions = info.drinks[i].strInstructions;
        var drinkImgUrl = info.drinks[i].strDrinkThumb;
        var drinkThumbUrl = info.drinks[i].strDrinkThumb + "/preview";
        var drinkCategory = info.drinks[i].strCategory;
        var drinkIngredient1 = info.drinks[i].strIngredient1;
        var drinkIngredient2 = info.drinks[i].strIngredient2;
        var drinkIngredient3 = info.drinks[i].strIngredient3;
        var drinkIngredient4 = info.drinks[i].strIngredient4;
        var drinkIngredient5 = info.drinks[i].strIngredient5;
        var drinkIngredient6 = info.drinks[i].strIngredient6;
        var drinkMeasure1 = info.drinks[i].strMeasure1;
        var drinkMeasure2 = info.drinks[i].strMeasure2;
        var drinkMeasure3 = info.drinks[i].strMeasure3;
        var drinkMeasure4 = info.drinks[i].strMeasure4;
        var drinkMeasure5 = info.drinks[i].strMeasure5;
        var drinkMeasure6 = info.drinks[i].strMeasure6;
        var cocktailInfoCard = $("<section class='card'>");
        var cardImgDisplay = $(`<img src=${drinkImgUrl}>`);
        var imgThumbDisplay = $(`<img src=${drinkThumbUrl}>`);
        var cardHeader = $("<h1 class='card-header'>");
        var cardContent = $("<section class='card-content'>");
        var cocktailNameEl = $("<td class='title is-3'>")
        var cocktailRow = $("<tr>")
        var cocktailImgEl = $("<td>")
        // var viewBtnCol = $("<td>")
        var saveBtnCol =$("<td>")
        // var viewBtnEl = $("<button class='view-btn' data-id='"+drinkId+"'>")
        var saveBtnEl = $("<button class='save-btn' data-id='"+drinkId+"'>")
        var resultList = $("#result-list")


        console.log(cocktailName);
        cocktailNameEl.text(cocktailName)
        // viewBtnEl.text("View")
        saveBtnEl.text("Save")
        saveBtnCol.append(saveBtnEl)
        // viewBtnCol.append(viewBtnEl)
        cocktailImgEl.append(imgThumbDisplay)
        cocktailRow.append(cocktailImgEl)
        cocktailRow.append(cocktailNameEl)
        // cocktailRow.append(viewBtnCol)
        cocktailRow.append(saveBtnCol)
        resultList.append(cocktailRow)

      }
   
    
    

    

}