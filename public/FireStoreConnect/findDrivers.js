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
var city = 'Bayville';
var state = 'NJ'
//get all driver going to given state
var ref = database.ref('trips');
ref.orderByChild('state').equalTo("NJ").on("value", function(snapshot){
  var trip = snapshot.val();
	var keys =Object.keys(trip);
	for(var t=0; t<keys.length;t++)
  {
	var dcity = trip[keys[t]].city;
	  console.log(dcity);
	var date = trip[keys[t]].departDate;
	var time = trip[keys[t]].departTime;
	var seats = trip[keys[t]].numseats;
	var driverId = trip[keys[t]].driverId;
	var fname = trip[keys[t]].fname;	
	  
	  

	}
	
});

//}
