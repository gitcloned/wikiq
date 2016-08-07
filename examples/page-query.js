
var wiki = require('../wikiq')();

wiki.page("Zika_virus").query(function(err, resp) {

    console.log("got page resp, err: %s", err);
    console.log(resp);
});