var HTTPStatus = require('http-status');
var express = require('express');
var appexpress = express();
var res = appexpress.response.__proto__;
var app = exports = module.exports = {};

app.HTTPStatus = HTTPStatus;
app.format =  function(statusCode,description,data){
	var a = {
		status: statusCode,
		description: description,
	}
	if (data) a.data = data;
	return a;
};
app.message = function(status, data){
	var description = HTTPStatus[status];
	if (!description) {
		throw 'http status' + status + ' not valid, check itens in http-status';
	}
	return this.format(status, description, data);
};

res.jsons = function(obj){
	if (2 == arguments.length) {
		this.statusCode = obj;
		obj = arguments[1];
	}
	obj = app.message(this.statusCode, obj);
	this.json(obj);
};



