const util = require('util');
var Api = require("./api");

var Template = module.exports = function (wiki, name) {

    Api.call(this, wiki);

    name = "Template:" + name;
    this.titles([name]);
};

util.inherits(Template, Api);

Template.prototype.data = function (done) {

    this.action("templatedata");
    this.hit(done);
};