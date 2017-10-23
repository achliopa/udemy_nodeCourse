const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 3,
		trim: true,
		unique: true,
		validate: {
			// validator: (value) => {
			// 	return validator.isEmail(value);
			// },
			// one liner 
			validator: validator.isEmail,
			message: '{VALUE} is not a valid emal'
		}
	},
	password: {
		type: String,
		require: true,
		minlength: 6
	},
	tokens: [{
		access: {
			type: String,
			require: true
		},
		token: {
			type: String,
			require: true
		}
	}]
});

// Instance methods

// we do not use ES6 style arrow function because they do not bind to 'this' object
UserSchema.methods.generateAuthToken = function() {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
	user.tokens.push({access,token});
	// this syntax is used for chaining in express with next..
	return user.save().then(() => {
		return 	token;
	});
}


var User = mongoose.model('User', UserSchema);

module.exports = {User};