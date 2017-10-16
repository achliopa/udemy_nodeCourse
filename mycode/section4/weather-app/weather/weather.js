const request = require('request');

var getWeather = (lat,lng, callback) => {
    request({
    	    url: `https://api.darksky.net/forecast/173f11d5068adfa71cee4c91618dde87/${lat},${lng}?units=ca`,
    	    json: true
        }, (error,response,body) => {
        	if(!error && response.statusCode === 200) {
        		callback(undefined, {
        		    temperature: body.currently.temperature,
        		    apparentTemp: body.currently.apparentTemperature
        		});
        	} else {
        		callback(`Unable to fetch weather`);
        	}
    });
}

module.exports.getWeather = getWeather;