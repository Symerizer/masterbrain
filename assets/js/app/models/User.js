App.User = DS.Model.extend({
	nickname: DS.attr('string'),
	online: DS.attr('boolean'),
});