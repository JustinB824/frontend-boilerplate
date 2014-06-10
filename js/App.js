"use strict";

/**	
  * App.js – App is the main Application Prototype object. Only one instance of it will exist, and it is created at the bottom of index.html.
  * 
  * When creating JavaScript Prototype Objects (similar to classes):
  	* Define only one object per file.
  	* Name the file the same as the object. For example App.js / function App().
  	* Name the file starting with an uppercase. It indicates this is an object type with a constructor. (You can call "new App()")
	*/

function App() {
	
	/* NAMING CONVENTIONS FOR VARIABLE TYPES
	=============================================*/

	// Constants – variables that will never, ever change. Name using all capital letters separated by underscores. Example:
	var NUM_MINUTES_PER_HOUR = 60;
			
	// Non-constants – variables that can change. Name using camelcase, starting with lowercase. Example:
	var numOfTimesUserClickedMouse = 12;
	
	// Booleans – Name using camelcase, starting with lowercase "is" or "has". Example:
	var isAppInitialized = false;
	
	// JQuery DOM Element References – For optimal performance, cache DOM references as much as possible to avoid repetitive jquery look-ups. Name using camelcase starting with "$"
	this.$body = $('body');

	// Variables that need to accessible across all of the objects functions – use "this". Example:
	this.WELCOME_STRING = 'Well hello there!';
		
	/* Calling functions and passing variables
	=============================================*/
	this.myFunction1( new Date() );
};

App.prototype.myFunction1 = function(currentDate) {
  // Variables that only need to exist in their specific function should start with "_" and not use "this". Example:
  var _myPrivateVar = 'Todays date is:';
  
	this.myFunction2(_myPrivateVar, currentDate);
};

App.prototype.myFunction2 = function(currentDateAnnouncementString, currentDate) {
	this.$body.append(this.WELCOME_STRING + ' ' + currentDateAnnouncementString + ' ' + currentDate );
};