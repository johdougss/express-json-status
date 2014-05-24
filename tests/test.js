var expressJsonStatus = require('../index.js');
var HTTPStatus = expressJsonStatus.HTTPStatus;
var express = require('express'), app = express();

expressJsonStatus.format = function(statusCode, description, data){
	var a = {};
	a[statusCode] = description;
	a.data = data;
	return a;
};

app.get('/', function (req, res) {
	var info = {casa: 'novidade'};
	//res.jsons(HTTPStatus.NOT_FOUND, info);
	res.jsons(info);
});

app.listen(3000);
