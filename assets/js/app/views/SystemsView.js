App.SystemsView = Ember.View.extend({
	templateName: 'systems',

	list: [];

	/*classNames: ['systems'],
	attributeBindings: ['height', 'width'],
	height: function(){
		//return $('#spc-mainWindow').height();
		return 300;
	}.property('height'),
	width: function(){
		//return $('#spc-mainWindow').width();
		return 300;
	}.property('width'),*/

	didInsertElement: function(){
		//var context = this.get('element').getContext("2d");

		//var jumpHeight = this.get('height') / 5;
		//var jumpWidth = this.get('width') / 10; 

		/*for (var x = 0; x < this.get('width'); x += jumpWidth) {
			context.moveTo(x, 0);
			context.lineTo(x, this.get('height'));
		}

		for (var y = 0; y < this.get('height'); y += jumpHeight) {
			context.moveTo(0, y);
			context.lineTo(this.get('width'), y);
		}*/

		//context.strokeStyle = "#fff";
		//context.stroke();

		var canvas  = document.querySelector('#canvas');

		var context = canvas.getContext('2d');

		context.globalCompositeOperation = 'destination-over';
  		context.clearRect(0,0,300,300); // clear canvas

		context.fillStyle = 'rgba(0,0,0,0.4)';
		context.strokeStyle = 'rgba(0,153,255,0.4)';
		context.save();
		context.translate(150,150);


		var PlanetEarth = App.Planet.create({
			imgUrl : "images/Canvas_earth.png"
		});
		var StarSun = App.Star.create({
			imgUrl : "images/Canvas_sun.png"
		});

		tmplist = [];

		tmplist.push(PlanetEarth);
		tmplist.push(StarSun);

		this.set('list', tmplist);

		PlanetEarth.image.addEventListener('load', function()
		{
			StarSun.image.addEventListener('load', function()
			{
				PlanetEarth.draw(context);
				context.restore();

				context.beginPath();
				context.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
				context.stroke();


				StarSun.draw(context);
        	}, false)
    	}, false);

		//console.log(PlanetEarth.image);



	},

	drawSystem: function(context)
	{

	}

});


