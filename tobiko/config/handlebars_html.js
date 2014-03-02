module.exports = {
	options : {
<<<<<<< HEAD
		partialDir : 'templates/partials',
		helperDir : 'templates/helpers'
	},
	dev: {
		src: 'templates/*.hbs',
		dest: '<%= buildPath %>',
		data: 'build/data.json',
=======
		partialDir : '<%= templates.partialDir %>',
		helperDir : '<%= templates.helperDir %>'
	},
	dev: {
		src: '<%= templates.dir %>/*.hbs',
		dest: '<%= buildPath %>',
		data: '<%= dataPath %>',
>>>>>>> e8d2d69f3d4fb658ccb15a0657f8111af42711de
	},
	prod: '<%= handlebars_html.dev %>'
}