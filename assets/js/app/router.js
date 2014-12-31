App.Router.map(function(){
	this.route('users');
	this.route('chats');
	this.route('battles');
});

App.Router.reopen({
  location: 'none'
});