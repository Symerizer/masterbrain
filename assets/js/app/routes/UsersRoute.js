App.UsersRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('user');
	},

	activate : function(){

		//console.log(this.store.modelFor('user'));

		/*App.SocketAdapter.create({
			model : 'User',
			store : this.store
		})*/
	},

	deactivate : function(){

	}


});