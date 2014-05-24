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