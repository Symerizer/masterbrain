/**
* Location.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	autoCreatedAt: false,
	autoUpdatedAt: false,

  attributes: {
  	id: { type: 'integer', unique: true, autoIncrement: true, columnName: 'id', primaryKey: true, required: true },
	user: { model: 'User'},
	system: { type: 'integer' },
	x: { type: 'integer' },
	y: { type: 'integer' }
  }
};

