App.SystemsRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('system', {user: 'Shawn'});
	}
});