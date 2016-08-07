
var Api = module.exports = function(wiki) {

    this.wiki = wiki;

    this._format = "json";
};

Api.prototype.action = function(action) {

    if (action) {
        this._action = action;
        return this;
    }

    return this._action;
};

Api.prototype.format = function(format) {

    if (format) {
        this._format = format;
        return this;
    }

    return this._format;
};

Api.prototype.title = function(title) {

    if (title) {
        this._title = title;
        return this;
    }

    return this._title;
};

Api.prototype.page = function(page) {

    if (page) {
        this._page = page;
        return this;
    }

    return this._page;
};

Api.prototype.pageid = function(pageid) {

    if (pageid) {
        this._pageid = pageid;
        return this;
    }

    return this._pageid;
};

Api.prototype.titles = function(titles) {

    if (titles instanceof Array) {
        this._titles = titles;
        return this;
    }

    return this._titles;
};

Api.prototype.pages = function(pages) {

    if (pages instanceof Array) {
        this._pages = pages;
        return this;
    }

    return this._pages;
};

Api.prototype.pageids = function(pageids) {

    if (pageids instanceof Array) {
        this._pageids = pageids;
        return this;
    }

    return this._pageids;
};

Api.prototype.prop = function(props) {

    if (props instanceof Array) {
        this._props = props;
        return this;
    }

    return this._props;
};

Api.prototype.hit = function(done) {

    this.wiki.hit(this, done);
};

Api.prototype.params = function(params) {

    if (params instanceof Array) {
        this.__params = params;
        return this;
    }

    params = this.__params || [], api  = this;

    var action = null;
    if ((action = api.action())) {
        params.push("action=" + action);
    }

    var format = null;
    if ((format = api.format())) {
        params.push("format=" + format);
    }

    var prop = null;
    if ((prop = api.prop())) {
        params.push("prop=" + prop.join("|"));
    }

    var titles = null;
    if ((titles = api.titles())) {
        params.push("titles=" + titles.join("|"));
    }

    var pageids = null;
    if ((pageids = api.pageids())) {
        params.push("pageids=" + pageids.join("|"));
    }

    var pages = null;
    if ((pages = api.pages())) {
        params.push("pages=" + pages.join("|"));
    }

    var title = null;
    if (!titles && (title = api.title())) {
        params.push("title=" + title);
    }

    var pageid = null;
    if (!pageids && (pageid = api.pageid())) {
        params.push("pageid=" + pageid);
    }

    var page = null;
    if (!pages && (page = api.page())) {
        params.push("page=" + page);
    }

    return params;
};