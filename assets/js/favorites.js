var storedDrinks = JSON.parse(localStorage.getItem("stored-drinks"));
var favoritesList = $("#favorites-list") 


console.log(storedDrinks);

for (let i = 0; i < storedDrinks.length; i++) {
    var drinkIdUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${storedDrinks[i]}`

    console.log(drinkIdUrl);

    fetch(drinkIdUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
        displayInfo(data);
        console.log(data);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to CocktailDB');
    });

    
}

function displayInfo(info) {
      var drinkId = info.drinks[0].idDrink;
      var cocktailName = info.drinks[0].strDrink;
      var glassType = info.drinks[0].strGlass;
      var instructions = info.drinks[0].strInstructions;
      var drinkImgUrl = info.drinks[0].strDrinkThumb;
      var drinkThumbUrl = info.drinks[0].strDrinkThumb + "/preview";
      var drinkCategory = info.drinks[0].strCategory;
      var drinkIngredient1 = info.drinks[0].strIngredient1;
      var drinkIngredient2 = info.drinks[0].strIngredient2;
      var drinkIngredient3 = info.drinks[0].strIngredient3;
      var drinkIngredient4 = info.drinks[0].strIngredient4;
      var drinkIngredient5 = info.drinks[0].strIngredient5;
      var drinkIngredient6 = info.drinks[0].strIngredient6;
      var drinkIngredient7 = info.drinks[0].strIngredient7;
      var drinkIngredient8 = info.drinks[0].strIngredient8;
      var drinkIngredient9 = info.drinks[0].strIngredient9;
      var drinkIngredient10 = info.drinks[0].strIngredient10;
      var drinkMeasure1 = info.drinks[0].strMeasure1;
      var drinkMeasure2 = info.drinks[0].strMeasure2;
      var drinkMeasure3 = info.drinks[0].strMeasure3;
      var drinkMeasure4 = info.drinks[0].strMeasure4;
      var drinkMeasure5 = info.drinks[0].strMeasure5;
      var drinkMeasure6 = info.drinks[0].strMeasure6;
      var drinkMeasure7 = info.drinks[0].strMeasure7;
      var drinkMeasure8 = info.drinks[0].strMeasure8;
      var drinkMeasure9 = info.drinks[0].strMeasure9;
      var drinkMeasure10 = info.drinks[0].strMeasure10;
      // var cocktailInfoCard = $("<section class='card'>");
      // var cardImgDisplay = $(`<img src=${drinkImgUrl}>`);
      var imgThumbDisplay = $(`<img src=${drinkThumbUrl}>`);
      // var cardHeader = $("<h1 class='card-header'>");
      // var cardContent = $("<section class='card-content'>");
      var cocktailNameEl = $("<td class='title is-3'>");
      var cocktailRow = $("<tr>");
      var cocktailImgEl = $("<td>");
      // var viewBtnCol = $("<td>")
      var removeBtnCol = $("<td>");
      // var viewBtnEl = $("<button class='view-btn' data-id='"+drinkId+"'>")
      var removeBtnEl = $("<button class='remove-btn' data-id='" + drinkId + "'>");
      var drinkDetails = $("<td>");
      var ingredientStEl = $("<p class='title is-5'>");
      //this^is the subtitle ingredients
      var ingredientListEl = $("<ul class=' subtitle is-6 list-style' id='ingredient-list'>");
      //this is the actual list
      var instructionStEl = $("<p class='title is-5' >");
      //this is the subtitle ''
      var instructionEl = $("<p class='subtitle is-6' id='cocktail-instr'>");
      var glasswareStEl = $("<p class='title is-5'>");
      var glassSpan = $("<span class='subtitle is-6'>")
      if (drinkCategory !== "shot") {
        console.log(cocktailName);
        cocktailNameEl.text(cocktailName);
        // viewBtnEl.text("View")
        removeBtnEl.text("Remove");
        removeBtnEl.addClass("button is-danger");
        removeBtnEl.attr("style", "padding: 10px");
        removeBtnCol.append(removeBtnEl);
        removeBtnCol.attr("style", "text-align: center; vertical-align: middle;");
        glassSpan.text(glassType)
        // viewBtnCol.append(viewBtnEl)
        ingredientStEl.text("Ingredients");
        instructionStEl.text("Instructions");
        instructionEl.text(instructions);
        glasswareStEl.text("Glassware: ");
        glasswareStEl.append(glassSpan);
        drinkDetails.append(ingredientStEl);
        drinkDetails.append(ingredientListEl)
        drinkDetails.append(instructionStEl);
        drinkDetails.append(instructionEl);
        drinkDetails.append(glasswareStEl);
        // create li elements and append them then copy and paste items 1-10 for the ingr+measure
  
        cocktailImgEl.append(imgThumbDisplay);
        cocktailRow.append(cocktailImgEl);
        cocktailRow.append(cocktailNameEl);
        // cocktailRow.append(viewBtnCol)
        cocktailRow.append(drinkDetails);
        cocktailRow.append(removeBtnCol);
        favoritesList.append(cocktailRow);
        var li1 = $("<li>");
        var li2 = $("<li>");
        var li3 = $("<li>");
        var li4 = $("<li>");
        var li5 = $("<li>");
        var li6 = $("<li>");
        var li7 = $("<li>");
        var li8 = $("<li>");
        var li9 = $("<li>");
        var li10 = $("<li>");
  
        //Item 1
        if (drinkMeasure1 === null) {
          drinkMeasure1 = "";
        };
        if (drinkIngredient1 === null) {
          drinkIngredient1 === "";
        }
        if (drinkMeasure1 !== null || drinkIngredient1 !== null) {
          li1.text(`${drinkMeasure1} ${drinkIngredient1}`);
        }
        ingredientListEl.append(li1);
        if ((drinkMeasure1 === null && drinkIngredient1 === null) || (drinkMeasure1 === "" && drinkIngredient1 === null) || (drinkMeasure1 === null && drinkIngredient1 === "")) {
          li1.remove();
        };
  
        //Item 2
        if (drinkMeasure2 === null) {
          drinkMeasure2 = "";
        };
        if (drinkIngredient2 === null) {
          drinkIngredient2 === "";
        }
        if (drinkMeasure2 !== null || drinkIngredient2 !== null) {
          li2.text(`${drinkMeasure2} ${drinkIngredient2}`);
        }
        ingredientListEl.append(li2);
        if ((drinkMeasure2 === null && drinkIngredient2 === null) || (drinkMeasure2 === "" && drinkIngredient2 === null) || (drinkMeasure2 === null && drinkIngredient2 === "")) {
          li2.remove();
        };
  
        //Item 3
        if (drinkMeasure3 === null) {
          drinkMeasure3 = "";
        };
        if (drinkIngredient3 === null) {
          drinkIngredient3 === "";
        }
        if (drinkMeasure3 !== null || drinkIngredient3 !== null) {
          li3.text(`${drinkMeasure3} ${drinkIngredient3}`);
        }
        ingredientListEl.append(li3);
        if ((drinkMeasure3 === null && drinkIngredient3 === null) || (drinkMeasure3 === "" && drinkIngredient3 === null) || (drinkMeasure3 === null && drinkIngredient3 === "")) {
          li3.remove();
        };
  
        //Item 4
        if (drinkMeasure4 === null) {
          drinkMeasure4 = "";
        };
        if (drinkIngredient4 === null) {
          drinkIngredient4 === "";
        }
        if (drinkMeasure4 !== null || drinkIngredient4 !== null) {
          li4.text(`${drinkMeasure4} ${drinkIngredient4}`);
        }
        ingredientListEl.append(li4);
        if ((drinkMeasure4 === null && drinkIngredient4 === null) || (drinkMeasure4 === "" && drinkIngredient4 === null) || (drinkMeasure4 === null && drinkIngredient4 === "")) {
          li4.remove();
        };
  
        //Item 5
        if (drinkMeasure5 === null) {
          drinkMeasure5 = "";
        };
        if (drinkIngredient5 === null) {
          drinkIngredient5 === "";
        }
        if (drinkMeasure5 !== null || drinkIngredient5 !== null) {
          li5.text(`${drinkMeasure5} ${drinkIngredient5}`);
        }
        ingredientListEl.append(li5);
        if ((drinkMeasure5 === null && drinkIngredient5 === null) || (drinkMeasure5 === "" && drinkIngredient5 === null) || (drinkMeasure5 === null && drinkIngredient5 === "")) {
          li5.remove();
        };
  
        //Item 6
        if (drinkMeasure6 === null) {
          drinkMeasure6 = "";
        };
        if (drinkIngredient6 === null) {
          drinkIngredient6 === "";
        }
        if (drinkMeasure6 !== null || drinkIngredient6 !== null) {
          li6.text(`${drinkMeasure6} ${drinkIngredient6}`);
        }
        ingredientListEl.append(li6);
        if ((drinkMeasure6 === null && drinkIngredient6 === null) || (drinkMeasure6 === "" && drinkIngredient6 === null) || (drinkMeasure6 === null && drinkIngredient6 === "")) {
          li6.remove();
        };
  
        //Item 7
        if (drinkMeasure7 === null) {
          drinkMeasure7 = "";
        };
        if (drinkIngredient7 === null) {
          drinkIngredient7 === "";
        }
        if (drinkMeasure7 !== null || drinkIngredient7 !== null) {
          li7.text(`${drinkMeasure7} ${drinkIngredient7}`);
        }
        ingredientListEl.append(li7);
        if ((drinkMeasure7 === null && drinkIngredient7 === null) || (drinkMeasure7 === "" && drinkIngredient7 === null) || (drinkMeasure7 === null && drinkIngredient7 === "")) {
          li7.remove();
        };
  
        //Item 8
        if (drinkMeasure8 === null) {
          drinkMeasure8 = "";
        };
        if (drinkIngredient8 === null) {
          drinkIngredient8 === "";
        }
        if (drinkMeasure8 !== null || drinkIngredient8 !== null) {
          li8.text(`${drinkMeasure8} ${drinkIngredient8}`);
        }
        ingredientListEl.append(li8);
        if ((drinkMeasure8 === null && drinkIngredient8 === null) || (drinkMeasure8 === "" && drinkIngredient8 === null) || (drinkMeasure8 === null && drinkIngredient8 === "")) {
          li8.remove();
        };
  
        //Item 9
        if (drinkMeasure9 === null) {
          drinkMeasure9 = "";
        };
        if (drinkIngredient9 === null) {
          drinkIngredient9 === "";
        }
        if (drinkMeasure9 !== null || drinkIngredient9 !== null) {
          li9.text(`${drinkMeasure9} ${drinkIngredient9}`);
        }
        ingredientListEl.append(li9);
        if ((drinkMeasure9 === null && drinkIngredient9 === null) || (drinkMeasure9 === "" && drinkIngredient9 === null) || (drinkMeasure9 === null && drinkIngredient9 === "")) {
          li9.remove();
        };
  
        //Item 10
        if (drinkMeasure10 === null) {
          drinkMeasure10 = "";
        };
        if (drinkIngredient10 === null) {
          drinkIngredient10 === "";
        }
        if (drinkMeasure10 !== null || drinkIngredient10 !== null) {
          li10.text(`${drinkMeasure10} ${drinkIngredient10}`);
        }
        ingredientListEl.append(li10);
        if ((drinkMeasure10 === null && drinkIngredient10 === null) || (drinkMeasure10 === "" && drinkIngredient10 === null) || (drinkMeasure10 === null && drinkIngredient10 === "")) {
          li10.remove();
        };
  
      }
  
  
    }

    favoritesList.on("click", ".remove-btn", function (e) {
        e.preventDefault();
        // console.log($(e.target).text());
        $(e.target).parent().parent().remove();
        console.log(storedDrinks);
        var index = storedDrinks.indexOf($(e.target).attr("data-id"))
        console.log(index);
        if (index > -1) {
            storedDrinks.splice(index, 1)
        }

        console.log(storedDrinks);

        localStorage.setItem("stored-drinks", JSON.stringify(storedDrinks));
        
    })