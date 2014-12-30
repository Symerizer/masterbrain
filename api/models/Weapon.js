/**
* Weapon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'Weapon',
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {

		id: { type: 'integer', unique: true, autoIncrement: true, columnName: 'id', primaryKey: true, required: true },
		name : { type: 'string', size: 150, unique: true, required: true, columnName: 'name' },
		description: { type: 'string', size: 500, required: true, columnName: 'description' },


		spaceship: { collection: 'User-Spaceship', via: 'weapon'},

	}



};