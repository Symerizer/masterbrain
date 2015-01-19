App.AstronomicalObject = Ember.Object.extend({

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

  	draw: function(context, time)
  	{
      	context.drawImage(this.get('image'),-(this.get('width')/2),-(this.get('height')/2));
  	},

  	calculRotate: function(time)
    {

      tmpCalcul = 0;

      if (this.get('hours') != 0)
      {
        tmpCalcul = tmpCalcul + ((2*Math.PI)/this.get('hours'))*time.getHours();
      }

      if (this.get('minutes') != 0)
      {
        tmpCalcul = tmpCalcul + ((2*Math.PI)/this.get('minutes'))*time.getMinutes();
      }

      if (this.get('seconds') != 0)
      {
        tmpCalcul = tmpCalcul + ((2*Math.PI)/this.get('seconds'))*time.getSeconds();
      }

      if (this.get('milliseconds') != 0)
      {
        tmpCalcul = tmpCalcul + ((2*Math.PI)/this.get('milliseconds'))*time.getMilliseconds();
      }

      return tmpCalcul;

    }

})