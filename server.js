var express = require("express");
var app = express();
var ejs = require("ejs");
app.set('view engine', 'ejs');
var path = require('path');
var compression = require('compression');
var session = require("express-session");
//Initialisation de la session
app.use(
 session({ 
  secret: 'a4f8071f-c873-4447-8ee2',
  resave: false,
  saveUninitialized: false,
 })
);
session.state = null;

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
  console.log(session.state);
  res.render('home',{state : session.state});
})

app.post("/stateChange", (req, res) => {
if (req.body && req.body.state){
    console.log(req.body.state);
  session.state = req.body.state;
  res.json({value :"State envoyé au serveur"});
}
else
  console.log("Pas de req.body");
});

app.listen(process.env.PORT || 80, function(){
  console.log("Server listening on port 80");
}); 
