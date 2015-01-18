/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	/*find : function(req, res)
	{
		console.log(req.method);
		//return res.json(200,[{"id": 1,"email" : "nope@nope.com", "password" : "nope2"}]);
	},*/
	create : function(req,res)
	{
		if(!req.session.user)
		{
			if(req.method == 'POST')
			{

				var validator = require('validator');

				if(!validator.isEmail(req.param('email')) || validator.isNull(req.param('password')) || validator.isNull(req.param('nickname')))
				{
					res.view('loginCreate',{layout: null, erreurAccount: "Is not a email. Please try again.", type: false, action: '/api/user'});
				}
				else
				{
					User.create({email: req.param('email'), password: req.param('password'), nickname: req.param('nickname')}, function newUser(err, newUser){
						if(!err)
						{
							req.session.user = newUser.id;
							res.redirect('/');
							sails.sockets.broadcast('user','StoreSocket',{action: 'create', model : 'user', data : [newUser.toJSON()]}, req.socket);
						}
						else
						{
							res.view('loginCreate',{layout: null, erreurAccount: "The email already exists. Please try again.", type: false, action: '/api/user'});
						}
					});
				}
			}
			else
			{
				res.view('loginCreate',{layout: null, erreurAccount: "", type: false, action: '/api/user'});
			}
		}
		else
		{
			res.redirect('/');
		}
	},

	login : function(req, res)
	{
		if (!req.session.user)
		{

			if(req.method == 'POST')
			{

				var validator = require('validator');

				if(!validator.isEmail(req.param('email')) || validator.isNull(req.param('password')))
				{
					res.view('loginCreate', {layout: null, type: true, action: '/', erreurAccount: "Wrong password or non-existing email. Please try again."});
				}
				else
				{
					User.findOne({email: req.param('email')}, function (err, userFound)
					{
						if (userFound)
						{
							var bcrypt = require('node-bcrypt');

							if (bcrypt.checkpw(req.param('password'), userFound.password))
							{
								User.update(userFound.id, {online: true}, function updateUser(err, updateUser)
								{
									if(!err)
									{
										req.session.user = updateUser[0].id;
										sails.sockets.broadcast('user','StoreSocket',{action: 'update', model : 'user', data : [updateUser[0].toJSON()]}, req.socket);
										res.view('homepage');
									}
								});
							}
							else
							{
								res.view('loginCreate', {layout: null, type: true, action: '/', erreurAccount: "Wrong password or non-existing email. Please try again."})
							}
						}
						else
						{
							res.view('loginCreate', {layout: null, type: true, action: '/', erreurAccount: "Wrong password or non-existing email. Please try again."})
						}
					})
				}
			}
			else
			{
				res.view('loginCreate',{layout: null, erreurAccount: "", type: true, action: '/'});
			}
		}
		else
		{
			res.view('homepage');
		}
	},

	subscribe: function(req, res)
	{
		sails.sockets.join(sails.sockets.id(req.socket), 'user');

		res.send(200);
	},

	update: function(req, res)
	{

		if(req.method == 'PUT')
		{
			User.update(req.body.id, {nickname: req.body.nickname}, function updateUser(err, updateUser)
			{
				if(!err)
				{
					sails.sockets.broadcast('user','StoreSocket',{action: 'update', model : 'user', data : [updateUser[0].toJSON()]}, req.socket);
					res.json(updateUser[0]);
				}
			});
		}

	},

	destroy: function(req, res)
	{
		User.destroy(req.body.id, function deleteUser(err, deleteUser)
		{
			if(!err)
			{
					//req.session.user = updateUser[0].toJSON();
					sails.sockets.broadcast('user','StoreSocket',{action: 'delete', model : 'user', data : [deleteUser[0].id]}, req.socket);
					res.json({id : deleteUser[0].id});
			}
		}) 
	},

	logout: function(req, res)
	{
		if (req.session.user != null)
		{
			User.update(req.session.user, {online: false}, function updateUser(err, updateUser)
			{
				if(!err)
				{
					req.session.user = null;
					sails.sockets.broadcast('user','StoreSocket',{action: 'update', model : 'user', data : [updateUser[0].toJSON()]}, req.socket);
					res.redirect('/');
				}
			});
		}
		else
		{
			res.redirect('/');
		}

	}

};

