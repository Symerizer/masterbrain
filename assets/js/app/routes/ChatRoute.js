App.ChatsRoute = Ember.Route.extend({

	activate : function(){
		io.socket.on('sendMessage', function(message){
			
			$('.messages').append(message + '</br>');
		});
	},

	deactivate : function(){
		io.socket.removeAllListeners('sendMessage');
	}

});