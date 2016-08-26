
## WikiQ

WikiQ allows you to query wikipedia data using WikiMedia API. WikiMedia is 
pretty well documented, this provides a NodeJS adapter to query different 
information from Wikipedia as:

 * [Pages](#parse-pages)
 * [Categories](#get-category-tree)
 * [Template](#query-template-info)

See detailed API [here](#api)

Install using npm:

```javascript
npm install ---save wikiq
```

### Parse Pages
 
To parse and get content of page `Zika_virus`:

```javascript
var wiki = require("wikiq")();

wiki.page("Zika_virus").parse(function(err, resp) {

    console.log("got page resp, err: %s", err);
    console.log(resp);
});
``` 

To get custom properties:

```javascript
var wiki = require("wikiq")();

wiki.page("Zika_virus").prop(["sections", "templates"])
    .parse(function(err, resp) {

    console.log("got page resp, err: %s", err);
    console.log(resp);
});
``` 

See more detail about properties [here](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=parse&format=json&page=Malaria&prop=properties%7Csections)

### Query Pages

To query page `Zika_virus`:

```javascript
var wiki = require("wikiq")();

wiki.page("Zika_virus").query(function(err, resp) {

    console.log("got page resp, err: %s", err);
    console.log(resp);
});
``` 

Similary can specify custom properties, as in parse using `prop` method

See more detail about properties [here](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=templates&titles=Zika_virus)

### Get Category Tree
 
To get the category tree

```javascript
var wiki = require("wikiq")();

wiki.category("Malaria").tree(function(err, resp) {

    console.log("got category resp, err: %s", err);
    console.log(resp);
});
``` 

See more detail about properties [here](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=categorytree&format=json&category=Malaria)

### Query Template Info
 
To get the category tree

```javascript
var wiki = require("wikiq")();

wiki.template("About").data(function(err, resp) {

    console.log("got template info resp, err: %s", err);
    console.log(resp);
});
``` 

See more detail about properties [here](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=templatedata&format=json&titles=Template%3AAbout)

## API

Wikiq API is simple, once you have required `wikiq`, you simply select the type of api:

 * [page](#page-api)
 * [category](#category-api)
 * [template](#template-api)
 * [custom](#custom-api)

Every type has these common methods:

 * __format__ (string): format of the response. Wikipedia suppports
   * json
   * none
   * php
   * xml
 * __prop__ (string or array): specify list of properties to fetch, varies as per the API type

 Also the method follows fluent interface, so you can kepp on piping API calls.

 ```javascript
 wiki.api()
       .format('json')
       .action('query')
       ...
 ```

### Page API

Page API has following methods:

 * __query__ (callback): query a page, using `action:query`
 * __parse__ (callback): parse a page, using `action:parse`
 * __templates__ (callback): gets the templates in a page
 * __sections__ (callback): gets the sections in a page
 * __xml__ (callback): gets the complete xml `parsetree` of page
 * __images__ (callback): gets the `images` of page

### Category API

Category API has following methods:

 * __tree__ (callback): gets the category tree

### Template API

Template API has following methods:

 * __data__ (callback): gets the template data

### Custom API

You can hit your own custom API or action as they are in Wikimedia:

 ```javascript
 wiki.api()
       .format('json')
       .action('query')
       .title('Malaria')
       .props('images')
       .hit(done)
 ```