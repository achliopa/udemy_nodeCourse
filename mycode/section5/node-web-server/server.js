const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// if here bypasses the middleware had to put it below in order of code execution
// app.use(express.static(__dirname + '/public'));

// middleware
app.use((req, res, next) => {
   var now = new Date().toString();
   var log = `${now}: ${req.method} ${req.url}`;
   console.log(log);
   fs.appendFile('server.log', log + '\n', (err) => {
       if(err)  {
           console.log('Uanble to append to server.log');
       }
   });
   next();
});

app.use((req,res,next) => {
    res.render('maintenance.hbs');
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear(); 
});

hbs.registerHelper('screamIt', (text) => {
   return  text.toUpperCase();
});

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
    // res.send('<h1>Hello Express</h1>');
    // res.send({
    //     name: 'Sakis',
    //     likes: [
    //         'Programming',
    //         'Jiu-Jitsu',
    //         'Dogs',
    //         'MTB',
    //         'Post-Rock'
    //         ]
    // })
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        message: 'Welcome to our Site!'
    });
});

app.get('/about', (req,res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Bad Request'
    });
})

app.listen(port, ip, () => {
    console.log('Server is Up at port 3000');
});