express-json-status
===============

Format the json response including HTTP status and description

## Installation

```sh
npm install --save json-response
```

```js
var expressJsonStatus = require('express-json-status');
var HTTPStatus = expressJsonStatus.HTTPStatus;
```

##Usage

```js
require('express-json-status');
var express = require('express'), app = express();

app.get('/', function (req, res) {
	var user = {name: 'john'};
	res.jsons(user);
});

app.get('/add', function (req, res) {
	var user = null;
	if(user==null)
		return res.jsons(500, {error: 'user null'});
	res.jsons({msg:'sucess'})
});

app.listen(3000);


```
output [http://localhost:3000/](http://localhost:3000/): 

```json
{
	"status": "200",
	"description": "OK",
	"data": {
		"name": "john"
	}
}

```
output [http://localhost:3000/add](http://localhost:3000/add): 
```json
{
	"status": "500",
	"description": "Internal Server Error",
	"data": {
		"error": "user null"
	}
}

```


##Custom output json

```js
var expressJsonStatus = require('express-json-status');
var HTTPStatus = expressJsonStatus.HTTPStatus;
var express = require('express'), app = express();


expressJsonStatus.format = function(statusCode, description, data){
	var a = {};
	a[statusCode] = description;
	a.data = data;
	return a;
};

app.get('/addformat', function (req, res) {
	var user = null;
	if(user==null)
		return res.jsons(HTTPStatus.INTERNAL_SERVER_ERROR, {error: 'user null'});
	res.json({msg:'sucess'})
});

app.listen(3000);

```
output [http://localhost:3000/addformat](http://localhost:3000/addformat): 
```json
{
	"500": "Internal Server Error",
	"data": {
		"error": "user null"
	}
}
```

##HTTPStatus 

Utility to interact with HTTP status code.

```js
var status = HTTPStatus.INTERNAL_SERVER_ERROR; //500

```

```
200: OK 
400: BAD_REQUEST
401: UNAUTHORIZED
404: NOT_FOUND
500: INTERNAL_SERVER_ERROR 
```
[ALL LIST](https://github.com/wdavidw/node-http-status/blob/master/lib/index.js): 
