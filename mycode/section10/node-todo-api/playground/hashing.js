const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10, (err,salt) => {
// 	bcrypt.hash(password, salt, (err,hash) => {
// 		console.log(hash);
// 	});
// });

var hashedPassword = '$2a$10$kY1obh3wk50MZEf3cA4rkeXcLx4C1NYvMN25JBsYSBdpjSawLr2ey';
bcrypt.compare('password', hashedPassword, (err,res) => {
	console.log(res);
});


// CRYPTO IMPLEMENTATION

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();


// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4   
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };


// //MAN IN THE MIDDLE ATTACK
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }

// JWT
// var data = {
//     id: 10
// };

// var token = jwt.sign(data, 'somesecret');
// console.log(token);

// var decoded =  jwt.verify(token, 'somesecret');
// console.log('decoded ', decoded);

