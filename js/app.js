// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config(
	{
    baseUrl: 'bower_components',
    paths:{
    	bootstrap:"bootstrap/dist/js/bootstrap",
    	jquery: "jquery/dist/jquery",
    	underscore:"underscore/underscore",
    	backbone:"backbone/backbone"
    },
    shim:{
    	'backbone': {
        //These script dependencies should be loaded before loading
        //backbone.js
        deps: ['underscore', 'jquery'],
        //Once loaded, use the global 'Backbone' as the
        //module value.
        exports: 'Backbone'
      },
      'bootstrap': {
	      //These script dependencies should be loaded before loading
	      //backbone.js
	      deps: ['jquery']
	    }
    }
  } 
);

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['bootstrap',
	'backbone',
	'jquery',
	'underscore'], 
	function(Bootstrap,Backbone,$,_){
		console.log("hello");
});