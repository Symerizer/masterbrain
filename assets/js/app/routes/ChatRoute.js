App.ChatsRoute = Ember.Route.extend({
	activate: function() {
		var that = this;
		io.socket.on('sendMessage', function(data) {
			var spcmessage = $('.spc-messages');
			var jsp = spcmessage.data('jsp');
			var atBottom = jsp.getPercentScrolledY() == 1;
			var scrollStart = jsp.getIsScrollableV();

			jsp.getContentPane().append("<span class='chat-nickname'>" + data.nickname + "</span>:&nbsp;");
			jsp.getContentPane().append("<span class='chat-message'>" + data.message + "</span><br/>");
			jsp.reinitialise();

			var scrollEnd = jsp.getIsScrollableV();

			// Vérifier si le scroll est en bas avant de le descendre a la nouvelle position
			if (atBottom || (scrollStart != scrollEnd))
				jsp.scrollToBottom();

			that.controller.messages.pushObject(data);
		});
	},

	deactivate: function() {
		io.socket.removeAllListeners('sendMessage');
	}

});