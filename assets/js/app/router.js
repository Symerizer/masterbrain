App.Router.map(function(){
	this.route('users');
	this.route('chats');
	this.route('battles');
	this.route('systems');
});

App.Router.reopen({
  location: 'none'
});