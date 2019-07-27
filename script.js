var chatBody = $('#chat-body');
var userMsgInput = $('#user-msg-input');
var chatOption = $('.chat-option');
var optionHandle = $('.option-handle');

function chatScrollTop(){
	chatBody.scrollTop(chatBody.clientHeight);
	console.log(chatBody.scrollTop());
}

chatBody.on('click', () => {
	chatScrollTop();
});

$('#inputcontainer').on('click', function () {
    $('#messagewindow').animate({
    scrollTop: $('#messagewindow')[0].scrollHeight}, 1000);
});

function scrollChat(){
    chatBody.animate({
    scrollTop: chatBody[0].scrollHeight}, 1);
}

userMsgInput.on('keyup', function(e){
	if(e.which == 13){
		let botResponse = $(`<div class="bot-chat chat">
								<div class="chat-avatar">
									<img src="man-1.svg" alt="" class="chat-img">
								</div>
						
								<div class="bubble-message">
									<p>This is a default response.</p>
								</div>
							</div>`);

		let msgInput = $(`<div class="user-chat chat">
							<div class="bubble-message">
								<p>${userMsgInput.val()}</p>
							</div>
							<div class="chat-avatar">
								<img src="girl.svg" alt="" class="chat-img">
							</div>
						</div>`);
		userMsgInput.val('');
		chatBody.append(msgInput);
		scrollChat();
		setTimeout(() => {chatBody.append(botResponse); scrollChat();}, 500);
			
	}
});

function addChat(input){
	let botResponse = $(`<div class="bot-chat chat">
								<div class="chat-avatar">
									<img src="man-1.svg" alt="" class="chat-img">
								</div>
						
								<div class="bubble-message">
									<p>This is a default response.</p>
								</div>
							</div>`);

		let msgInput = $(`<div class="user-chat chat">
							<div class="bubble-message">
								<p>${input}</p>
							</div>
							<div class="chat-avatar">
								<img src="girl.svg" alt="" class="chat-img">
							</div>
						</div>`);
		userMsgInput.val('');
		chatBody.append(msgInput);
		scrollChat();
		setTimeout(() => {chatBody.append(botResponse); scrollChat();}, 750);
}

function toggleOptions () {
	var chatOptions = $('.chat-options');
	if(chatOptions.css('bottom') == '-200px') chatOptions.css('bottom', '0px');
	else chatOptions.css('bottom', '-200px');
}

optionHandle.on('click', toggleOptions);

chatOption.on('click', function(){
	let selectedText = $(this).text();
	toggleOptions();
	setTimeout(() => addChat(selectedText), 300);
});