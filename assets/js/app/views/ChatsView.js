App.ChatsView = Ember.View.extend({
	templateName: 'chats',
	didInsertElement: function(){
		$('.chatInput').focus();
		for (var i = 0; i < this.controller.messages.length; i++) {
			$('.spc-messages').append(this.controller.messages[i]+'<br>');
		};
	}
});