// Dependencies
var path = require("path");

module.exports = function(app){
	// Get routes for dash
 	app.get('/', function(req, res){
 		// Only autenticated user can access this page
 		// If user is not autenticated, redirect to login
		// if(req.isAuthenticated()){
 			res.sendFile(path.join(__dirname, "../public/index.html"));
 		// } else {
 		// 	res.redirect('/login');
 		// }
 	});

 	// Get routes for dashboard
	app.get('/dashboard', function(req, res){
 		res.sendFile(path.join(__dirname, "../private/dashboard.html"));
 	});

 	app.get('/help', function(req, res){
 		res.sendFile(path.join(__dirname, "../private/help.html"));
 	});


 	app.get('/usermanual', function(req, res){
 		res.sendFile(path.join(__dirname, "../private/usermanual.html"));
 	});
 	// app.get('/login', function(req, res){
 	// 	res.sendFile(path.join(__dirname, "../public/index.html"));
 	// });

};