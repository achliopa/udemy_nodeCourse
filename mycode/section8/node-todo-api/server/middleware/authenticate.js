var {User} = require('./../models/user');

//middleware
var authenticate = (req,res,next) => {
	var token = req.header('x-auth');
	User.findByToken(token).then((user) => {
		if(!user) {
			//res.status(401).send();
			//replaced by promise.reject as last catch works for chained promises
			return Promise.reject();
		}
		//res.send(user);
		//for miidleware use we modify req and pass next
		req.user = user;
		req.token = token;
		next();
	}).catch((e) => {
		res.status(401).send();
	});
};

module.exports = {authenticate};