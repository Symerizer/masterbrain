App.NaturalSatellite = Ember.Object.extend({

	positionX: 0,
	positionY: 0,
  	radius: 0,
  	image: null,

	init: function()
	{
    var tmpImage = new Image();
    tmpImage.src = this.get('imgUrl');
    this.set('image', tmpImage);
  },

  	/*setPosition: function(x,y)
  	{
  		this.set('positionX',x);
  		this.set('positionY',y);
  	},*/

  	draw: function(context, time)
  	{
		context.save();
		context.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
		context.translate(0,28.5);
		context.drawImage(this.get('image'),-3.5,-3.5);
		context.restore();

  	}

})