// Chiara Maalouf
// February 1, 2020
// CampusRyde
// Hoya Hacks 2020


// connect to firebase
var firebaseConfig = {
  apiKey: "REMOVED",
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
//var city = $("#destination").val().trim()+ $("#state").val().trim();
//var state = $("#state").val().trim();
var city = $("#city").val().trim();
var state = $("#state").val().trim();

//get all driver going to given state
var ref = database.ref('trips');
ref.orderByChild('state').equalTo("NJ").on("value", function(snapshot) {
  var trip = snapshot.val();
  var keys = Object.keys(trip);
  for (var t = 0; t < keys.length; t++) {
    var dcity = trip[keys[t]].city;
    console.log(dcity);
    var date = trip[keys[t]].departDate;
    var time = trip[keys[t]].departTime;
    var seats = trip[keys[t]].numseats;
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
    var driverSpan = $("<span>").addClass("rideDriver").attr({id: driverId, 'data-mail': driverEmail}).text("Driver: "+ fname);
    var pText = $("<p>").addClass("card-text");
    var spotSpan = $("<span>").addclass("rideSports").attr("id", driverId).text(seats);
    var cardFooter = $("<div>").addClass("card-footer");
    var reqButton = $("<button>").attr({type: "button", id: driverId}).addClass("rideRequest btn btn-primary").text("Tag Along!");

    cardFooter.append(reqButton);
    pText.append("Seats Remaining: "+ spotSpan);
    cardSubtitle.append(driverSpan);
    cardTitle.append(timeSpan + ", " + dateSpan);
    cardBody.append(cardTitle + cardSubtitle + "<br>" + pText);
    card.append(header + cardBody + cardFooter);
    $("#rideCards").append(card);

  }

});

//}
