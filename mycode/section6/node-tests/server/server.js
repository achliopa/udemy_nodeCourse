const express = require('express');

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';

app.get('/', (req,res) => {
    res.send('Hello world!');
});

app.listen(port, ip, () => {
   console.log('App is running...'); 
});