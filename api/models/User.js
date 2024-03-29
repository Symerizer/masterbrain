/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'users',
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {
		id: { type: 'integer', unique: true, autoIncrement: true, columnName: 'id', primaryKey: true },
		email: { type: 'email', required: true, unique: true, columnName: 'email' },
		password: { type: 'string', required: true, columnName: 'password' },
		nickname: { type: 'string', required: true, columnName: 'nickname', unique: true },
		online: { type: 'boolean', columnName: 'online', defaultsTo: true},

		friends: {
            collection: 'user',
            dominant:true
        },

		spaceship: { collection: 'User-Spaceship', via: 'spaceship' },
		system: {model: 'system'},

		
		toJSON: function()
		{
			var obj = this.toObject();
			delete obj.password;
			delete obj.email;

			return obj;
		},
	},


	beforeCreate: function(values,callback)
	{
		var bcrypt = require('node-bcrypt');

		var salt = bcrypt.gensalt(10);

		values.password = bcrypt.hashpw(values.password,salt);

		callback();

	},


};

