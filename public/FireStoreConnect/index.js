/*
/Users/alyssaschilke/astral-depth-266901-firebase-adminsdk-a395w-64c0c729e8.json

const admin = require('firebase-admin');

let serviceAccount = require('../astral-depth-266901-firebase-adminsdk-a395w-64c0c729e8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
*/
/*
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
*/
var firebaseConfig = {
  apiKey: "AIzaSyBT3OJGVbazBLVUQm_YXQWZNN5rvmWwLjU",
  authDomain: "astral-depth-266901.firebaseapp.com",
  databaseURL: "https://astral-depth-266901.firebaseio.com",
  projectId: "astral-depth-266901",
  storageBucket: "astral-depth-266901.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//New User
var database = firebase.database();
$("#submitUser").on("click", function(event) {
  // Prevent the default form submit behavior
  event.preventDefault();

  // Grabs user input
  var newEmail = $("#newEmail").val().trim();
  var newFirstName = $("#newFirstName").val().trim();
  var newLastName = $("#newLastName").val().trim();
  var newPassword = $("#newPassword").val().trim();

  var newUser = {
    email: newEmail,
    fname: newFirstName,
    lname: newLastName,
    pwd: newPassword
  };

  database.ref("users").push(newUser);

  console.log(newUser.email);
  console.log(newUser.fname);
  console.log(newUser.lname);
  console.log(newUser.pwd);

  // Alert
  alert("User successfully added");

  // Clears all of the text-boxes
  $("#newEmail").val("");
  $("#newFirstName").val("");
  $("#newLastName").val("");
  $("#newPassword").val("");
});



//login
$("#loginSubmit").on("click", function(event) {
  // Prevent the default form submit behavior
  event.preventDefault();

  // Grabs user input
  var newEmail = $("#userEmail").val().trim();
  var newFirstName = $("#userPassword").val().trim();


  var ref = database.ref();
  var  result = ref.child('users').orderByChild('email').once("value", function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(data) {
        console.log(data.key);
    });
});

});
