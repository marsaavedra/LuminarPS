$(document).ready(function(){
	function submitUser(){
		// Create an object with input fields values
		var newUser = {
			username: $("#username").val().trim(),
			password: $("#password").val().trim()
		};

		// Post the user info to signup
		$.post("/signup", newUser, function(res){
			// Check response for error or messages
			if(res.error) throw error;

			if(res.msg){
				// If server responds with a message is because email already exist
				// create a p tag, add error text, add class alert
				$('.alert').remove();
				var $p = $("<p>");
				$p.text("That email is already taken.").addClass("alert alert-danger");

				// Append the p tag to div with id = msg
				$("#signUpMsg").append($p);
				$("#username").focus();
			} else {
				// If singup successfully redirect to dash page
				window.location.href = "/dashboard";
			}
		});
	}

	$("#signupForm").validate({
		submitHandler: function(form) {
		    submitUser();
		},
		onkeyup: false,
		errorClass: 'text-danger',
		rules: {
			
			username: {
				required: true,
				username: true,
			},
			password: {
				required: true,
				minlength: 6
			},
			confirmPassword: {
				required: true,
				minlength: 6,
				equalTo: "#password"
			}
		},
		messages: {
			
			username:{
				required: "Enter a username.",
				username: "Must not be left blank"
			},
			password: {
				required: "Enter your password.",
				minlength: "Password must be at least 6 characters."
			},
			confirmPassword: {
				required: "Confirm your password.",
				minlength: "Password must be at least 6 characters.",
				equalTo: "Enter the same password as above."
			}
		}
	});
})