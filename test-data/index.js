var wikipedia = require("node-wikipedia");
/*
wikipedia.page.data("Clifford_Brown", { content: true }, function(response) {
    // structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
    
    delete response.text;
    delete response.categories
    require('eyes').inspect(response);
    console.log(response);
});
*/
/*
wikipedia.revisions.all("Miles_Davis", { comment: true }, function(response) {
    // info on each revision made to Miles Davis' page
});
*/
/*
wikipedia.categories.tree(
    "Philadelphia_Phillies",
    function(tree) {
        //nested data on the category page for all Phillies players
        console.log(tree);
        require('eyes').inspect(tree);
    }
);
*/

wikipedia.page.data("Clifford_Brown", { content: false }, function(response) {
    // structured information on the page for Clifford Brown (wikilinks, references, categories, etc.)
    
    // delete response.text;
    // delete response.categories
    // require('eyes').inspect(response);
    console.log(response);
});