App.UsersController = Ember.ArrayController.extend({

	Edit: false,
	UserEdit: null,

	actions: {
		selectUser: function(user){
			this.set('Edit', true);
			console.log(test);
			this.set('UserEdit', user);
		},
		updateUser: function(){

			console.log(this.get('UserEdit'));
			this.get('UserEdit').save();
		}
	}

});