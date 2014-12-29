App.ChatsRoute = Ember.Route.extend({
	activate : function(){
		io.socket.on('sendMessage', function(message){
			$('.spc-messages').append('<p>' +message + '</p>');
		});
	},

	deactivate : function(){
		io.socket.removeAllListeners('sendMessage');
	}

});