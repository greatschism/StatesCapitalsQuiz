(function() {
	var getRegionData = function(region) {
		var data = [];
		for(var i=0,j=region.length; i<j; i++) {
			var state = states[region[i]];
			data.push(state);
		}
		
		return data;
	};
	
	var showSelectView = function() {
		selectView.zIndex = 10;
		quizView.zIndex = 9;
	};
	
	var showQuizView = function() {
		selectView.zIndex = 9;
		quizView.zIndex = 10;
		
		randomQuestion();
		randomAnswers();
	};
	
	c.currentRegion = [];
	c.currentState = {};
	
	c.windows.capitals = Titanium.UI.createWindow({  
	    title:'Capitals Quiz',
	    backgroundColor:'#fff',
	    navBarHidden: true
	});
	var win = c.windows.capitals;
	
	/***************************************/
	/* Quiz View */
	var resetQuestion = function() {
		lQuestion.text = '';		
	};
	
	var resetAnswers = function() {
		var pickerData = [];
		
		pAnswers.add(pickerData);
	};
	
	//Returns a random state from the current region
	var getRandomState = function() {
		var idx = Math.floor((Math.random()*c.currentRegion.length)+1);
		return c.currentRegion[idx];
	};
	
	var randomQuestion = function() {
		var state = getRandomQuestion();
		
		lQuestion.text = 'What is the capital of ' + state.name + '?';	
		
		c.currentState = state;
	};
	
	var randomAnswers = function() {
		var done = false;
		var maxStates = 4;
		var state = c.currentState;
		var pickerData = [];
		var row = Ti.UI.createPickerRow({title: '', state: {}});
		pickerData.push(row);
		
		row = Ti.UI.createPickerRow({title: state.capital, state: state});
		pickerData.push(row);
		
		//Find maxStates more answers to display
		while(!done) {
			if(pickerData.length >= maxStates) {
				done = true;
			}else {
				state = getRandomState();
				
				if(state.name != c.currentState.name) {
					row = Ti.UI.createPickerRow({title: state.capital, state: state});
					pickerData.push(row);
				}
			}
		}
	
		//Display the answers in random order
		pickerData.sort(function() {return 0.5 - Math.random()});
		
		pAnswers.add(pickerData);
	};
	
	var quizView = Ti.UI.createView({
		backgroundColor: '#fff',
		zIndex:9,
		width: '100%',
		height: '100%',
		bottom: 0,
	});
	win.add(quizView);
	
	var lQuestion = Ti.UI.createLabel({
		text: '',
		top: 10,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		color: '#900',
		font: { fontSize:40 },
		shadowColor: '#aaa',
		shadowOffset: {x:5, y:5},
	});
	quizView.add(lQuestion);
	
	var pAnswers = Ti.UI.createPicker({top: lQuestion.top + c.styles.DEFAULT_PADDING*4});
	quizView.add(pAnswers);
	/***************************************/
	
	/***************************************/
	/* Select View */
	var selectView = Ti.UI.createView({
		backgroundColor:'#fff',
		zIndex:10,
		width: '100%',
		height: '100%',
		bottom: 0,
	});
	win.add(selectView);
	
	var lTitle = Ti.UI.createLabel({
		text: 'Which region would you like to study?',
		top: 10,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		color: '#900',
		font: { fontSize:40 },
		shadowColor: '#aaa',
		shadowOffset: {x:5, y:5},
	});
	selectView.add(lTitle);
	
	var pRegion = Ti.UI.createPicker({top: lTitle.top + c.styles.DEFAULT_PADDING*4});
	var pickerData = [];
	var row = Ti.UI.createPickerRow({title:''});
	pickerData.push(row);
	for(var i in regions) {
		if(regions.hasOwnProperty(i)) {
			var region = regions[i];
			
			row = Ti.UI.createPickerRow({title:i, region: region});
			pickerData.push(row);
		}
	}
	pRegion.addEventListener('change',function(e)
	{
		Ti.API.info("You selected row: "+e.row+", column: "+e.column+", custom_item: "+e.row.region);
		c.currentRegion = getRegionData(e.row.region);
		showQuizView();
	});
	pRegion.add(pickerData);
	selectView.add(pRegion);
	/***************************************/
})();
