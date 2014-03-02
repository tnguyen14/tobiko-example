module.exports = {
	options : {
<<<<<<< HEAD
		baseDir: 'contents',
=======
		baseDir: '<%= contentDir %>',
>>>>>>> e8d2d69f3d4fb658ccb15a0657f8111af42711de
		config : 'config.json',
		markdown: {
			breaks: true,
			smartLists: true,
			smartypants: true,
			langPrefix: 'language-'
		},
<<<<<<< HEAD
		paginate: [
			{
				dir: 'articles',
				postPerPage: 4,
				template: 'archive.hbs',
				title: 'Articles'
			}
		]
	},
	all: {
		src: 'contents/**/*.{json,md}',
		dest: 'build/data.json'
=======
		paginate: '<%= paginate %>'
	},
	all: {
		src: '<%= contentDir %>/**/*.{json,md}',
		dest: '<%= dataPath %>'
>>>>>>> e8d2d69f3d4fb658ccb15a0657f8111af42711de
	}
}