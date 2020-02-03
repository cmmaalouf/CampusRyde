// Chiara Maalouf
// February 1, 2020
// CampusRyde
// Hoya Hacks 2020


// connect to firebase
var firebaseConfig = {
  //apiKey: "YOUR KEY HERE",
  authDomain: "REMOVED.firebaseapp.com",
  databaseURL: "https://REMOVED.firebaseio.com",
  projectId: "REMOVED",
  storageBucket: "REMOVED.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();
var db = firebase.database();

//$("#search").on("click",function(event){
//collect location
//collect state
var city = sessionStorage.getItem("tagCity");
var state = sessionStorage.getItem("tagState")

//get all driver going to given state
var ref = database.ref('trips');
ref.orderByChild('state').equalTo(state).on("value", function (snapshot) {
  $("#rideCards").empty();
  var trip = snapshot.val();
  var keys = Object.keys(trip);
  for (var t = 0; t < keys.length; t++) {
    var dcity = trip[keys[t]].city;
    var date = trip[keys[t]].departDate;
    var time = trip[keys[t]].departTime;
    var seats = trip[keys[t]].numSeats;
    var driverId = trip[keys[t]].driverId;
    var fname = trip[keys[t]].fname;
    var driverEmail = trip[keys[t]].driverEmail;

    var tripId = keys[t];


    var card = $("<div>").addClass("card border-primary mb-3");
    var header = $("<h3>").addClass("card-header rideDest").attr("id", tripId).text(dcity);
    var cardBody = $("<div>").addClass("card-body");
    var cardTitle = $("<h5>").addClass("card-title");
    var timeSpan = $("<span>").addClass("rideTime").attr("id", tripId).text(time);
    var dateSpan = $("<span>").addClass("rideDate").attr("id", tripId).text(date);
    var cardSubtitle = $("<h6>").addClass("card-subtitle text-muted");
    var driverSpan = $("<span>").addClass("rideDriver").attr({
      id: tripId,
      'data-mail': driverEmail
    }).text("Driver: " + fname);
    var pText = $("<p>").addClass("card-text");
    var spotSpan = $("<span>").addClass("rideSpots").attr("id", tripId).text(seats);
    var cardFooter = $("<div>").addClass("card-footer");
    var reqButton = $("<button>").attr({
      type: "button",
      id: tripId,
      onclick: "rideRequest(this)",
      name: driverId
    }).addClass("rideRequest btn btn-primary").text("Tag Along!");

    cardFooter.append(reqButton);
    pText.append("Seats Remaining: ");
    pText.append(spotSpan);
    cardSubtitle.append(driverSpan);
    cardTitle.append(dateSpan);
    cardTitle.append(", ");
    cardTitle.append(timeSpan);
    cardBody.append(cardTitle);
    cardBody.append(cardSubtitle);
    cardBody.append("<br>");
    cardBody.append(pText);
    card.append(header);
    card.append(cardBody);
    card.append(cardFooter);
    $("#rideCards").append(card);

  }

});

//}
//var spots;
//$("a.rideRequest").on("click", function(event) {
function rideRequest(btn) {
  var tripId = $(btn).attr("id");//btn.attr("id");
  var driverId = $(btn).attr("name");

  var spots = $(".rideSpots[id='" + tripId + "']").text();

  // spots = $("#rideSpots").text();
  if (spots > 0) {
    spots -= 1;
    updateSeats(spots, tripId);
    $(".rideSpots[id=" + tripId + "]").text(spots);

    //Send alerts to driver and rider
    var email = sessionStorage.getItem('email'); //user email

    var dest = $(".rideDest[id='" + tripId + "']").text();
    var date = $(".rideDate[id='" + tripId + "']").text();
    var time = $(".rideTime[id='" + tripId + "']").text();
    var driver = $(".rideDriver[id='" + tripId + "']").text();
    function test(words) {
      var n = words.split(" ");
      return n[n.length - 1];
    }
    driver = test(driver);
    var dEmail = $(".rideDriver[id='" + tripId + "']").attr("data-mail"); //driver email

    var content = "<div><p>Dear user,</p><p>Hello, you have signed up for a ride "
      + "to " + dest + " on " + date + " at " + time + ". Your driver is " + driver + ". Contact " + driver + " at " + dEmail
      + " to confirm your ride and for further information. Thank you for choosing CampusRyde. We "
      + "hope you have a great trip!</p><p>Sincerely,<br>CampusRyde Administrators</p></div>";
    window.location.href =
      "http://us-central1-REMOVED.cloudfunctions.net/sendMail?dest="
      + email + "&content=" + content;

  } else {
    alert("Sorry, ride is full!")
  }
}

function updateSeats(left, tripId) {
  var updates = {};
  updates['/trips/' + tripId + '/numSeats'] = left;
  console.log("seats inside")
  return firebase.database().ref().update(updates);
}
