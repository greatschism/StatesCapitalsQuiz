var c = {};

(function() {
	c.windows = {};
	
	Ti.include('states.js');
	Ti.include('functions.js');
	Ti.include('config.js');
	Ti.include('ui.js');
	Ti.include('capitals-quiz.js');
	
	//Force orientation to portrait
	if (Ti.Platform.osname == 'android') {
		Ti.Gesture.addEventListener('orientationchange', function(e) { 
			Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_PORTRAIT);
		});
	}
	
	c.windows.main.open();
	
	/*
	for(var i in states) {
		if(states.hasOwnProperty(i)) {
			var state = states[i];
			
			dbg(state.name);	
		}	
	}
	*/
})();
