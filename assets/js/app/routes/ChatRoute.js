App.ChatsRoute = Ember.Route.extend({
	activate : function(){
		var that = this;
		io.socket.on('sendMessage', function(message){
			$('.spc-messages').append(message + '</br>');
			that.controller.messages.pushObject(message);
		});
	},

	deactivate : function(){
		io.socket.removeAllListeners('sendMessage');
	}

});