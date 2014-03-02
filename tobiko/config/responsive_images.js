module.exports = {
	build: {
		options: {
			sizes: [{
				name: 'small',
				width: 500
			}, {
				name: 'medium',
				width: 800
			}]
		},
		files: [
<<<<<<< HEAD
			{expand: true, cwd: 'contents', src: ['**/*.{jpg,png}'], dest: '<%= buildPath %>'}
=======
			{expand: true, cwd: 'contents', src: '**/*.{jpg,png}', dest: '<%= buildPath %>'}
>>>>>>> e8d2d69f3d4fb658ccb15a0657f8111af42711de
		]
	}
}