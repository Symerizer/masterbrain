/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	receiveMessage: function(req, res){
		sails.sockets.blast('sendMessage', req.param('sentMessage').replace(/</g,'&#60').replace(/>/g,'&#62'));
		console.log(req.param('sentMessage').replace(/</g,'&#60').replace(/>/g,'&#62'));
		res.send(200);
	}
};

