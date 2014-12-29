$(function(){

});
window.App = Ember.Application.create({
	LOG_ACTIVE_GENERATION: true
});

io.socket.on('sendMessage', function(message){
	$('.messages').append(message + '<br>');
});