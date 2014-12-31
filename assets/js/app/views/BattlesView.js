App.BattlesView = Ember.View.extend({
	templateName: 'battles',

	didInsertElement: function()
	{
		var hexagon = App.Hexagon.create();

		var canvas  = document.querySelector('#canvas');

		var context = canvas.getContext('2d');

		context.fillStyle = "black";

		for(y = -2; y < 9; y++)
		{
			for(x = -2; x < 6; x++)
			{
				hexagon.draw(context, x * 120, y * 68);
				hexagon.draw(context, (x * 120) + 60, 34 + (y* 68));
			}
		}

		var spaceShip = new Image();
		spaceShip.src = 'images/spaceship.png';

		//context.drawImage(spaceShip,420,272)

		spaceShip.addEventListener('load', function() {
        context.drawImage(spaceShip, 228, 203);
    	}, false);



		/*hexagon.draw(context, 0, 0);
		hexagon.draw(context, 0, 68);
		hexagon.draw(context, 60, 34);*/


	},

	click: function(evt) {
    	console.log(evt);
  	},
});