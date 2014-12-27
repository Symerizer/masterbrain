App.UsersRoute = Ember.Route.extend({
	model: function(){
<<<<<<< HEAD
		return App.User.find();
=======
		return this.store.find('user');
>>>>>>> b226f4199e6e09303615355d15ad2adf7b378ab0
	}
});