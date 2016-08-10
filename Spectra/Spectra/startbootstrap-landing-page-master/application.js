var config = {
   apiKey: "AIzaSyA_rCsgelF_pNS1DSjcvgYeaiZsJSIKSTI",
   authDomain: "food4u-70515.firebaseapp.com",
   databaseURL: "https://food4u-70515.firebaseio.com",
   storageBucket: "http://food4u-70515.appspot.com/",
 };

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var foodcontributors = firebase.database().ref("foodcontributors");

// Save a new recommendation to the database, using the input in the form
var submitContribution = function () {

  // Get input values from each of the form elements
  var name = $("#name").val();
  var location = $("#location").val();
  var description = $("#description").val();

  // Push a new recommendation to the database using those values
  foodcontributors.set({
    "name": name,
    "location": location,
    "description": description
  });
};




// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#recommendationForm").submit(submitContribution);

});