App.ChatsRoute = Ember.Route.extend({

	activate : function(){
		io.socket.on('sendMessage', function(message){
			$('.messages').append(message);
			console.log('test');
		});
	},

	deactivate : function(){
		io.socket.removeAllListeners('sendMessage');
	}

});