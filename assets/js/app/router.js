App.Router.map(function(){
	this.route('users');
	this.route('chats');
});

App.Router.reopen({
  location: 'none'
});