var dbg = function(msg) { Ti.API.debug(msg); };
var err = function(msg) { Ti.API.error(msg); };
var info = function(msg) { Ti.API.error(info); };

function killChildren(thing) {
    if(thing.children) {
        for(var i=thing.children.length-1; i>=0; i--) {
            //dbg('Removing ' + thing.children[i] + ' from ' + thing);
            thing.remove(thing.children[i]);
        }
    }
}

function getJSON(url, callback) {
    var xhr = Ti.Network.createHTTPClient();

    xhr.onload = function() {
        try {
            var json = JSON.parse(this.responseText);
            callback(json);
        } catch(err) {
            dbg(err);
        }
    };

    xhr.open('GET', url);
    xhr.send();
}

function httpPOST(url, params, callback){
	var xhr=Titanium.Network.createHTTPClient();
	    
	xhr.open("POST", url);
	xhr.onload = function(){
		if(this.status == '200'){
			callback(this.responseText);       
		}else{
			alert('httpPOST failed: ' + this.status + " " + this.response);
		}              
	};
	
	xhr.onerror = function(e){alert('httpPOST error: ' + e.error);};
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(params);
}

function showConfirm(options) {
    var a = Ti.UI.createAlertDialog({
        title: options.title,
        message: options.message
    });

    a.buttonNames = ['OK', 'Cancel'];
    a.cancel = 1;
    a.show();
}

function showAlert(options) {
   var alertDlg = Ti.UI.createAlertDialog({
        title:  options.title,
        message: options.message,
        buttonNames: ['OK']
    });
    alertDlg.show();
}

function alrt(message) {
    showAlert({title: 'Alert', message: message});
}

function networkAvailable() {
    return Ti.Network.networkTypeName != 'NONE';
}