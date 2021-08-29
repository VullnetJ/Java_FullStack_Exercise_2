


function getDataFromServer (getData, errorText) {
	alert(getData + "getDataFromServer failed: " + errorText);
}

function callbacTesting (callback) { 
    callback(); 
} 
callbackTesting (function() {
	getDataFromServer("You got data from the server", "goodbye"); 
}); 