console.log("SUCCESS - IF IN TAB CONSOLE");

/* START - delete send DMs functions */

function confirmDel() {
	document.querySelector('[type="Submit"]').click();
}

function deleteDM() {
	document.querySelector('[title="Delete message"]').click();
	setTimeout(confirmDel, 100);
}

function getNextDM() {
	return document.getElementsByClassName("_33X8hGUdBNhl9th7LARwP1")[0].parentElement;
}

function deleteSentDM() {
	getNextDM().scrollIntoView();
	setTimeout(deleteDM, 750);
}

/* END - delete send DMs functions */

/* START - Message listener */

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
	switch(request.message) {
		case "start_delete_sent_DM" :
			var id = setInterval(deleteSentDM, 2000);
			sendResponse({ intervalID: id });
		break;

		case "stop_delete_sent_DM" :
			clearInterval(request.id);
			sendResponse( {} );
		break;
	}
});

/* END - Message listener */
