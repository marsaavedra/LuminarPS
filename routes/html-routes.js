// Dependencies
var path = require("path");

module.exports = function(app){
	// Get routes for dash
 	app.get('/dashboard', function(req, res){
 		// Only autenticated user can access this page
 		// If user is not autenticated, redirect to login
		if(req.isAuthenticated()){
 			res.sendFile(path.join(__dirname, "../private/dashboard.html"));
 		} else {
 			res.redirect('/login');
 		}
 	});

 	app.get('/help', function(req, res){
 		// Only autenticated user can access this page
 		// If user is not autenticated, redirect to login
		if(req.isAuthenticated()){
 			res.sendFile(path.join(__dirname, "../private/help.html"));
 		} else {
 			res.redirect('/login');
 		}
 	});

 	app.get('/usermanual', function(req, res){
 		// Only autenticated user can access this page
 		// If user is not autenticated, redirect to login
		if(req.isAuthenticated()){
 			res.sendFile(path.join(__dirname, "../private/usermanual.html"));
 		} else {
 			res.redirect('/login');
 		}
 	});

 	app.get('/signup', function(req, res){
 		res.sendFile(path.join(__dirname, "../public/signup.html"));
 	});

 	app.get('/', function(req, res){
 		res.sendFile(path.join(__dirname, "../public/index.html"));
 	});
 	// Get routes for dashboard



 	// app.get('/login', function(req, res){
 	// 	res.sendFile(path.join(__dirname, "../public/index.html"));
 	// });

};