App.Star = Ember.Object.extend({

	positionX: 0,
	positionY: 0,
  radius: 0,
  image: null,
  center: {pointX:150,pointY:150},
  width: 50,

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
  	},

    hitbox: function(point)
    {

      if (Math.sqrt(Math.pow(point.positionX - this.get('center').pointX,2) + Math.pow(point.positionY - this.get('center').pointY,2)) < (this.get('width')/2))
        return true;
      else
        return false;
    }

})