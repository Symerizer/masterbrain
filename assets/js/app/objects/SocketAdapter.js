App.SocketAdapter = Ember.Object.extend({


	Mystore : null,
	Mymodel : null,

	init: function()
	{


		this.set('Mystore',this.get('store'));
		this.set('Mymodel',this.get('model'));

		this.subscribe(this.get('model'), this.get('store'));

  	},

  	/*setPosition: function(x,y)
  	{
  		this.set('positionX',x);
  		this.set('positionY',y);
  	},*/

  	subscribe: function(model, store)
  	{

  		io.socket.on(model, function(message)
		{
			switch(message.action)
			{
				case 'create':
				{
					var type = store.modelFor(message.model);
		  			var serializer = store.serializerFor(type.typeKey);;
		 			var record = serializer.extractSingle(store, type, message.data);
		  			store.push(message.model, record);
		  		}
		  		case 'update':
		  		{

		  		}
	  		}
		});

  		io.socket.get('/api/'+ model + '/subscribe');
  	},

  	unsubscribe: function(model)
  	{
  		io.socket.get('/api/'+ model + '/unsubscribe');
  	},



})