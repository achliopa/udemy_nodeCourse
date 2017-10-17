const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    // res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Sakis',
        likes: [
            'Programming',
            'Jiu-Jitsu',
            'Dogs',
            'MTB',
            'Post-Rock'
            ]
    })
});

app.get('/about', (req,res) => {
    res.send('About Page')
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Bad Request'
    });
})

// app.listen(3000);
app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Server is Up at port 3000');
});