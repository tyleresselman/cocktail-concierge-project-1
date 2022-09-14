var randomBtn = $("#rando-btn");
var saveBtn = $("#save-btn");
var drinkCard = $("#drink-card");
var randomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
var cocktailNameEl = $("#cocktail-name");
var ingredientListEl = $("#ingredient-list");
var instructionsEl = $("#cocktail-instr");
var glassTypeEl = $("#glass-type");
var cocktailImgEl = $("#cocktail-image");
var storedId = JSON.parse(localStorage.getItem("drink-id")) || [];


randomBtn.on("click", function (e) {
    e.preventDefault();
    drinkCard.attr("style", "display: block;");
    fetch(randomApiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        // console.log(data)
                        displayDrink(data)
                    })
            }
        })
});

saveBtn.on("click", function(e) {
    e.preventDefault();
    var dataId = saveBtn.attr("data-id")
    storedId.push(dataId);
    localStorage.setItem("drink-id", JSON.stringify(storedId))
})

function displayDrink(info) {
    // console.log(info.drinks);
    ingredientListEl.empty();
    var drinkId = info.drinks[0].idDrink;
    var cocktailName = info.drinks[0].strDrink;
    var glassType = info.drinks[0].strGlass;
    var instructions = info.drinks[0].strInstructions;
    var drinkImgUrl = info.drinks[0].strDrinkThumb;
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
    if (drinkCategory !== "shot") {
        saveBtn.attr("data-id", drinkId);    
        cocktailNameEl.text(cocktailName);
        cocktailImgEl.attr("src", drinkImgUrl);
        instructionsEl.text(instructions);
        glassTypeEl.text(glassType);
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
        if ((drinkMeasure1 === null && drinkIngredient1 === null) || (drinkMeasure1 === "" && drinkIngredient1 === null) || (drinkMeasure1 === null && drinkIngredient1 === "")) {
            return;
        };
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

        //Item 2
        if ((drinkMeasure2 === null && drinkIngredient2 === null) || (drinkMeasure2 === "" && drinkIngredient2 === null) || (drinkMeasure2 === null && drinkIngredient2 === "")) {
            return;
        };
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

        //Item 3
        if ((drinkMeasure3 === null && drinkIngredient3 === null) || (drinkMeasure3 === "" && drinkIngredient3 === null) || (drinkMeasure3 === null && drinkIngredient3 === "")) {
            return;
        };
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

        //Item 4
        if ((drinkMeasure4 === null && drinkIngredient4 === null) || (drinkMeasure4 === "" && drinkIngredient4 === null) || (drinkMeasure4 === null && drinkIngredient4 === "")) {
            return;
        };
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

        //Item 5
        if ((drinkMeasure5 === null && drinkIngredient5 === null) || (drinkMeasure5 === "" && drinkIngredient5 === null) || (drinkMeasure5 === null && drinkIngredient5 === "")) {
            return;
        };
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

        //Item 6
        if ((drinkMeasure6 === null && drinkIngredient6 === null) || (drinkMeasure6 === "" && drinkIngredient6 === null) || (drinkMeasure6 === null && drinkIngredient6 === "")) {
            return;
        };
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

        //Item 7
        if ((drinkMeasure7 === null && drinkIngredient7 === null) || (drinkMeasure7 === "" && drinkIngredient7 === null) || (drinkMeasure7 === null && drinkIngredient7 === "")) {
            return;
        };
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

        //Item 8
        if ((drinkMeasure8 === null && drinkIngredient8 === null) || (drinkMeasure8 === "" && drinkIngredient8 === null) || (drinkMeasure8 === null && drinkIngredient8 === "")) {
            return;
        };
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

        //Item 9
        if ((drinkMeasure9 === null && drinkIngredient9 === null) || (drinkMeasure9 === "" && drinkIngredient9 === null) || (drinkMeasure9 === null && drinkIngredient9 === "")) {
            return;
        };
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

        //Item 10
        if ((drinkMeasure10 === null && drinkIngredient10 === null) || (drinkMeasure10 === "" && drinkIngredient10 === null) || (drinkMeasure10 === null && drinkIngredient10 === "")) {
            return;
        };
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

    } else {
        console.log("Run again")
        fetch(randomApiUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json()
                        .then(function (data) {
                            displayDrink(data)
                        })
                }
            })
    }
}