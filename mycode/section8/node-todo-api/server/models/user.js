const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

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

// override method
UserSchema.methods.toJSON = function() {
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'email']);
};

UserSchema.statics.findByToken = function(token) {
	var User = this;
	var decoded;

	try {
		var decoded = jwt.verify(token, 'abc123');
	} catch(e) {
		// return new Promise((resolve,reject) => {
		// 	reject();
		// });
		//one liner
		return Promise.reject();
	}

	return User.findOne({
		'_id': decoded._id,
		'tokens.token': token,
		'tokens.access': 'auth'
	});
};


var User = mongoose.model('User', UserSchema);

module.exports = {User};