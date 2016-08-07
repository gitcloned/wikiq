
var wiki = require('../wikiq')();

wiki.category("Malaria").tree(function(err, resp) {

    console.log("got page resp, err: %s", err);
    console.log(resp);
});