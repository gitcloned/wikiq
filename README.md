
## WikiQ

WikiQ allows you to query wikipedia data using WikiMedia API. WikiMedia is 
pretty well documented, this provides a NodeJS adapter to query different 
information from Wikipedia as:

 * Pages
 * Templates
 * Categories

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

    console.log("got page resp, err: %s", err);
    console.log(resp);
});
``` 

See more detail about properties [here](https://en.wikipedia.org/wiki/Special:ApiSandbox#action=categorytree&format=json&category=Malaria)