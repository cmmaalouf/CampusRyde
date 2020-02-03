var firebaseConfig = {
  apiKey: "YOUR KEY HERE",
  authDomain: "astral-depth-266901.firebaseapp.com",
  databaseURL: "https://astral-depth-266901.firebaseio.com",
  projectId: "astral-depth-266901",
  storageBucket: "astral-depth-266901.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//New User
var database = firebase.database();
$("#tripSubmit").on("click", function(event) {
  // Prevent the default form submit behavior

  console.log(sessionStorage.getItem("userId"));



  // Grabs user input
  var newCity = $("#city").val().trim();
  var newState = $("#state").val().trim();
  var newDepartDate = $("#departDate").val().trim();
  var newDepartTime = $("#departTime").val().trim();
  var newNumSeats = $("#numSeats").val().trim();
  var newPlateNum = $("#plateNumber").val().trim();
  var newDriverLicense = $("#driverLicense").val().trim();
  var newUserEmail = $("#userEmail");
  var newOther = $("#other");

var newfname = sessionStorage.getItem("fname");


var newTrip = {
  city: newCity,
  state: newState,
  departDate: newDepartDate,
  departTime: newDepartTime,
  numSeats: newNumSeats,
  plateNum: newPlateNum,
  driverLicense: newDriverLicense,
  driverId: sessionStorage.getItem('userId'),
  driverEmail: sessionStorage.getItem('email'),
  fname: newfname,
  other: newOther
};

database.ref("trips").push(newTrip);

console.log(newTrip.city); console.log(newTrip.state); console.log(newTrip.departDate); console.log(newTrip.departTime); console.log(newTrip.numSeats); console.log(newTrip.plateNum); console.log(newTrip.driverLicense); console.log(newTrip.userEmail); console.log(newTrip.other);

// Alert
alert("Trip successfully added");

// Clears all of the text-boxes

$("#city").val(""); $("#state").val(""); $("#departDate").val(""); $("#departTime").val(""); $("#numSeats").val(""); $("#plateNumber").val(""); $("#driverLicense").val(""); $("#userEmail").val(""); $("#other").val("");

});


$("#tagSubmit").on("click", function(event) {
var city = $("#city").val().trim();
var state = $("#state").val().trim();
sessionStorage.setItem("tagCity", city);
sessionStorage.setItem("tagState", state)
});
