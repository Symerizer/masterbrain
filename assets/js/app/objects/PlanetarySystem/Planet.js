App.Planet = Ember.Object.extend({

	positionX: 0,
	positionY: 0,
  radius: 0,
  image: null,
  time: null,

	init: function()
	{
    var tmpImage = new Image();
    tmpImage.src = this.get('imgUrl');
    this.set('image', tmpImage);
    this.set('time',new Date());
  },

  	/*setPosition: function(x,y)
  	{
  		this.set('positionX',x);
  		this.set('positionY',y);
  	},*/

  	draw: function(context)
  	{
      context.rotate( ((2*Math.PI)/60)*this.get('time').getSeconds() + ((2*Math.PI)/60000)*this.get('time').getMilliseconds() );
      context.translate(105,0);
      context.fillRect(0,-12,50,24); // Shadow
      context.drawImage(this.get('image'),-12,-12);
  	}

})