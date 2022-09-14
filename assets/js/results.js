// var searchResults = $("#");

// Store variable that grabs first letter after query in URL to determine whether it is a cocktail search("s") or ingredient search("i")
var searchType = location.search.split("=")[0].split("")[1];

// Create fetch for cocktail type search query
if (searchType === "s") {
    console.log("This is a cocktail search")
};

if (searchType === "i") {
    console.log("This is an ingredient search")
}