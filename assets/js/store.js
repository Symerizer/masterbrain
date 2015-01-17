App.ApplicationStore = DS.Store.extend();


App.ApplicationAdapter = DS.Adapter.extend({

	namespace: 'api',
    log: true,

	createRecord: function(store, type, record){
		var data = this.serialize(record, { includeId: true });
    	var url = '/' + this.get('namespace') + '/' + type;

	    return new Ember.RSVP.Promise(function(resolve, reject) {
	      io.socket.post(url, data, function(data, jwres) {
	        Ember.run(null, resolve, data);
	      })
		});
	},

	deleteRecord: function(store, type, record) {
    	var data = this.serialize(record, { includeId: true });
	    var id = record.get('id');
	    var url = '/' + this.get('namespace') + '/' + [type.typeKey, id].join('/');

	    return new Ember.RSVP.Promise(function(resolve, reject) {
		    io.socket.delete(url, data, function(data, jwres) {
		        Ember.run(null, resolve, data);
		      })
		});
  	},


  	find: function(store, type, id) {
	    var url = '/' + this.get('namespace') + '/' + [type.typeKey, id].join('/');

	   	return new Ember.RSVP.Promise(function(resolve, reject) {
		    io.socket.get(url, function(data, jwres) {
		        Ember.run(null, resolve, data);
		      })
		});

	  },

	updateRecord: function(store, type, record){
		var data = this.serialize(record, { includeId: true });
		var id = record.get('id');
		var url = '/' + this.get('namespace') + '/' + [type.typeKey, id].join('/');

		return new Ember.RSVP.Promise(function(resolve, reject) {
		    io.socket.put(url, data, function(data, jwres) {

		        Ember.run(null, resolve, data);
		    })
		});
	},

	findAll: function(store, type){
		var url = '/' + this.get('namespace') + '/' + type.typeKey;

		console.log(url);

	   	return new Ember.RSVP.Promise(function(resolve, reject) {
		    io.socket.get(url, function(data, jwres) {
		    	console.log(data);
		        Ember.run(null, resolve, data);
		      })
		});
	},

	findQuery: function(store, type, query){
		var url = '/' + this.get('namespace') + '/' + type.typeKey;

	   	return new Ember.RSVP.Promise(function(resolve, reject) {
		    io.socket.get(url, query ,function(data, jwres) {
		    	//console.log(data);
		        Ember.run(null, resolve, data);
		      })
		});
	},

	init: function()
	{

		var store = this.container.lookup('store:main');

		io.socket.get('/api/user/subscribe');

		io.socket.on('StoreSocket', function(message)
		{
			switch(message.action)
			{
				case 'create':
				{
					store.pushMany(message.model, store.normalize(message.model, message.data));
					break;
		  		}
		  		case 'update':
		  		{
		  			store.pushMany(message.model, store.normalize(message.model, message.data));
		  			break;
		  		}
		  		case 'delete':
		  		{
		  			var record = null;
		  			for (i = 0; i < message.data.length; i++)
		  			{
		  				record = store.getById(message.model, message.data[i]);
		  				store.unloadRecord(record);
		  			}
		  			break;
		  		}
	  		}
		});
	}

});