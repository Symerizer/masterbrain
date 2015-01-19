App.ChatsView = Ember.View.extend({
	templateName: 'chats',
	didInsertElement: function(){
		$('.chatInput').focus();
		for (var i = 0; i < this.controller.messages.length; i++) {
			$('.spc-messages').append("<span class='chat-nickname'>" + this.controller.messages[i].nickname + "</span>:&nbsp;");
			$('.spc-messages').append("<span class='chat-message'>" + this.controller.messages[i].message + "</span><br/>");
		};
	}
});