// Dependencies
var bCrypt = require('bcrypt');

module.exports = function(passport, user){
	var User = user;

	//Local strategy for username/password authentication
	var LocalStrategy = require('passport-local').Strategy;

	// In order to support login sessions, Passport will serialize and deserialize 
	// user instances to and from the session.
	// Here, the user ID is serialized to the session. 
	// When subsequent requests are received, this ID is used to find the user
	// which will be restored to req.user
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	// deserialize user
	passport.deserializeUser(function(id, done) {
   	 	User.findById(id).then(function(user) {
	        if (user) { 
	            done(null, user.get());
	        } else {
	            done(user.errors, null);
	        }
	    });
	});


	//login strategy
	passport.use('login', new LocalStrategy(
		// Set what request fields our usernameField and passwordField are.
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},

		function(req, email, password, done){
			var User = user;

			// Function to compare password entered with the one in database
			var isValidPassword = function(userpass, password){
				return bCrypt.compareSync(password, userpass);
			}

			// Check if the emial exist in the database
			User.findOne({
				where: {
					email: email
				}
			}).then(function(user){

				if(!user) {
					// If user does not exist
					return done(null, false, "Email does not exist.");
				}
				// Validate password
				if(!isValidPassword(user.password, password)){
					return done(null, false, "Incorrect password.");
				}

				// If the user exist and password is correct
				// get user info
				var userinfo = user.get();

				// Return user info
				return done(null, userinfo);
			});
		}

	));
}