App.ChatsRoute = Ember.Route.extend({
	activate : function(){
		var that = this;
		io.socket.on('sendMessage', function(data){
			$('.spc-messages').append("<span class='chat-nickname'>" + data.nickname + "</span>:");
			$('.spc-messages').append("<span class='chat-message'>" + data.message + "</span><br/>");
			that.controller.messages.pushObject(data);
		});
	},

	deactivate : function(){
		io.socket.removeAllListeners('sendMessage');
	}

});