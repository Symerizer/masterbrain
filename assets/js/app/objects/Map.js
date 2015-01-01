App.Map = Ember.Object.extend({

	arrayHexagones: [],
	Hexagon: null,
	Context: null,

	init: function()
	{
		this.set('Hexagon', App.Hexagon.create());

		this.set('Context', this.get('contxt'));

		for(y = -2; y < 9; y++)
		{
			for(x = -2; x < 6; x++)
			{
				this.get('Hexagon').draw(this.get('Context'), x * 120, y * 68);
				this.get('Hexagon').draw(this.get('Context'), (x * 120) + 60, 34 + (y* 68));
			}
		}
  	},

	moveForward : function(distance)
	{
		
	},


})