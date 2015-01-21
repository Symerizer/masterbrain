App.ChatsView = Ember.View.extend({
	templateName: 'chats',
	didInsertElement: function(){
		$('.chatInput').focus();
		$('.spc-messages').jScrollPane({showArrows:true});
		var spcmessage = $('.spc-messages');
		var jsp = spcmessage.data('jsp');
		var atBottom = jsp.getPercentScrolledY() == 1;
		var scrollStart = jsp.getIsScrollableV();
		for (var i = 0; i < this.controller.messages.length; i++) {
			jsp.getContentPane().append("<span class='chat-nickname'>" + this.controller.messages[i].nickname + "</span>:&nbsp;");
			jsp.getContentPane().append("<span class='chat-message'>" + this.controller.messages[i].message + "</span><br/>");	
		};
		jsp.reinitialise();
	}
});