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

$("#search").on("click",function(event){
//collect location
//collect state
var city = $("#destination").val().trim()+ $("#state").val().trim();
var state = $("#state").val().trim();

//get all driver going to given state
var ref = database.ref("trips");
ref.orderByChild("state").equalTo("NJ").on("search", function(snapshot){
  var trip = snapshot.val();
  for(t in Object.keys(user))
  {

	}
	
});

}
