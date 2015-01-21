App.Planet = App.AstronomicalObject.extend({

  listNaturalSatellite : [],
  center : null,

  init: function()
  {
    this._super();
  },

  	draw: function(context, time)
  	{
      context.save();
      var tmp = this.calculRotate(time);
      context.rotate(tmp);
      context.translate(this.get('distance'),0);
      context.fillRect(0,-12,50,24); // Shadow
      context.rotate( ((2*Math.PI)/2)*time.getSeconds() + ((2*Math.PI)/2000)*time.getMilliseconds() );
      this._super(context, time);

      for (i = 0; i < this.get('listNaturalSatellite').length; i++)
      {
        this.get('listNaturalSatellite')[i].draw(context, time);
      }

      var tmpcenter = { pointX : (105 * Math.cos(tmp)) + 150,
                        pointY : (105 * Math.sin(tmp)) + 150
                      };

      this.set('center', tmpcenter);

      context.restore();

      context.beginPath();
      context.arc(0,0,this.get('distance'),0,Math.PI*2,false); // Earth orbit
      context.stroke();

  	},

    hitbox: function(point)
    {

      if (Math.sqrt(Math.pow(point.positionX - this.get('center').pointX,2) + Math.pow(point.positionY - this.get('center').pointY,2)) < (this.get('width')/2))
        return true;
      else
        return false;
    }

})