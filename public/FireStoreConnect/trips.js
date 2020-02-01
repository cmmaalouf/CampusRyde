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

  // Grabs user input

  var newEmail = $("#newEmail").val().trim();
  var newFirstName = $("#newFirstName").val().trim();
  var newLastName = $("#newLastName").val().trim();
  var newPassword = $("#newPassword").val().trim();

  var newTrip = {
    city: newCity,
    state: newState,
    coords: newCoords
    date: newDate,
    time: newTime
  };

  database.ref("trips").push(newTrip);

  console.log(newTrip.city);
  console.log(newTrip.state);
  console.log(newTrip.coords);
  console.log(newTrip.date);
  console.log(newTrip.time);

  // Alert
  alert("Trip successfully added");

  // Clears all of the text-boxes
  $("#newEmail").val("");
  $("#newFirstName").val("");
  $("#newLastName").val("");
  $("#newPassword").val("");
});
