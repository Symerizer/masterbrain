App.UsersController = Ember.ArrayController.extend({

	Edit: false,
	UserEdit: null,

<<<<<<< HEAD
	

=======
	actions: {
		selectUser: function(user){
			this.set('Edit', true);
			this.set('UserEdit', user);
		}
	}
>>>>>>> 76b076213e281eb29b8f2b2da2d4bfba0ab80413

});