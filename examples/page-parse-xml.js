
var wiki = require('../wiki')();

wiki.page("Zika_virus").xml(function(err, resp) {

    console.log("got page resp, err: %s", err);
    console.log(resp);
});