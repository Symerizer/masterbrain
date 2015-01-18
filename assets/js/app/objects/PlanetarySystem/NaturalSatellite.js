App.NaturalSatellite = App.AstronomicalObject.extend({

  init: function()
  {
    this._super();
  },

	draw: function(context, time)
	{

    context.save();
    context.rotate( this.calculRotate(time) + ((Math.PI * 180) / 180));
    context.translate(this.get('distance'),0);
      //context.fillRect(24,12,50,24); // Shadow
    this._super(context, time);
    context.restore();

    context.beginPath();
    context.arc(0,0,this.get('distance')+2,0,Math.PI*2,false);
    context.stroke();
	}

})