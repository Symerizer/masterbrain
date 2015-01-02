App.SystemsView = Ember.View.extend({
	tagName: "canvas",
	classNames: ['systems'],
	attributeBindings: ['height', 'width'],
	height: function(){
		return $('#spc-mainWindow').height();
	}.property('height'),
	width: function(){
		return $('#spc-mainWindow').width();
	}.property('width'),

	didInsertElement: function(){
		var context = this.get('element').getContext("2d");
		var jumpHeight = this.get('height') / 5;
		var jumpWidth = this.get('width') / 10; 

		for (var x = 0; x < this.get('width'); x += jumpWidth) {
			context.moveTo(x, 0);
			context.lineTo(x, this.get('height'));
		}

		for (var y = 0; y < this.get('height'); y += jumpHeight) {
			context.moveTo(0, y);
			context.lineTo(this.get('width'), y);
		}

		context.strokeStyle = "#fff";
		context.stroke();

		console.log(this.model);
	}

});