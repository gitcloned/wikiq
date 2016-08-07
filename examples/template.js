
var wiki = require('../wikiq')();

wiki.template("About").data(function(err, resp) {

    console.log("got page resp, err: %s", err);
    console.log(resp);
});