// Chiara Maalouf
// February 1, 2020
// CampusRyde
// Hoya Hacks 2020


// connect to firebase
var firebaseConfig = {
  apiKey: "AIzaSyBT3OJGVbazBLVUQm_YXQWZNN5rvmWwLjU",
  authDomain: "astral-depth-266901.firebaseapp.com",
  databaseURL: "https://astral-depth-266901.firebaseio.com",
  projectId: "astral-depth-266901",
  storageBucket: "astral-depth-266901.appspot.com"
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
ref.orderByChild('state').equalTo(state).on("value", function(snapshot) {
  var trip = snapshot.val();
  var keys = Object.keys(trip);
  for (var t = 0; t < keys.length; t++) {
    var dcity = trip[keys[t]].city;
    console.log(dcity);
    var date = trip[keys[t]].departDate;
    var time = trip[keys[t]].departTime;
    var seats = trip[keys[t]].numSeats;
    var driverId = trip[keys[t]].driverId;
    var fname = trip[keys[t]].fname;
    var driverEmail = trip[keys[t]].driverEmail;



    var card = $("<div>").addClass("card border-primary mb-3");
    var header = $("<h3>").addClass("card-header rideDest").attr("id", driverId).text(dcity);
    var cardBody = $("<div>").addClass("card-body");
    var cardTitle = $("<h5>").addClass("card-title");
    var timeSpan = $("<span>").addClass("rideTime").attr("id", driverId).text(time);
    var dateSpan = $("<span>").addClass("rideDate").attr("id", driverId).text(date);
    var cardSubtitle = $("<h6>").addClass("card-subtitle text-muted");
    var driverSpan = $("<span>").addClass("rideDriver").attr({
      id: driverId,
      'data-mail': driverEmail
    }).text("Driver: " + fname);
    var pText = $("<p>").addClass("card-text");
    var spotSpan = $("<span>").addClass("rideSports").attr("id", driverId).text(seats);
    var cardFooter = $("<div>").addClass("card-footer");
    var reqButton = $("<button>").attr({
      type: "button",
      id: driverId,
      onclick: "rideRequest(this)"
    }).addClass("rideRequest btn btn-primary").text("Tag Along!");

    cardFooter.append(reqButton);
    pText.append("Seats Remaining: ");
    pText.append(spotSpan);
    cardSubtitle.append(driverSpan);
    cardTitle.append(timeSpan);
    cardTitle.append(", ");
    cardTitle.append(dateSpan);
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
var spots;
  //$("a.rideRequest").on("click", function(event) {
  function rideRequest(btn){
  var dataID = btn.attr("id");

  spots = $(".rideSpots[id='"+dataID+"']").text();

  // spots = $("#rideSpots").text();
  if(spots>0) {
    spots-=1;
    updateSeats(dataID, spots);
    $(".rideSpots[id='"+dataID+"']").text(spots);

    //Send alerts to driver and rider
    var email = sessionStorage.getItem('email'); //user email

    var dest = $(".rideDest[id='"+dataID+"']").text();
    var date = $(".rideDate[id='"+dataID+"']").text();
    var time = $(".rideTime[id='"+dataID+"']").text();
    var driver = $(".rideDriver[id='"+dataID+"']").text();

    var dEmail = $(".rideDriver[id='"+dataID+"']").attr("data-mail"); //driver email

    var content = "<div><p>Dear user,</p><p>Hello, you have signed up for a ride "
    +"to "+ dest +" on "+date+" at "+time+". Your driver is "+driver+". Contact "+driver+" at "+dEmail
    +" to confirm your ride and for further information. Thank you for choosing CampusRyde. We "
    +"hope you have a great trip!</p><p>Sincerely,<br>CampusRyde Administrators</p></div>";
    window.location.href =
      "http://us-central1-astral-depth-266901.cloudfunctions.net/sendMail?dest="
      + email + "&content=" + content;

  } else {
    alert("Sorry, ride is full!")
  }
}

function updateSeats(dataID,left) {
  var updates = {};
  updates['/trips/' + dataID + '/' + numSeats] = left;
  console.log("seats inside")
  return firebase.database().ref().update(updates);
}
