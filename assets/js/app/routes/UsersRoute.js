App.UsersRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('user');
	},

	activate: function(){

		io.socket.get('/api/test');

		var eventName = Ember.String.camelize('User').toLowerCase();

		//console.log(eventName);

		/*socket.on('messageModel', function (messageModel)
		{

			io.socket.get('/api/Message');

			console.log(messageModel);

		  //var type = store.modelFor(message.model);
		  //var serializer = store.serializerFor(type.typeKey);
		  //var record = serializer.extractSingle(store, type, message.data);
		  //store.push(message.model, record);
		});*/
	}

});