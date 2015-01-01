App.Hexagon = Ember.Object.extend({

	/*positionX: 0,
	positionY: 0,*/
	EdgeLength: 40,
	angleX: 20,
	angleY: 34,

	init: function()
	{

  },

  	/*setPosition: function(x,y)
  	{
  		this.set('positionX',x);
  		this.set('positionY',y);
  	},*/

  	draw: function(context, positionX, positionY)
  	{
		context.beginPath();
  		context.moveTo(positionX, positionY);
  		context.lineTo(positionX + this.get('EdgeLength'), positionY);
  		context.lineTo(positionX + this.get('EdgeLength') + this.get('angleX'), positionY + this.get('angleY'));
  		context.lineTo(positionX + this.get('EdgeLength'), positionY + this.get('angleY') + this.get('angleY'));
  		context.lineTo(positionX, positionY + this.get('angleY') + this.get('angleY'));
  		context.lineTo(positionX - this.get('angleX'), positionY + this.get('angleY'));
      context.strokeStyle = '#8be2ff';
  		context.closePath();
  		context.stroke();
  	}//.property('positionX', 'positionY', 'angleX', 'angleY', 'EdgeLength')

})