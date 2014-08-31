module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'hbs:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
