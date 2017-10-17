const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;
	
var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response) => {
	if(response.data.status === 'ZERO_RESULTS') {
		throw new Error('Address not found');
	} else {
		var lat = response.data.results[0].geometry.location.lat;
		var lng = response.data.results[0].geometry.location.lng;
		var weatherUrl =  `https://api.darksky.net/forecast/173f11d5068adfa71cee4c91618dde87/${lat},${lng}?units=ca`;
		console.log(`At ${response.data.results[0].formatted_address} the temperature`);
		return axios.get(weatherUrl);
	}
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`is currently ${temperature} oC and it feels like ${apparentTemperature} oC.`);
})
.catch((e) => {
	if(e.code === 'ENOTFOUND') {
		console.log('Unable to connect to Google Server');
	} else {
		console.log(e.message);
	}
});

