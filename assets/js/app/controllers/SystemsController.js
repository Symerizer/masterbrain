App.SystemsController = Ember.ObjectController.extend({
	actions: {
		getUserLocation: function(){
			$.get("/api/location/1", function(data){
				console.log(data);
			});
		}
	}
});