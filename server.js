var express = require("express");
var app = express();
var ejs = require("ejs");
app.set('view engine', 'ejs');
var path = require('path');
var compression = require('compression');

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // this is used for parsing the JSON object from POST
//COMPRESSION
app.use(compression());

// UTILISER les fichiers static, telles que vues et styles...
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

//React Server
require('babel-core/register')({
    presets: ["react", "es2015"]
})
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var MyComponent = React.createFactory(require('./public/App'));
var ComponentHTML = ReactDOMServer.renderToString(MyComponent());

app.get('*', function (req, res) {
  res.render('home',{resultat: ComponentHTML});
})

app.listen(process.env.PORT || 80, function(){
  console.log("Server listening on port 80");
}); 
