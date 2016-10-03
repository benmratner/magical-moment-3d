var http = require('http'),
    express = require('express'),
    exphbs = require('express-handlebars'),
    path = require('path'),
    fs = require('fs');
var app = express();

const PORT = process.env.PORT || 3006;

var hbs = exphbs.create({
    defaultLayout: "main-layout"
})

app.engine('handlebars', exphbs({
    defaultLayout: 'main-layout'
}));
app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});

var routes = function() {
    app.get('/', getHome);
    app.get('/About', getAbout);
    app.get('/Gallery', getGallery);
    app.get('/Pricing', getPricing);
    app.get('/FAQ', getFAQ);
    app.get('/Contact', getContact);
}();



function getHome(req, res) {
    // var json = getSocialLinks();
    // res.render('home', json);
    res.render('home');

}

function getAbout(req, res) {
    res.render('home');
}

function getGallery(req, res) {
    res.render('home');
}

function getPricing(req, res) {
    res.render('home');
}

function getFAQ(req, res) {
    res.render('home');
}

function getContact(req, res) {
    res.render('home');
}

function getSocialLinks() {
    var json;
    fs.readFile("models/social-links.json", function(err, data) {
        json = JSON.parse(data);
        console.log(json);


    });
    return json;


}
