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
$("#tripSubmit").on("click", function(event) {
  // Prevent the default form submit behavior
  event.preventDefault();
  if(sessionStorage.getItem("userId") != NULL){


  // Grabs user input
  var city = $("#city").val().trim();
  var state = $("#state").val().trim();
  var departDate = $("#departDate").val().trim();
  var departTime = $("#departTime").val().trim();
  var numSeats = $("#numSeats").val().trim();
  var plateNum = $("#plateNumber").val().trim();
  var driverLicense = $("#driverLicense").val().trim();
  var userEmail = $("#userEmail");
  var other = $("#other");

  var newTrip = {
    city: newCity,
    state: newState,
    departDate: newDepartDate,
    departTime: newDepartTime,
    numSeats: newNumSeats,
    plateNum: newPlateNum,
    driverLicense: newDriverLicense,
    userEmail: newUserEmail,
    other: newOther
  };

  database.ref("trips").push(newTrip);

  console.log(newTrip.city);
  console.log(newTrip.state);
  console.log(newTrip.departDate);
  console.log(newTrip.departTime);
  console.log(newTrip.numSeats);
  console.log(newTrip.plateNum);
  console.log(newTrip.driverLicense);
  console.log(newTrip.userEmail);
  console.log(newTrip.other);

  // Alert
  alert("Trip successfully added");

  // Clears all of the text-boxes

  $("#city").val("");
  $("#state").val("");
  $("#departDate").val("");
  $("#departTime").val("");
  $("#numSeats").val("");
  $("#plateNumber").val("");
  $("#driverLicense").val("");
  $("#userEmail").val("");
  $("#other").val("");
}
});
