App.ChatsView = Ember.View.extend({
	templateName: 'chatbox/chats',
	
});

App.MessagesView = Ember.View.extend({
	classNames: ['spc-messages'],
	didInsertElement: function(){
		console.log(this.element);
	}
});