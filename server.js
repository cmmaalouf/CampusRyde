// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/login", function(request, response) {
  response.sendFile(__dirname + "/views/login.html");
});

app.get("/signup", function(request, response) {
  response.sendFile(__dirname + "/views/signup.html");
});

app.get("/ride", function(request, response) {
  response.sendFile(__dirname + "/views/ride.html");
});

app.get('/ride/:userId', function (req, res) {
  response.sendFile(__dirname + "/views/ride.html?userId="+req.params.userId)
})

app.get("/ride/board", function(request, response) {
  response.sendFile(__dirname + "/views/board.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
