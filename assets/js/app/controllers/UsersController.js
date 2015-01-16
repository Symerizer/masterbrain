App.UsersController = Ember.ArrayController.extend({

	Edit: false,
	UserEdit: null,
	UserEditParam: null,

	actions: {
		selectUser: function(user){
			this.set('Edit', true);
			this.set('UserEditParam', {nickname : user.get('nickname')});
			this.set('UserEdit', user);
		},
		updateUser: function(){
			this.get('UserEdit').set('nickname',this.get('UserEditParam').nickname).save();
		},
		deleteUser: function(){
			this.set('Edit', false);
			this.get('UserEdit').destroyRecord();
			this.set('UserEdit', null);
			this.set('UserEditParam', null);
		}
	}

});