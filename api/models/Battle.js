/**
* Battle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	tableName: 'Battle',
	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: 
	{

		id: { type: 'integer', unique: true, autoIncrement: false, columnName: 'id', primaryKey: true, required: true },

		

	}



};