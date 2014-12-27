/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	receiveMessage: function(req, res){
		sails.sockets.blast('sendMessage', req.param('sentMessage'));
		console.log(req.param('sentMessage'));
		res.send(200);
	}
};

