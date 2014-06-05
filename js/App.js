/* App.js – App is the main object on this page. Only one instance of it will exist.
=============================================*/
"use strict"; //Enables strict mode for all functions in this file. This will help you write better code by being less lenient with syntax.

/*	When creating Javascript Prototype Objects (similar to classes):
	* Define only one object per file.
	* Name the file the same as the object. For example App.js / function App().
	* Name the file starting with an uppercase. It indicates this is an object type with a constructor. (so you can call new App())
=============================================*/

/* This is the constructor. To create a new App, call new App();
=============================================*/
function App() {
	
	/* NAMING CONVENTIONS FOR VARIABLE TYPES
	=============================================*/

	// Constants – variables that will never, ever change. Name using all capital letters separated by underscores. Example:
	var NUM_MINUTES_PER_HOUR = 60;
			
	// Non-constants – Name using camelcase, starting with lowercase. Example:
	var numOfTimesUserClickedMouse = 12;
	
	// Booleans – Name using camelcase, starting with lowercase "is". Example:
	var isAppInitialized = false;

	
	/* DEFINING VARIABLE SCOPE
	=============================================*/
	
	// Variables that need to accessible across all of the objects functions – use "this". Example:
	this.myObjectWideVariable = 10;
	
	// Variables that only need to exist in their specific function should start with "_" and not use "this". Example:
	var _currentDate = new Date();
	
	
	/* Calling functions
	=============================================*/
	this.myFunction();
};

App.prototype.myFunction = function() {

};