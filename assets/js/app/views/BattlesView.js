App.BattlesView = Ember.View.extend({
	templateName: 'battles',

	didInsertElement: function()
	{

		var canvas  = document.querySelector('#canvas');

		var context = canvas.getContext('2d');

		var Fondetoiles = new Image();
		Fondetoiles.src = 'images/Fondetoiles.jpg';


		Fondetoiles.addEventListener('load', function() 
		{
        	context.drawImage(Fondetoiles, 0, 0);

        	var map = App.Map.create({
  				contxt: context
			});

			var spaceShip = new Image();
			spaceShip.src = 'images/spaceship.png';

			spaceShip.addEventListener('load', function()
			{
	        	context.drawImage(spaceShip, 228, 203);
	    	}, false);

	    }, false);



		/*hexagon.draw(context, 0, 0);
		hexagon.draw(context, 0, 68);
		hexagon.draw(context, 60, 34);*/


	},

	click: function(evt) {
    	console.log(evt);
  	},
});