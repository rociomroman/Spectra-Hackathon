
var firebase = new Firebase("https://food4u-70515.firebaseio.com/");

// Using the firebase config to connect to the database
var config = {
	apiKey: "AIzaSyA_rCsgelF_pNS1DSjcvgYeaiZsJSIKSTI",
	authDomain: "food4u-70515.firebaseapp.com",
	databaseURL: "https://food4u-70515.firebaseio.com",
	storageBucket: "http://food4u-70515.appspot.com/"
};

//firebase.initializeApp(config);
var twilio = require('twilio');
var accountSid = 'AC52c3c20fd1919eaa0afc29fa362d8ebe';
var authToken = '6d49c7d8320054769ad4de608f8d865b';
var client = new twilio.RestClient(accountSid, authToken);
var foodContributors = firebase.database().ref("foodcontributors");
foodContributors.limitToLast(1).on('child_added', function(childSnapshot) {
  // Get the recommendation data from the most recent snapshot of data
  // added to the recommendations list in Firebase
  foodContributor = childSnapshot.val();
  // Update the HTML to display the recommendation text
  var name = foodContributor.name;
  var loc = foodContributor.location;
 
	 client.sms.messages.create({
	    to: '+14084319617',
	    from: '+16697211382',
	    body: 'New order received by Restaurant: ' + name + ' & location: ' + loc
	}, function(err, message) {
		if(!err)
	    	console.log(message.sid);
	    else 
	    	console.log("Error: " + err);
	});
});