/*
	Before leaving or exiting a DM-chat or Group-chat, you might want to delete all your sent messages.
	I was unable to completely automate this as the delete button, for any particular sent message, appears only on mouseover on that message.
*/

var className = '_33X8hGUdBNhl9th7LARwP1';

function getNextDM() {
	return document.getElementsByClassName(className)[0].parentElement;
}

function confirmDel() {
	document.querySelector('[type="Submit"]').click();
}

function deleteDM() {
	document.querySelector('[title="Delete message"]').click();
	setTimeout(confirmDel, 100);
}

function deleteSentDMs() {
	getNextDM().scrollIntoView();
	setTimeout(deleteDM, 750);
}

/*
	To start auto-delete, execute - 
		var intervalId = setInterval(deleteSentDMs, 2000);

	To stop auto-delete, execute - 
		clearInterval(intervalId);

	To ensure automated delete works - 
		Scroll up a chat to load all the messages.
		Adjust the developer console height so that only one message is visible in the chat.
		Keep the mouse pointer in that small area of chat, to ensure mouseover as the delete automation scrolls through sent messages.

	Stay lazy, Work smart :-)

	PS - you may also start the auto-delete and manually mouseover on the messages.
*/

