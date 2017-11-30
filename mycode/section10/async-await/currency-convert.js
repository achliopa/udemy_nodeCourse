// USD CAD 23

// 23 USD is worth 28 CAD. You can spend this in the following countries:

// fixer.io for currency
// restcountries.eu

// install axios

const axios = require('axios');

const getExchangeRate = (from,to) => {
	return axios.get(`https://api.fixer.io/latest?base=${from}`).then((response) => {
		return response.data.rates[to];
	});
};

const getCountries = (currencyCode) => {
	return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
			.then((response) => {
				return response.data.map((country) => country.name);
			});
};

// getExchangeRate('EUR','TRY').then((rate) => {
// 	console.log(rate);
// });

// getCountries('USD').then((countries) => {
// 	console.log(countries);
// });

// w/ Promises

const convertCurrency = (from,to, amount) => {
	return getCountries(to).then((countries) => {
		return getExchangeRate(from,to).then((rate) => {
			const exchangeAmount = amount * rate;

			return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
		});
	});
};

// convertCurrency('USD','EUR',100).then((reply) => {
// 	console.log(reply);
// });


// w/ async/await

const convertCurrencyAsAw = async (from,to, amount) => {
	const countries = await getCountries(to);
	const rate = await getExchangeRate(from,to);
	const exchangeAmount = amount * rate;
	return `${amount} ${from} is worth ${exchangeAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
};

convertCurrencyAsAw('USD','CAD',100).then((reply) => {
	console.log(reply);
});

