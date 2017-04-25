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



app.get('*', function (req, res) {
  res.render('home');
})

app.listen(process.env.PORT || 80, function(){
  console.log("Server listening on port 80");
}); 
