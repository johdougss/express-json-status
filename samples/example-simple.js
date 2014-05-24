var expressJsonStatus = require('../index.js');
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
