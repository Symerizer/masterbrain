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
						//console.log(err.ValidationError);
						if(!err)
						{
							req.session.user = newUser;
							res.redirect('/');
							sails.sockets.broadcast('user','User',{action: 'create', model : 'user', data : newUser}, sails.sockets.id(req.socket));
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
					res.view('loginCreate', {layout: null, type: true, action: '/', erreurAccount: "Wrong password or non-existing email. Please try again."})
				}


				User.findOne({email: req.param('email')}, function (err, u)
				{
					if (u)
					{
						var bcrypt = require('node-bcrypt');

						if (bcrypt.checkpw(req.param('password'), u.password))
						{
							req.session.user = u;
							res.view('homepage');
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

		//console.log(sails.sockets);

		sails.sockets.join(sails.sockets.id(req.socket), 'user');

		res.send(200);
	},

	update: function(req, res)
	{
		//if(req.method == 'POST')
		//{
			User.update({/*email: req.param('email'), password: req.param('password'),*/ nickname: 'salut34'/*req.param('nickname')*/}, function newUser(err, updateUser)
			{
				if(!err)
				{
					req.session.user = updateUser;
					res.redirect('/');
					sails.sockets.broadcast('user','User',{action: 'create', model : 'user', data : updateUser});
				}
				/*else
				{
					res.view('loginCreate',{layout: null, erreurAccount: "The email already exists. Please try again.", type: false, action: '/api/user'});
				}*/
			});
		//}
	}

};

