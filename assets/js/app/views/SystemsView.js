App.SystemsView = Ember.View.extend({
	templateName: 'systems',

	list: [],

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

		var StarSun = App.Star.create({
			imgUrl : "images/Canvas_sun.png",
		});

		var NaturalSatelliteMoon = App.NaturalSatellite.create({
			imgUrl : "images/Canvas_moon.png",
			distance : 28.5,
			width : 3.5,
			height : 3.5,
			days: 0,
			hours: 0,
			minutes : 0,
			seconds : 6,
			milliseconds : 6000,
		});

		var NaturalSatelliteMoon2 = App.NaturalSatellite.create({
			imgUrl : "images/Canvas_moon.png",
			distance : 60,
			width : 3.5,
			height : 3.5,
			days: 0,
			hours: 0,
			minutes : 0,
			seconds : 3,
			milliseconds : 3000,
		});

		var PlanetEarth = App.Planet.create({
			imgUrl : "images/Canvas_earth.png",
			distance : 105,
			width : 24,
			height : 24,
			days: 0,
			hours: 0,
			minutes : 0,
			seconds : 60,
			milliseconds : 60000,
			listNaturalSatellite : new Array(NaturalSatelliteMoon)
		});

		tmplist = [];

		tmplist.push(PlanetEarth);
		tmplist.push(StarSun);

		this.set('list', tmplist);

		var that = this;

		context.globalCompositeOperation = 'destination-over';

		/*tmplist[0].image.addEventListener('load', function()
		{
			console.log(tmplist);
			tmplist[1].image.addEventListener('load', function()
			{*/
				window.requestAnimationFrame(function()
				{
					that.drawSystem(context);
				});
			/*}, false);
		}, false);*/

		//console.log(PlanetEarth.image);



	},

	drawSystem: function(context)
	{
		var time = new Date();

  		context.clearRect(0,0,300,300); // clearcanvas

  		context.fillStyle = 'rgba(0,0,0,0.4)';
		context.strokeStyle = 'rgba(0,153,255,0.4)';

		context.save();
		context.translate(150,150);

		//this.get('list')[2].draw(context, time);

		this.get('list')[0].draw(context, time);

		context.restore();

		/*context.beginPath();
		context.arc(150,150,50,0,Math.PI*2,false); // Earth orbit
		context.stroke();*/

		this.get('list')[1].draw(context, time);
		that = this;

		/*Ember.run(function(){
			that.drawSystem(context);
		})*/

		window.requestAnimationFrame(function()
		{
			that.drawSystem(context);
		});

	},

	click: function(evt) 
	{

		//if (evt.target.id == "canvas" && (150 + 105 -12 + this.get('list')[0].Mycontext))
			console.log((105 * Math.cos(this.get('list')[0].Mycontext)) + 150 -12);
			console.log((105 * Math.sin(this.get('list')[0].Mycontext)) + 150 - 12);
			//console.log(150 -12 + Math.sin(this.get('list')[0].Mycontext));
			//console.log(this.get('list')[0].Mycontext);
			//console.log(180 * this.get('list')[0].Mycontext / Math.PI);


  	},




});


