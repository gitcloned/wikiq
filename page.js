const util = require('util');
var Api = require("./api");

var Page = module.exports = function (wiki, params) {

    Api.call(this, wiki);

    this._params = params;
    this.action("parse");
};

util.inherits(Page, Api);

Page.prototype.query = function (done) {

    this.action("query");
    if(!this.prop()) this.prop(["categories", "templates"]);

    var params = this._params;
    params = typeof params === "string" ? { "title": params } : params;

    if (params.titles)
        this.titles(params.titles);

    if (params.pageids)
        this.pageids(params.pageids);

    if (params.pages)
        this.pages(params.pages);

    if (params.title)
        this.titles([params.title]);

    if (params.pageid)
        this.pageids([params.pageid]);

    if (params.page)
        this.pages([params.page]);

    this.hit(done);
};

Page.prototype.parse = function (done) {

    this.action("parse");
    if(!this.prop()) this.prop(["categories", "sections", "templates"]);

    var params = this._params;
    params = typeof params === "string" ? { "page": params } : params;

    if (params.title)
        this.titl(params.title);

    if (params.pageid)
        this.pageid(params.pageid);

    if (params.page)
        this.page(params.page);

    this.hit(done);
};

Page.prototype.templates = function (done) {

    this.prop(["templates"]);
    this.parse(done);
};

Page.prototype.sections = function (done) {

    this.prop(["sections"]);
    this.parse(done);
};

Page.prototype.xml = function (done) {

    this.prop(["parsetree"]);
    this.parse(done);
};

Page.prototype.images = function (done) {

    this.prop(["images"]);
    this.parse(done);
};