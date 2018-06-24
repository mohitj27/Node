const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','hbs');
app.use((req,res,next) => {
    var now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log',log + '\n',(err) => {
        if(err){
            console.log('Unable to append gto server.log');
        }
    })
    next();
});
// app.use((req,res,next) => {
//     res.render('maintenance.hbs');
// });
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