App.ChatsController = Ember.ObjectController.extend({
	actions: {
		sendMessage: function(message){
			io.socket.post('/api/sendMessage', {sentMessage: message}, function(){
				
			});
		}
	}
});