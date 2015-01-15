App.UsersController = Ember.ArrayController.extend({

	Edit: false,
	UserEdit: null,

	actions: {
		selectUser: function(user){
			this.set('Edit', true);
			this.set('UserEdit', user);
		}
	}

});