const express = require('express');
const hbs = require('hbs');


var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','hbs');
app.get('/',(req , res) => {
    // res.send({
    //     name: 'Mohit',
    //     likes: [
    //         'Biking',
    //         'Cities'
    //     ]
    // });
    res.render('home.hbs',{
        pageTitle : 'Home page',
        welcomeMessage : 'Welcome to my Website',
        currentYear : new Date().getFullYear()

    });

});
app.get('/about',(req , res) => {
    //res.send('About page');
    res.render('about.hbs',{
        pageTitle : 'About page',
        currentYear : new Date().getFullYear()

    });
});
app.get('/bad',(req , res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
app.listen(3000);