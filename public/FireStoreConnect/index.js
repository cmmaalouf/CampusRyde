/*
/Users/alyssaschilke/REMOVED-firebase-adminsdk-a395w-64c0c729e8.json

const admin = require('firebase-admin');

let serviceAccount = require('../REMOVED-firebase-adminsdk-a395w-64c0c729e8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
*/

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "REMOVED",
 authDomain: "REMOVED.firebaseapp.com",
 databaseURL: "https://REMOVED.firebaseio.com",
 storageBucket: "REMOVED.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();

writeUserData("userId", "fname", "lname", "email", "pwd" );

function writeUserData(userId, fname, lname, email, pwd ) {
  firebase.database().ref('users/' + userId).set({
    username: email,
    first_name: fname,
    last_name: lname,
    password: pwd
  });
}
