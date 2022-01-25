var intervalID = -1;
var isDeletingSentDM = false;

var deleteSentDMActionBtn = document.getElementById("deleteSentDM");
deleteSentDMActionBtn.addEventListener( "click", function() {
	if(isDeletingSentDM === false) {
		chrome.tabs.query( { active: true, currentWindow: true }, (tabs) => { 
			chrome.tabs.sendMessage( tabs[0].id, {
				message: "start_delete_sent_DM"
			}, response => {
				intervalID = response.intervalID;
				isDeletingSentDM = true;
				console.log("Started interval - " + intervalID);
				deleteSentDMActionBtn.classList.remove("fa-play-circle");
				deleteSentDMActionBtn.classList.add("fa-stop-circle");
			});
		});
	}
	else {
		chrome.tabs.query( { active: true, currentWindow: true }, (tabs) => { 
			console.log("Stopping interval - " + intervalID);
			chrome.tabs.sendMessage( tabs[0].id, {
				message: "stop_delete_sent_DM",
				id: intervalID
			}, response => {
				intervalID = -1;
				isDeletingSentDM = false;
				deleteSentDMActionBtn.classList.remove("fa-stop-circle");
				deleteSentDMActionBtn.classList.add("fa-play-circle");
			});
		});
	}
});
