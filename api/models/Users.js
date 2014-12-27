/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'users',

	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {
		id: { type: 'integer', unique: true, autoIncrement: true, columnName: 'id', primaryKey: true, required: true },
		email: { type: 'email', required: true, unique: true, columnName: 'email' },
		password: { type: 'string', required: true, columnName: 'password' }
	}
};

