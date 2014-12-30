/**
* User-Spaceship.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'User-spaceship',
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {

		id: { type: 'integer', unique: true, autoIncrement: true, columnName: 'id', primaryKey: true, required: true },
		current : { type: 'boolean', columnName: 'current', required: true },

		user: { model: 'User'},
		spaceship: { model: 'Spaceship'},
		weapon: {collection: 'Weapon', via: 'spaceship', dominant: true },
		equipment: {collection: 'Equipment', via: 'spaceship', dominant: true },

	}



};