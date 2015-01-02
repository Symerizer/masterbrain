/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	

	find : function(req, res)
	{
		return res.json(200,[{"id": 1,"email" : "nope@nope.com", "password" : "nope2"}]);
	},

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
	}

};

