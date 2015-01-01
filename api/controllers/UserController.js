/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	

	FindAll : function(req, res)
	{
		return res.json(200,[{"id": 1,"email" : "nope@nope.com", "password" : "nope2"}]);
	},

	test : function(req, res)
	{

		
		
		sails.sockets.blast('user');

		res.send(200);
	}

};

