(function() {
	var DEFAULT_PADDING = c.styles.DEFAULT_PADDING;
	Titanium.UI.setBackgroundColor('#000');
	
	c.windows.main = Titanium.UI.createWindow({  
	    title:'Tab 1',
	    backgroundColor:'#fff'
	});
	var winMain = c.windows.main;
	
	var lHomeTitle = Ti.UI.createLabel({
		text: 'What would you like to do?',
		top: 10,
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		color: '#900',
		font: { fontSize:48 },
		shadowColor: '#aaa',
		shadowOffset: {x:5, y:5},
	});
	winMain.add(lHomeTitle);
	
	var bStatesQuiz = Titanium.UI.createButton({
	   title: 'States Quiz',
	   top: lHomeTitle.top + DEFAULT_PADDING*6,
	   width: 200,
	   height: 200
	});
	winMain.add(bStatesQuiz);
	
	var bCapitalsQuiz = Titanium.UI.createButton({
	   title: 'Capitals Quiz',
	   top: bStatesQuiz.top + bStatesQuiz.height + DEFAULT_PADDING,
	   width: 200,
	   height: 200
	});
	winMain.add(bCapitalsQuiz);
	
	var bSettings = Titanium.UI.createButton({
	   title: 'Settings',
	   top: bCapitalsQuiz.top + bCapitalsQuiz.height + DEFAULT_PADDING,
	   width: 200,
	   height: 200
	});
	winMain.add(bSettings);
})();
