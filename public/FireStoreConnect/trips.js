var firebaseConfig = {
  apiKey: "REMOVED",
  authDomain: "REMOVED.firebaseapp.com",
  databaseURL: "https://REMOVED.firebaseio.com",
  projectId: "REMOVED",
  storageBucket: "REMOVED.appspot.com"
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

  var newTrip = {
    address: newAddress,
    desc: newdesc,
    coords: newCoords,
    date: newDate,
    time: newTime
  };

  database.ref("trips").push(newTrip);

  console.log(newTrip.address);
  console.log(newTrip.desc);
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
