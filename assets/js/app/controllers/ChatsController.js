App.ChatsController = Ember.ObjectController.extend({
	messages: Ember.A(),
	actions: {
		sendMessage: function(message){
			io.socket.post('/api/sendMessage', {sentMessage: message}, function(){
				$('.chatInput').val('');
			});
		}
	}
});