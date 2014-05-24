express-json-status
===============

## Installation

```sh
npm install --save json-response
```

```js
var expressJsonStatus = require('express-json-status');
var HTTPStatus = expressJsonStatus.HTTPStatus;
```
```js
res.json(500, {msg:'sucess'});
```

##Example - simple 

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
	res.json({msg:'sucess'})
});

app.listen(3000);


```
output http://localhost:3000/: 

```json
{
	status: 200,
	description: "OK",
	data: {
		name: "john"
	}
}

```
output http://localhost:3000/add: 
```json
{
	status: 500
	description: "Internal Server Error"
	data: {
		error: 'user null'
	}
}

```

##Example - Custom output json