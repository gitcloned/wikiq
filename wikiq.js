
const needle = require('needle');

var Page = require('./page'),
    Category = require('./category'),
    Template = require('./template'),
    Api = require('./api');

var Wiki = function (uri) {

    this.uri = uri || "https://en.wikipedia.org/w/api.php";
};

Wiki.prototype.page = function (params) {

    return new Page(this, params);
};

Wiki.prototype.category = function (name) {

    return new Category(this, name);
};

Wiki.prototype.template = function (name) {

    return new Template(this, name);
};

Wiki.prototype.api = function () {

    return new Api(this);
};

Wiki.prototype.hit = function (api, done) {

    var params = api.params();

    var uri = this.uri + "?" + params.join("&");

    console.log(uri);
    needle.get(uri, function (error, response) {
        if (!error && response.statusCode == 200)
            return done(null, response.body);

        return done(error, response);
    });
};

module.exports = function (uri) {

    var wiki = new Wiki(uri);
    return wiki;
};