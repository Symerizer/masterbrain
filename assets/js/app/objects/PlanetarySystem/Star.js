App.Star = Ember.Object.extend({

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
      context.drawImage(this.get('image'),0,0,300,300);
  	}

})