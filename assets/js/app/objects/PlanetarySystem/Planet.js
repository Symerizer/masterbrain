App.Planet = Ember.Object.extend({

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

  	draw: function(context)
  	{
      var time = new Date();
      context.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
      context.translate(105,0);
      context.fillRect(0,-12,50,24); // Shadow
      context.drawImage(this.get('image'),-12,-12);
  	}

})