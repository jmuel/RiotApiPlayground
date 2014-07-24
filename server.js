
var express = require('express');
var request = require('request');
var _ = require('underscore');
var app = express();


var key = "44b37d42-2e7e-4006-8f65-34b8ef8ca591";


app.engine('html', require('ejs').renderFile);
app.listen(1337);

app.get("/api/lol/*", function(req, res) {
	var url = "https://na.api.pvp.net";
	url += req.path + addQuery(_.extend({api_key: key}, req.query));
	console.log(url);
	req.pipe(request(url)).pipe(res);
});

app.get("/index", function(req, res) {
	res.render("test.html");
});

app.use('/static', express.static(__dirname + '/static'));

app.use('/app', express.static(__dirname + '/app'));

var addQuery = function(params) {
	var queryString = _.reduce(params, function(components, value, key) {
		components.push(key + '=' + encodeURIComponent(value));
		return components;
	},
	[]
	).join('&');

	if(queryString.length > 0){
		queryString = '?' + queryString;
	}
	return queryString;

} 

console.log('Server running at http://127.0.0.1:1337/');