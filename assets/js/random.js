var randomBtn = $("#rando-btn");
var saveBtn = $("#save-btn");
var drinkCard = $("#drink-card");

randomBtn.on("click", function(e) {
    e.preventDefault();
    drinkCard.attr("style", "display: block;");
})