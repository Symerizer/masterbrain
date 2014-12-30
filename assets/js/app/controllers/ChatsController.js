App.ChatsController = Ember.ArrayController.extend({
	messages: Ember.A([]),
	actions: {
		sendMessage: function(message){
			io.socket.post('/api/sendMessage', {sentMessage: message}, function(){
				$('.chatInput').val('');
			});
			this.messages.pushObject(message);
		}
	}
});