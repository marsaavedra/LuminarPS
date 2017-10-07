// Dependencies
var path = require("path");

module.exports = function(app){
	// Get routes for dash
 	app.get('/', function(req, res){
 		// Only autenticated user can access this page
 		// If user is not autenticated, redirect to login
		if(req.isAuthenticated()){
 			res.sendFile(path.join(__dirname, "../private/dashboard.html"));
 		} else {
 			res.redirect('/login');
 		}
 	});

 	// Get routes for home
	app.get('/login', function(req, res){
 		res.sendFile(path.join(__dirname, "../public/index.html"));
 	});

 	app.get('/login', function(req, res){
 		res.sendFile(path.join(__dirname, "../public/index.html"));
 	});

}