const util = require('util');
var Api = require("./api");

var Category = module.exports = function (wiki, name) {

    Api.call(this, wiki);

    this._name = name;
};

util.inherits(Category, Api);

Category.prototype.tree = function (done) {

    this.action("categorytree");
    this.hit(done);
};

Category.prototype.params = function () {

    var params = Api.prototype.params.call(this);

    params.push("category=" + this._name);
    return params;
};