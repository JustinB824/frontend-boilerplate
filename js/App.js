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
	
	/* Defining variables
		* Constants variables (variables that will never, ever change)
			* Name using all capital letters separated by underscores
			* e.g. var MINUTES_PER_HOUR = 60;
		* Non-constant variables
			* Name using camelcase, starting with lowercase
			* e.g. var 
		* Booleans
			* Name boolean variables starting with "is"
			* e.g. var isAppInitialized = false;
	=============================================*/
	
	//If you need to access a variable from multiple functions within this object, make sure to define it using "this". e.g.: this.variableName = value;
	this.KEYCODE = {
		UP: 38,
		DOWN: 40
	};
	
	this.window = {
		width: 0,
		height: 0
	}
};


App.prototype.onWindowResize = function() {
	
};