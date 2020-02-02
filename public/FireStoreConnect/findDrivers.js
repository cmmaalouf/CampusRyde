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

//$("#search").on("click",function(event){
//collect location
//collect state
//var city = $("#destination").val().trim()+ $("#state").val().trim();
//var state = $("#state").val().trim();
var city = 'Bayville';
var state = 'NJ'
//get all driver going to given state
var ref = database.ref('trips');
ref.orderByChild('state').equalTo("NJ").on("value", function(snapshot){
  var trip = snapshot.val();
  for(t in Object.keys(trip))
  {
	var dcity = t.city;
	  console.log(trip);
	var date = t.departDate;
	var time = t.departTime;
	var seats = t.numseats;
	var driverId = t.driverId;
	var fname;
	  var driveRef = database.ref('users');
	  var id = Object.keys(driveRef)[0];
	  /*if id.equalTo(driverId).once("value", function(snapshot) {
		      var user = snapshot.val();
		      var key = Object.keys(user)[0];
		      fname = user[key].fname;
	  });
		  console.log(fname); 
		  */
		  console.log(time);

	}
	
});

//}
