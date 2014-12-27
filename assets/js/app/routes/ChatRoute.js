App.ChatsRoute = Ember.Route.extend({
	actions: {
		sendMessage: function(message){
			io.socket.post('/api/sendMessage', {sentMessage: message}, function(){
				console.log('sent');
			});
		}
	}
});